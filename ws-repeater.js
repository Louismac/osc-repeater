const WebSocket = require('ws');
const INPUT_PORT = 12345;
const OUTPUT_PORT = 8080;
let output_socket;
const input_wss = new WebSocket.Server({port: INPUT_PORT});
input_wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log(message)
    if(output_socket !== undefined)
    {
      if(output_socket.readyState == 1)
      {
        output_socket.send(message)
      }
    }
  })
})

const output_wss = new WebSocket.Server({port: OUTPUT_PORT});

console.log("Running repeater");
output_wss.on('connection', function connection(ws) {
  output_socket = ws;
})
