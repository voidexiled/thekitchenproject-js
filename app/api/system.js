"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
function handleCloseApp() {
    electron_1.app.quit();
}
function handleMinimizeWindow() {
    var _a;
    (_a = electron_1.BrowserWindow.getFocusedWindow()) === null || _a === void 0 ? void 0 : _a.minimize();
}
function handleMaximizeWindow() {
    const window = electron_1.BrowserWindow.getFocusedWindow();
    if (window === null || window === void 0 ? void 0 : window.isMaximized()) {
        window.unmaximize();
    }
    else {
        window === null || window === void 0 ? void 0 : window.maximize();
    }
}
function handleResizeWindowToHome() {
    const window = electron_1.BrowserWindow.getFocusedWindow();
    window === null || window === void 0 ? void 0 : window.setMinimumSize(1024, 720);
    window === null || window === void 0 ? void 0 : window.setSize(1024, 720);
}
function handleResizeWindowToLogin() {
    const window = electron_1.BrowserWindow.getFocusedWindow();
    window === null || window === void 0 ? void 0 : window.setMinimumSize(820, 520);
    window === null || window === void 0 ? void 0 : window.setSize(820, 520);
}
exports.default = {
    addHandlers: (ipcMain) => {
        ipcMain.handle('system:closeWindow', handleCloseApp);
        ipcMain.handle('system:minimizeWindow', handleMinimizeWindow);
        ipcMain.handle('system:maximizeWindow', handleMaximizeWindow);
        ipcMain.handle('system:resizeWindowToHome', handleResizeWindowToHome);
        ipcMain.handle('system:resizeWindowToLogin', handleResizeWindowToLogin);
    }
};
//# sourceMappingURL=system.js.map