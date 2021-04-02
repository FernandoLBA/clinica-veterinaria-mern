const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let appWindow;

function crearVentana() {
     appWindow = new BrowserWindow({
          width: 1200,
          height: 600,
          center: true,
          resizable: true,
          minWidth: 600,
          minHeight: 400,
          show: false,
          incon: 'icon.png'
     });

     appWindow.loadURL(
          isDev
               ? 'http://localhost:3000'
               : `file://${path.join(__dirname, "../build/index.html")}`
     );

     // Cuando la app esté lista para verse
     appWindow.once('ready-to-show', () => {
          appWindow.show();
     });
}

app.on('ready', crearVentana);

// PARA MAC ----------------------------------------------------
// En mac al presionar el botón rojo de la venta, la aplicación 
// no se cierra.
app.on('window-all-closed', () => {
     // Quiere decir que no es una app de mac y al presionar el botón x de la ventana se cierre la app.
     if(process.platform !== 'darwin'){
          app.quit();
     };
});

app.on('activate', () => {
     if(appWindow === null){
          crearVentana();
     };
});
// -------------------------------------------------------------

