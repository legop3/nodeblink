const delay = require('delay');
const {exec} = require('child_process');
const { randomInt } = require('crypto');



// var osu = require('node-os-utils')

// var cpu = osu.cpu

// cpu.usage()
//   .then(info => {
//     console.log(info)
//   })
// var os = require('os-utils');

// os.cpuUsage(function(v){
//     console.log( 'CPU Usage (%): ' + v );
// });
// var os = require('os');

// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem())
// var InputEvent = require('input-event');

// var input = new InputEvent('/dev/input/event0');

// var keyboard = new InputEvent.Keyboard(input);

// keyboard.on('keyup'   , console.log);
// keyboard.on('keydown' , console.log);
// keyboard.on('keypress', console.log);

function ion() {
    exec('light -Srs sysfs/leds/tpacpi::lid_logo_dot 1')
    exec('light -Srs sysfs/leds/tpacpi::power 1')
    // exec('light -Srs sysfs/leds/platform::micmute 1')
}

function ioff() {
    exec('light -Srs sysfs/leds/tpacpi::lid_logo_dot 0')
    exec('light -Srs sysfs/leds/tpacpi::power 0')
    // exec('light -Srs sysfs/leds/platform::micmute 0')
}




(async () => {

    while(true){
// console.log('wa')
ion()
await delay(randomInt(1000));
// console.log('we')
ioff()
await delay(10)
// console.log('wei')
await delay(randomInt(1000))
}})();
