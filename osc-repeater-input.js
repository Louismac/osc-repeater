const WebSocket = require('ws');
const { Server } = require('node-osc');
const INPUT_PORT = 12345;
const OSC_ADDRESS = "/toMimic"
var oscServer = new Server(INPUT_PORT, '127.0.0.1', () => {
  console.log('OSC Server is listening');
});

oscServer.on('message', function (msg) {
  console.log(msg);
  let floats  = [msg[0]];
  msg.forEach((v)=> {
    let f = parseFloat(v);
    if(!isNaN(f))
    {
      floats.push(f);
    }
  });
  console.log('sending', floats);
  if(socket !== undefined)
  {
    if(socket.readyState == 1)
    {
      socket.send(JSON.stringify(floats))
    }

  }
});

const wss = new WebSocket.Server({port: 8080});
let socket;
console.log("Running repeater");
wss.on('connection', function connection(ws) {
  socket = ws;
})
