/**
 * Activity Server — HTTP API for external integration
 *
 * Allows external systems (like Jarvis) to create/update agents in Pixel Agents
 * via HTTP requests instead of terminal JSONL files.
 *
 * Endpoints:
 *   POST /agent          — Create a new virtual agent
 *   DELETE /agent/:id    — Remove an agent
 *   POST /agent/:id/activity — Send activity update
 *   GET  /status         — Health check
 */

import * as http from 'http';
import { URL } from 'url';

const PORT = 7893;

interface AgentEvent {
	id?: number;
	name?: string;
	project?: string;
	skill?: string;
	status?: 'active' | 'waiting' | 'permission' | 'idle';
	tool?: string;
	message?: string;
}

type EventHandler = (event: AgentEvent) => void;

let eventHandler: EventHandler | null = null;
let server: http.Server | null = null;

function parseBody(req: http.IncomingMessage): Promise<Record<string, unknown>> {
	return new Promise((resolve, reject) => {
		let body = '';
		req.on('data', chunk => body += chunk);
		req.on('end', () => {
			try {
				resolve(body ? JSON.parse(body) : {});
			} catch (e) {
				reject(e);
			}
		});
		req.on('error', reject);
	});
}

function sendJson(res: http.ServerResponse, status: number, data: unknown) {
	res.writeHead(status, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
	res.end(JSON.stringify(data));
}

function corsHeaders(res: http.ServerResponse) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export function startActivityServer(onEvent: EventHandler): Promise<number> {
	return new Promise((resolve, reject) => {
		eventHandler = onEvent;

		server = http.createServer(async (req, res) => {
			corsHeaders(res);

			if (req.method === 'OPTIONS') {
				res.writeHead(204);
				res.end();
				return;
			}

			const url = new URL(req.url || '/', `http://localhost:${PORT}`);
			const path = url.pathname;
			const method = req.method;

			try {
				if (path === '/status' && method === 'GET') {
					sendJson(res, 200, { ok: true, server: 'pixel-agents-activity', port: PORT });
					return;
				}

				if (path === '/agent' && method === 'POST') {
					const body = await parseBody(req) as AgentEvent;
					eventHandler?.({ ...body, status: body.status || 'active' });
					sendJson(res, 201, { ok: true, agent: body.name });
					return;
				}

				if (path === '/agent' && method === 'DELETE') {
					const body = await parseBody(req) as { id?: number };
					eventHandler?.({ id: body.id, name: '', status: 'idle' });
					sendJson(res, 200, { ok: true });
					return;
				}

				const activityMatch = path.match(/^\/agent\/(\d+)\/activity$/);
				if (activityMatch && method === 'POST') {
					const agentId = parseInt(activityMatch[1], 10);
					const body = await parseBody(req) as AgentEvent;
					eventHandler?.({ id: agentId, ...body });
					sendJson(res, 200, { ok: true });
					return;
				}

				sendJson(res, 404, { error: 'Not found' });
			} catch (e) {
				sendJson(res, 500, { error: String(e) });
			}
		});

		server.on('error', (err: NodeJS.ErrnoException) => {
			if (err.code === 'EADDRINUSE') {
				console.log(`[ActivityServer] Port ${PORT} in use, skipping HTTP server`);
				resolve(PORT);
			} else {
				reject(err);
			}
		});

		server.listen(PORT, () => {
			console.log(`[ActivityServer] Listening on http://localhost:${PORT}`);
			resolve(PORT);
		});
	});
}

export function stopActivityServer(): Promise<void> {
	return new Promise((resolve) => {
		if (server) {
			server.close(() => {
				server = null;
				eventHandler = null;
				resolve();
			});
		} else {
			resolve();
		}
	});
}
