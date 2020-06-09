# osc-repeater-output
Uses websockets to pick up data from mimic and send via OSC

# install
run npm install

# run
node osc-repeater-output.js 

Fork this mimic project to send output from the Learner.js library to the node program, which will forward on OSC https://mimicproject.com/code/247e4538-0366-b735-9052-0e875a96a140

You can change the OUTPUT_PORT and OSC_ADDRESS variables accordingly.

# osc-repeater-input
Uses websockets to pick up data from OSC and send to MIMIC via Websockets

# install
run npm install

# run
node osc-repeater-input.js

Send OSC to \toMimic, 127.0.0.1, port:12345

Fork this mimic project to receive input to the Learner.js library from the node server

https://mimicproject.com/code/10fe5752-913e-71d8-3fd4-0ec0f0b9f4f3

You can change the OUTPUT_PORT and OSC_ADDRESS variables accordingly.
