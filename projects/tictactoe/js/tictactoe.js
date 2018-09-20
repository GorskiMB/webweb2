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

  gamePieceClass: [
    '',
    'fas fa-times',
    'far fa-circle',
  ],

  players: [
    {
      name: 'Player 1',
      gamePiece: 1,
    },
    {
      name: 'Player 2',
      gamePiece: 2,
    }
  ],

  game: {
    board: [],
    playerTurn: 0,
    moveCount: 0,
  },

  DOM: {
    board: qs('.ttt.gameview'),
    boardBoxes: [],
    gen: {},
  },
};

// ### GENERATTE DOM ###

// Create a box
ttt.DOM.gen.createBox = i => {
  let element = document.createElement('button');
  element.type = 'button';
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
  if (ttt.game.playerTurn < ttt.players.length - 1) {
    ttt.game.playerTurn++;
  }
  else {
    ttt.game.playerTurn = 0;
  }

  console.log('It is', ttt.players[ttt.game.playerTurn].name, 'turn.');
};

ttt.init = () => {
  ttt.DOM.player1Name = qs('input[name=player1Name]');
  ttt.DOM.player2Name = qs('input[name=player2Name]');

  ttt.DOM.player1Name.value = ttt.players[0].name;
  ttt.DOM.player2Name.value = ttt.players[1].name;

  ttt.players[0].gamePiece = 1;
  ttt.players[1].gamePiece = 2;

  ttt.DOM.player1Name.addEventListener('input', e => {
    ttt.players[0].name = e.target.value;
  });

  ttt.DOM.player2Name.addEventListener('input', e => {
    ttt.players[1].name = e.target.value;
  });

  ttt.newBoard();

  ttt.DOM.gen.board();

  ttt.game.playerTurn = 0;

  ttt.DOM.boardBoxes.forEach(box => {
    box.addEventListener('click', event => {
      let i = box.dataset.index;
      if (ttt.game.board[i]) {
        return;
      }
      ttt.game.board[i] = ttt.players[ttt.game.playerTurn].gamePiece;
      ttt.checkWinCondition(ttt.players, ttt.game.board, ttt.columns, ttt.rows);
      ttt.nextPlayer();
      ttt.DOM.update();
    });
  });
};

ttt.xyToArrayIndex = (x, y, columns) => {
  return y * columns + x;
};

ttt.checkWinCondition = (players, board, columns, rows) => {
  let x = 0,
      y = 0,
      win = 0;

  // Check horizontal (win: 1)
  console.log('Horizontal...');
  for (y = 0; y < rows; y++) {
    x = 0;
    let gamePiece = board[ttt.xyToArrayIndex(x, y, columns)];
    console.log('Game Piece:', gamePiece);

    if (gamePiece) {

      for (x++; x < columns; x++) {
        if (board[ttt.xyToArrayIndex(x, y, columns)] != gamePiece) {
          console.log('No dice', x, y);
          break;
        }

        else if (x == columns - 1 && board[ttt.xyToArrayIndex(x, y, columns)] == gamePiece) {
          console.log('Win on row', y);
          return true;
        }
      }

    }
  }

  // Check vertical (win: 2)
  console.log('Vertical...');
  for (x = 0; x < columns; x++) {
    y = 0;
    let gamePiece = board[ttt.xyToArrayIndex(x, y, columns)];
    console.log('Game Piece:', gamePiece);

    if (gamePiece) {

      for (y++; y < rows; y++) {
        if (board[ttt.xyToArrayIndex(x, y, columns)] != gamePiece) {
          console.log('No dice', x, y);
          break;
        }

        else if (y == rows - 1 && board[ttt.xyToArrayIndex(x, y, columns)] == gamePiece) {
          console.log('Win on column', x);
          return true;
        }
      }

    }
  }

  // Check diagonal (win: 3)

  // Check Draw
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      return false;
    }

    return 'draw';
  }
};

ttt.DOM.update = () => {
  ttt.DOM.boardBoxes.forEach(box => {
    box.querySelector('i').className = ttt.gamePieceClass[ttt.game.board[box.dataset.index]];
  });
};

ttt.init();
