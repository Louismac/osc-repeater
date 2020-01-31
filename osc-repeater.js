const WebSocket = require('ws');
const { Client } = require('node-osc');
const OUTPUT_PORT = 57120;
const OSC_ADDRESS = "/frommimic"
const client = new Client('127.0.0.1', OUTPUT_PORT);
const wss = new WebSocket.Server({port: 8080});
console.log("Running wekinator repeater");
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    const vals = message.split(",");
    let floats  = [];
    vals.forEach((v)=> {
      let f = parseFloat(v);
      if(!isNaN(f))
      {
        floats.push(f);
      }
    });
    console.log('sending', floats);
    client.send(OSC_ADDRESS, floats, () => {

    });
  });
  ws.send('hello from server');
});
