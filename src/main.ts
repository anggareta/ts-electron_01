const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron');
const path = require('path');

const createWindow = () => {
  //const titleBarColor = nativeTheme.shouldUseDarkColors ? '#FFFFFF' : '#FF0000';
  const symbolColor = nativeTheme.shouldUseDarkColors ? '#FF0000' : '#FFFFFF';
  const win = new BrowserWindow({
    //autoHideMenuBar: true,
    //frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      height: 29,
      color: symbolColor,
      //titleBarColor
    },
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  //win.setMenu(null);
  //win.removeMenu();

  ipcMain.handle('ping', () => 'pong');

  ipcMain.handle('dari', () => {
    console.log('ok..ok..ok..');
    return 'pong';
  });

  win.loadFile('index.html');

  ipcMain.handle('dark-mode:toggle', () => {
    //console.log('masuk');
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light';
    } else {
      nativeTheme.themeSource = 'dark';
    }
    return nativeTheme.shouldUseDarkColors;
  });

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system';
  });
};

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