import { contextBridge } from 'electron';
import * as system from './api/preloads/system';

contextBridge.exposeInMainWorld('electronAPI', {
    system,
});