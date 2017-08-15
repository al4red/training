var Menu = require('terminal-menu');
var DoublyList = require('./list.js');
var readLine = require('./readLine.js').readFuncLine;


var list =  new DoublyList();


var menu = Menu({ width: 29, x: 4, y: 2 });
menu.reset();
menu.write('Lista dubla inlanutuita\n  ');
menu.write('-------------------------\n');

menu.add('Adauga un nod      ');
menu.add('Cauta la pozitia   ');
menu.add('Sterga la pozitia  ');
menu.add('Afiseaza           ');
menu.add('Exit               ');


menu.on('select', function (label, index) {

    switch(index) {
        case 0:
       console.log("Adauga               ");
            var data = readLine("Adauga Node");
            console.log("LIne : " +data +" \n");
            list.add(data);
            break;

        case 1:
            console.log("Cauta            ");
            var data = readLine("Pozitia");
            list.searchNodeAt(data)
            break;
        case 2:
            console.log("Sterge           ");
            var data = readLine("Pozitia");
            list.remove(data);
            break;

        case 3:
            console.log("Afiseaza         ");

            list.print();
            break;
        case 4:  // if (x === 'value2')
            console.log("                 ");
            break;

        default:

            break
    }
 //   console.log(index + ' SELECTED: ' + label );
});
process.stdin.pipe(menu.createStream()).pipe(process.stdout);

process.stdin.setRawMode(true);
menu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
});