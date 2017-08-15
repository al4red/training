
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

function readFuncLine(str) {
    var line = '';
    rl.setPrompt(str+ ' >');
    rl.prompt();
    rl.on('line', function (line) {
        if (line === "right") rl.close();
        console.log(" Line " + line + " \n");
        rl.prompt();
        //return line;
    }).on('close', function () {
        return null;
    });

    return line;
}

exports.readFuncLine = readFuncLine;