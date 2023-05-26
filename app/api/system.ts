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

function handleResizeWindowToHome() {
    const window = BrowserWindow.getFocusedWindow();
    window?.setMinimumSize(1024, 720);
    window?.setSize(1024, 720);
}

function handleResizeWindowToLogin() {
    const window = BrowserWindow.getFocusedWindow();
    window?.setMinimumSize(820, 520);
    window?.setSize(820, 520);
}

export default {
    addHandlers: (ipcMain) => {
        ipcMain.handle('system:closeWindow', handleCloseApp);
        ipcMain.handle('system:minimizeWindow', handleMinimizeWindow);
        ipcMain.handle('system:maximizeWindow', handleMaximizeWindow);
        ipcMain.handle('system:resizeWindowToHome', handleResizeWindowToHome);
        ipcMain.handle('system:resizeWindowToLogin', handleResizeWindowToLogin);
    }
}