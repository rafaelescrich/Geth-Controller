require('colors')

const Server = require('./server').Server
const addUserResources = require('./users').addUserResources
const config = require('../config')
const exec = require('child_process').exec

let server = new Server(config)
let wsRunning = false

addUserResources(server.app, config.apiPath + '/users')

server.run().then( () => {
  console.log(' Server listen at ' + config.port.toString().bold)
})

initGeth()

function initGeth(){
  server.app.get('/api/connect', (req, res, next) => {

    console.log('wsRunning', wsRunning)
    if(wsRunning){
      sendWSRunning(res)
      return
    } 

    const execPath = (process.env.NODE_ENV === 'production')
                      ? 'gnome-terminal -e "sh "dist/rinkeby.ws.sh""'
                      : 'gnome-terminal -e "sh "src/rinkeby.ws.sh""'
    exec(execPath,
          (error, stdout, stderr) => {
              console.log(`${stdout}`)
              console.log(`${stderr}`)

              if (error !== null){ 
                  console.log(`exec error: ${error}`)
                  wsRunning = false
              }
              else{
                wsRunning = true
                console.log('wsRunning', wsRunning)
              }
              
              sendWSRunning(res)
          })
  })
}

function sendWSRunning(res){
  res.send(JSON.stringify({
    wsRunning
  }))
}