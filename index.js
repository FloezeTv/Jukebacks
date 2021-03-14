require('./src/globals.js');
const { app, BrowserWindow } = require('electron');

// only allow one instance
if (app.requestSingleInstanceLock()) {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        BrowserWindow.getAllWindows()[0].restore();
        BrowserWindow.getAllWindows()[0].focus();
    })
} else {
    app.quit();
    process.exit(0);
}

const backend = require('./src/backend/index.js');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    // load the index
    mainWindow.loadURL(backend.getURL().href);
};

app.on('ready', createWindow);
app.on('ready', () => console.log('electron app started'));

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
});