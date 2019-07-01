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
  board[1] = ' ';
  board[2] = ' ';
  board[3] = ' ';
  board[4] = ' ';
  board[5] = ' ';
  board[6] = ' ';
  board[7] = ' ';
  board[8] = ' ';
  board[9] = ' ';
  playerTurn();
};

const replay = () => {
  rl.question('Play again? Y/N ', answer => {
    if (answer === 'Y' || answer === 'y') startGame();
    else rl.close();
  });
}

const playerTurn = () => {
  if (playerOneTurn) {
    rl.question('Player 1 which space? ', space => {
      if (board[space] !== ' ') {
        console.log('Space is taken, try again!');
        playerTurn()
      } else {
        board[space] = 'x';
        generateBoard();
      }
    });
  } else {
    rl.question('Player 2 which space? ', space => {
      if (board[space] !== ' ') {
        console.log('Space is taken, try again!');
        playerTurn()
      } else {
        board[space] = 'o';
        generateBoard();
      }
    });
  }
}

const generateBoard = () => {
  console.log(`
    ${board[1]} | ${board[2]} | ${board[3]}        1 | 2 | 3
   -----------     -------------
    ${board[4]} | ${board[5]} | ${board[6]}        4 | 5 | 6
   -----------     -------------
    ${board[7]} | ${board[8]} | ${board[9]}        7 | 8 | 9
  `);
  
  const xWin = checkVictory('x');
  const yWin = checkVictory('o');

  if (!xWin && !yWin) {
    playerOneTurn = !playerOneTurn;
    playerTurn();
  } else {
    replay();
  }
};

const checkVictory = (player) => {
  if (
    board[1] === player && board[2] === player && board[3] === player
    || board[4] === player && board[5] === player && board[6] === player
    || board[7] === player && board[8] === player && board[9] === player
    || board[1] === player && board[4] === player && board[7] === player
    || board[2] === player && board[5] === player && board[8] === player
    || board[3] === player && board[6] === player && board[9] === player
    || board[1] === player && board[5] === player && board[9] === player
    || board[3] === player && board[5] === player && board[7] === player
    ) return victoryMessage(player);
};

const victoryMessage = (player) => {
  console.log(`Player ${player === 'x' ? 1 : 2} has won the game!`);
  return true;
};

startGame();