"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximizeWindow = exports.minimizeWindow = exports.closeWindow = void 0;
const electron_1 = require("electron");
//let titlebar;
// window.addEventListener('DOMContentLoaded', () => {
//     titlebar = new Titlebar({
//         backgroundColor: TitlebarColor.fromHex("#1D1B20"),
//         svgColor: TitlebarColor.WHITE,
//         icon: path.join(__dirname, '../../../src/assets/images/tkp.png')
//         //menu: null // = do not automatically use Menu.applicationMenu
//     })
// });
// Core
function closeWindow() {
    electron_1.ipcRenderer.invoke('system:closeWindow');
}
exports.closeWindow = closeWindow;
function minimizeWindow() {
    electron_1.ipcRenderer.invoke('system:minimizeWindow');
}
exports.minimizeWindow = minimizeWindow;
function maximizeWindow() {
    electron_1.ipcRenderer.invoke('system:maximizeWindow');
}
exports.maximizeWindow = maximizeWindow;
//# sourceMappingURL=system.js.map