# getting started
First, you will need to install node on your computer if you dont already have it. 
[Download Node.js](https://nodejs.org/en/download)

# osc-repeater-output
Uses websockets to pick up data from mimic and send via OSC

## navigate to folder
Open Terminal (OSX) or Command Prompt (Windows) and use 'cd' to navigate to the osc-repeater directory 

## install
``npm install``

## run
``node osc-repeater-output.js``

Fork this [mimic project](https://mimicproject.com/code/247e4538-0366-b735-9052-0e875a96a140)to send output from the Learner.js library to the node program, which will forward on OSC 

You can change the OUTPUT_PORT and OSC_ADDRESS variables accordingly.

# osc-repeater-input
Uses websockets to pick up data from OSC and send to MIMIC via Websockets

## navigate to folder
Open Terminal (OSX) or Command Prompt (Windows) and use 'cd' to navigate to the osc-repeater directory 

## install
``npm install``

## run
``node osc-repeater-input.js``

Send OSC to \toMimic, 127.0.0.1, port:12345

Fork this [mimic project](https://mimicproject.com/code/10fe5752-913e-71d8-3fd4-0ec0f0b9f4f3) to receive input to the Learner.js library from the node server

You can change the OUTPUT_PORT and OSC_ADDRESS variables accordingly.
