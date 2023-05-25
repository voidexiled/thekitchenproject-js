import { ipcRenderer, Menu } from 'electron';
//import { Titlebar, TitlebarColor } from "custom-electron-titlebar";
import path from 'path';
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
export function closeWindow() {
    ipcRenderer.invoke('system:closeWindow');
}


export function minimizeWindow() {
    ipcRenderer.invoke('system:minimizeWindow');
}


export function maximizeWindow() {
    ipcRenderer.invoke('system:maximizeWindow');
}