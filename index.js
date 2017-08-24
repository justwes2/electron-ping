const {app, Menu, Tray} = require('electron')
const notify = require('electron-main-notification')

// app.dock.hide()

let tray = null
app.on('ready', () => {
  tray = new Tray('tray_icon_black.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'clickButton', click() {console.log('clicked button')}},
    {label: 'changeIcon', click(){
      changeIcon()
    }},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'},
    {role: 'quit'}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
  setInterval(function() {
    notify('Hello World')}, 5000)
})

function changeIcon() {
  tray.setImage('tray_icon_purple.png')
}
