
/**
 * Created by andrei.tarus on 7/18/2017.
 */

var menu = require('./menu.js');

menu.menu();

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question('Alege o optiune: ', function (name) {


        // process.stdout.write('Well hello ' + answer);
        // Console.log creates a formatted output from process.stdout.write().
        console.log(' Ati ales optiunea ' + name );

        rl.close();
        process.stdin.destroy();


});