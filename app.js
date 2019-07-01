const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let playerOneTurn = true;

const board = {
  '1': null,
  '2': null,
  '3': null,
  '4': null,
  '5': null,
  '6': null,
  '7': null,
  '8': null,
  '9': null
};

console.log(`
      1 | 2 | 3
      ---------
      4 | 5 | 6
      ---------
      7 | 8 | 9
`);

rl.question('Which space? ', space => {

});

const generateBoard = () => {

}