
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

function readLine(str) {
    rl.setPrompt(str+'> ');
    rl.prompt();
    rl.on('line', function (line) {
        if (line === "right") rl.close();
        return line;

    }).on('close', function () {
        return null;
    });
}