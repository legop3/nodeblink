const delay = require('delay');
const {exec} = require('child_process')


function ion() {
    exec('light -Srs sysfs/leds/tpacpi::lid_logo_dot 1')
}

function ioff() {
    exec('light -Srs sysfs/leds/tpacpi::lid_logo_dot 0')
}




(async () => {

    while(true){
console.log('wa')
ion()
        await delay(10);
console.log('we')
ioff()
        await delay(10)
console.log('wei')
        await delay(300)
}})();
