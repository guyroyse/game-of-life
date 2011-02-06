var GameBoard = function(width, height) {

  var initializeBoard = function() {
    var i, j, board = []
    for (i = 0; i < width; i++) {
      board[i] = [];
      for (j = 0; j < height; j++)
        board[i][j] = false;
    }
    return board;
  };

  var countNeighbors = function(x,y) {
    var i, j, count = 0;
    for (i = lowWidth(x); i <= highWidth(x); i++)
      for (j = lowHeight(y); j <= highHeight(y); j++)
        if (theBoard[i][j] == true) count++;
    if (theBoard[x][y] == true) count--;
  };

  var lowWidth = function(x) {
    return Math.max(x-1, 0);
  };

  var lowHeight = lowWidth;

  var highWidth = function(x) {
    return Math.min(x+1, width - 1);
  };

  var highHeight = function(x) {
    return Math.min(x+1, height - 1);
  };

  var theBoard = initializeBoard();

  this.setCellAlive = function(x,y) {
    theBoard[x][y] = true;
  };

  this.getCellStatus = function(x,y) {
    return theBoard[x][y];
  };

  this.pulse = function() {
  
    var i, j, newBoard = initializeBoard();
    for (i = 0; i < width; i++) {
      for (j = 0; j < height; j++) {
        if (countNeighbors(i, j) == 2) newBoard[i][j] = true;
      }
    }

    theBoard = newBoard;

  };

};
