import * as vscode from 'vscode';
import { PixelAgentsViewProvider } from './PixelAgentsViewProvider.js';
import { startActivityServer, stopActivityServer } from './activityServer.js';
import { VIEW_ID, COMMAND_SHOW_PANEL, COMMAND_EXPORT_DEFAULT_LAYOUT } from './constants.js';

let providerInstance: PixelAgentsViewProvider | undefined;

export function activate(context: vscode.ExtensionContext) {
	const provider = new PixelAgentsViewProvider(context);
	providerInstance = provider;

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(VIEW_ID, provider)
	);

	// Start HTTP activity server for external integrations
	startActivityServer((event) => {
		provider.handleExternalEvent(event);
	}).then((port) => {
		if (port > 0) {
			console.log(`[Pixel Agents] Activity server ready on port ${port}`);
		}
	}).catch((err) => {
		console.error('[Pixel Agents] Failed to start activity server:', err);
	});

	context.subscriptions.push(
		vscode.commands.registerCommand(COMMAND_SHOW_PANEL, () => {
			vscode.commands.executeCommand(`${VIEW_ID}.focus`);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(COMMAND_EXPORT_DEFAULT_LAYOUT, () => {
			provider.exportDefaultLayout();
		})
	);
}

export function deactivate() {
	stopActivityServer().then(() => {
		console.log('[Pixel Agents] Activity server stopped');
	});
	providerInstance?.dispose();
}
