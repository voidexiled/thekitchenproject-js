import { app, BrowserWindow } from 'electron';

function handleCloseApp() {
    app.quit();
}

function handleMinimizeWindow() {
    BrowserWindow.getFocusedWindow()?.minimize();
}

function handleMaximizeWindow() {
    const window = BrowserWindow.getFocusedWindow();
    if (window?.isMaximized()) {
        window.unmaximize();
    } else {
        window?.maximize();
    }
}

export default {
    addHandlers: (ipcMain) => {
        ipcMain.handle('system:closeWindow', handleCloseApp);
        ipcMain.handle('system:minimizeWindow', handleMinimizeWindow);
        ipcMain.handle('system:maximizeWindow', handleMaximizeWindow);
    }
}