const qs = query => {
  return document.querySelector(query);
};

/*
  0: Blank box
  1: Cross
  2: Circle
*/

// ### Game Object & Data ###
let ttt = {
  columns: 3,
  rows: 3,

  gamePiece: [
    {
      name: 'Cross',
      class: 'fas fa-times'
    },
    {
      name: 'Circle',
      class: 'far fa-circle'}
  ],

  players: [
    {
      name: 'Player 1',
      gamePiece: {},
      score: 0
    },
    {
      name: 'Player 2',
      gamePiece: {},
      score: 0
    }
  ],

  game: {
    board: [],
    playerTurn: {},
    moveCount: 0,
    win: false,
  },

  DOM: {
    player1Score: qs('.score .player1'),
    player2Score: qs('.score .player2'),
    player1Highlight: qs('.player1 i'),
    player2Highlight: qs('.player2 i'),
    board: qs('.ttt.gameview'),
    boardBoxes: [],
    gen: {},
  },
};

// ### GENERATTE DOM ###

// Create a box
ttt.DOM.gen.createBox = i => {
  let element = document.createElement('li');
  // let element = document.createElement('button');
  // element.type = 'button';
  element.dataset.index = i;

  let icon = document.createElement('i');

  element.appendChild(icon);

  return element;
};

ttt.DOM.gen.board = () => {
  // Temporary
  ttt.DOM.board.innerHTML = '';

  for (let i = 0; i < ttt.game.board.length; i++) {
    let box = ttt.DOM.gen.createBox(i);
    ttt.DOM.boardBoxes.push(box);
  }

  ttt.DOM.boardBoxes.forEach(box => {
    ttt.DOM.board.appendChild(box);
  });
};

ttt.DOM.clearBoard = () => {
  ttt.DOM.boardBoxes.forEach(box => {
    box.classList.remove('win');
  });

  ttt.DOM.board.classList.remove('win');

  ttt.DOM.player1Highlight.classList.remove('win');
  ttt.DOM.player2Highlight.classList.remove('win');

  ttt.game.win = false;
};

ttt.newBoard = () => {
  let boxCount = ttt.columns * ttt.rows;
  for (let i = 0; i < boxCount; i++) {
    ttt.game.board[i] = 0;
  }
  return ttt.game.board;
};

ttt.changeGamePieces = () => {
  let temp = ttt.players[0].gamePiece;
  ttt.players[0].gamePiece = ttt.players[1].gamePiece;
  ttt.players[1].gamePiece = temp;
  console.log(ttt.players[0].gamePiece, ttt.players[1].gamePiece);
};

ttt.nextPlayer = () => {
  if (ttt.players.indexOf(ttt.game.playerTurn) < ttt.players.length - 1) {
    ttt.game.playerTurn = ttt.players[ttt.players.indexOf(ttt.game.playerTurn) + 1];
  }
  else {
    ttt.game.playerTurn = ttt.players[0];
  }

  console.log('It is', ttt.game.playerTurn.name, 'turn.');
};

ttt.init = () => {

  ttt.players[0].gamePiece = ttt.gamePiece[0];
  ttt.players[1].gamePiece = ttt.gamePiece[1];

  ttt.game.playerTurn = ttt.players[0];

  ttt.newBoard();

  ttt.DOM.gen.board();

  ttt.game.playerTurn = ttt.players[0];

  ttt.DOM.boardBoxes.forEach(box => {
    box.addEventListener('click', event => {
      let i = box.dataset.index;
      if (ttt.game.board[i] || ttt.game.win) {
        return;
      }
      ttt.game.board[i] = ttt.gamePiece.indexOf(ttt.game.playerTurn.gamePiece) + 1;
      if (!ttt.checkWinCondition(ttt.players, ttt.game.board, ttt.columns, ttt.rows)) {
        ttt.nextPlayer();
      }
      ttt.DOM.update();
    });
  });

  ttt.DOM.update();
};

ttt.xyToArrayIndex = (x, y, columns) => {
  return y * columns + x;
};

ttt.checkWinCondition = (players, board, columns, rows) => {
  let x = 0,
      y = 0,
      win = 0,
      winBoxes = [];

  // Check horizontal (win: 1)
  console.log('Horizontal...');
  for (y = 0; y < rows; y++) {
    x = 0;
    let boxIndex = ttt.xyToArrayIndex(x, y, columns);
    let gamePiece = board[boxIndex];
    // console.log('Game Piece:', gamePiece);

    if (gamePiece) {
      winBoxes.push(boxIndex);

      for (x++; x < columns; x++) {
        boxIndex = ttt.xyToArrayIndex(x, y, columns);
        winBoxes.push(boxIndex);

        if (board[boxIndex] != gamePiece) {
          winBoxes = [];
          // console.log('No dice', x, y);
          break;
        }

        else if (x == columns - 1 && board[ttt.xyToArrayIndex(x, y, columns)] == gamePiece) {
          console.log('Player', ttt.game.playerTurn,'win on row:', y, winBoxes);
          win = {
            type: 'horizontal',
            row: y,
            player: ttt.game.playerTurn,
            winBoxes: winBoxes,
          };
          ttt.win(win);
          return win;
        }
      }

    }
  }

  // Check vertical (win: 2)
  console.log('Vertical...');
  for (x = 0; x < columns; x++) {
    y = 0;
    let boxIndex = ttt.xyToArrayIndex(x, y, columns);
    let gamePiece = board[boxIndex];
    // console.log('Game Piece:', gamePiece);

    if (gamePiece) {
      winBoxes.push(boxIndex);

      for (y++; y < rows; y++) {
        boxIndex = ttt.xyToArrayIndex(x, y, columns);
        winBoxes.push(boxIndex);

        if (board[boxIndex] != gamePiece) {
          winBoxes = [];
          // console.log('No dice', x, y);
          break;
        }

        else if (y == rows - 1 && board[ttt.xyToArrayIndex(x, y, columns)] == gamePiece) {
          console.log(ttt.game.playerTurn.gamePiece.name,'win on column:', x, winBoxes);
          win = {
            type: 'vertical',
            column: x,
            player: ttt.game.playerTurn,
            winBoxes: winBoxes,
          };
          ttt.win(win);
          return win;
        }
      }

    }
  }

  // Check diagonal (win: 3)
  console.log('Diagonals...');
  x = 0;
  y = 0;
  let boxIndex = ttt.xyToArrayIndex(x, y, columns);
  let gamePiece = board[boxIndex];
  // console.log('Game Piece:', gamePiece);

  if (gamePiece) {
    // winBoxes.push(boxIndex);

    for (x = 0; x < columns; x++) {
      y = x;
      boxIndex = ttt.xyToArrayIndex(x, y, columns);
      winBoxes.push(boxIndex);

      if (board[boxIndex] != gamePiece) {
        winBoxes = [];
        // console.log('No dice', x, y);
        break;
      }

      else if (x == columns - 1 && board[ttt.xyToArrayIndex(x, y, columns)] == gamePiece) {
        console.log(ttt.game.playerTurn.gamePiece.name,'win on diagonal:', 'down', winBoxes);
        win = {
          type: 'diagonal',
          direction: 'down',
          player: ttt.game.playerTurn,
          winBoxes: winBoxes,
        };
        ttt.win(win);
        return win;
      }
    }
  }

  x = columns - 1;
  y = 0;
  boxIndex = ttt.xyToArrayIndex(x, y, columns);
  gamePiece = board[boxIndex];
  console.log('Game Piece:', gamePiece);

  if (gamePiece) {
    // winBoxes.push(boxIndex);

    for (x = columns - 1; x >= 0; x--) {
      y = (columns - 1) - x;
      boxIndex = ttt.xyToArrayIndex(x, y, columns);
      winBoxes.push(boxIndex);
      if (board[boxIndex] != gamePiece) {
        winBoxes = [];
        // console.log('No dice', x, y);
        break;
      }

      else if (x == 0 && board[ttt.xyToArrayIndex(x, y, columns)] == gamePiece) {
        console.log(ttt.game.playerTurn.gamePiece.name,'win on diagonal:', 'up', winBoxes);
        win = {
          type: 'diagonal',
          direction: 'up',
          player: ttt.game.playerTurn,
          winBoxes: winBoxes,
        };
        ttt.win(win);
        return win;
      }
    }
  }

  // Check Draw
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      return false;
    }

    else if (i == board.length - 1) {
      console.log("It's a draw!");
      ttt.game.win = true;
      setTimeout(ttt.newGame, 5000);
      return -1;
    }
  }
};

ttt.win = winData => {
  ttt.game.win = true;
  winData.player.score++;
  console.log(winData.player.name, 'wins!');
  ttt.DOM.board.classList.add('win');
  winData.winBoxes.forEach(i => {
    ttt.DOM.boardBoxes[i].classList.add('win');
  });

  if (ttt.players.indexOf(winData.player) == 1) {
    ttt.DOM.player2Highlight.classList.add('win');
  }

  else {
    ttt.DOM.player1Highlight.classList.add('win');
  }

  setTimeout(ttt.newGame, 5000);
};

ttt.DOM.update = () => {
  ttt.DOM.boardBoxes.forEach(box => {
    if (ttt.game.board[box.dataset.index] > 0) {
      box.querySelector('i').className = ttt.gamePiece[ttt.game.board[box.dataset.index] - 1].class;
    }

    else {
      box.querySelector('i').className = '';
    }
  });

  ttt.DOM.player1Score.textContent = ttt.players[0].score;
  ttt.DOM.player2Score.textContent = ttt.players[1].score;

  ttt.DOM.player1Highlight.classList.remove('highlight');
  ttt.DOM.player2Highlight.classList.remove('highlight');

  if (ttt.players.indexOf(ttt.game.playerTurn) == 1) {
    ttt.DOM.player2Highlight.classList.add('highlight');
  }

  else {
    ttt.DOM.player1Highlight.classList.add('highlight');
  }
};

ttt.newGame = () => {
  ttt.game.playerTurn = ttt.players[0];
  ttt.newBoard();
  ttt.DOM.clearBoard();
  ttt.DOM.update();
};

ttt.init();
