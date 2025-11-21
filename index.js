import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 320,
        minHeight: 240,
        autoHideMenuBar: true,
        icon: path.join(__dirname, "assets", "icon.ico")
    });

    win.loadFile('index.html');
}

app.commandLine.appendSwitch("use-angle", "d3d11");
app.commandLine.appendSwitch("use-gl", "desktop");
app.commandLine.appendSwitch("ignore-gpu-blocklist");

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});