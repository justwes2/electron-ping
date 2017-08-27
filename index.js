const {app, Menu, Tray} = require('electron')
const notify = require('electron-main-notification')
const ping = require('ping')

// app.dock.hide()

let tray = null
app.on('ready', () => {
  tray = new Tray('tray_icon_black.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'clickButton', click() {console.log('clicked button')}},
    {label: 'changeIcon', click(){
      changeIcon()
    }},
    {label: 'Ping Google', click() {
      pingGoogle()
    }},
    {label: 'Item4', type: 'radio'},
    {role: 'quit'}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
  setInterval(pingGoogle, 5000)
})

function changeIcon() {
  tray.setImage('tray_icon_purple.png')
}

function pingGoogle() {
  ping.promise.probe('google.com').then(function (res) {
    console.log(res);
    if (res.alive){
      notify(res.time);
    } else {
      notify("Cannot connect to google")
    }
  })
}
