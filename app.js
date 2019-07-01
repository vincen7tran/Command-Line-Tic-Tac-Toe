const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let playerOneTurn = true;

const board = {
  '1': ' ',
  '2': ' ',
  '3': ' ',
  '4': ' ',
  '5': ' ',
  '6': ' ',
  '7': ' ',
  '8': ' ',
  '9': ' ' 
};

console.log(`
      1 | 2 | 3
      ---------
      4 | 5 | 6
      ---------
      7 | 8 | 9
`);

const startGame = () => {
  playerTurn(playerOneTurn);
};

const playerTurn = async (playerOne) => {
  if (playerOne) {
    rl.question('Player 1 which space? ', space => {
      board[space] = 'x';
      generateBoard();
    });
  } else {
    rl.question('Player 2 which space? ', space => {
      board[space] = 'o';
      generateBoard();
    });
  }
}

const generateBoard = () => {
  console.log(`
    ${board[1]} | ${board[2]} | ${board[3]}
   -----------
    ${board[4]} | ${board[5]} | ${board[6]}
   -----------
    ${board[7]} | ${board[8]} | ${board[9]}
  `);
  
  playerOneTurn = !playerOneTurn;
  startGame();
};

startGame();