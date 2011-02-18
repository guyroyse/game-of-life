var board = (function() {

	var cells, nextCells;
	
	var board = {
		initialize : function(rows, columns) {
			cells = initializeCells(rows, columns);
		},
		rows : function() {
			return cells.length;
		},
		columns : function() {
			return cells[0].length;
		},
		status : function(row, col) {
			return cells[row][col];
		},
		makeAlive : function(row, col) {
			cells[row][col] = true;
		},
		makeDead : function(row, col) {
			cells[row][col] = false;
		}, 
		printBoard : function() {
			var s = "";
			traverseCells(
				function(row, col) { s += board.status(row, col) ? "x" : "o"; }, 
				function(row) { s += "\n"; });
			return s;
		},
		nextGeneration : function() {
			nextCells = initializeCells(this.rows(), this.columns());
			traverseCells(processCell);
			cells = nextCells;
		}
	};
	
	var initializeCells = function(rows, columns) {
		var cells = [];
		for(var i = 0; i < rows; i++) {
			cells[i] = new Array(columns);
		}
		return cells;
	}
	
	var traverseCells = function(rowColFunc, rowFunc) {
		for (var row = 0; row < board.rows(); row++) {
			for (var col = 0; col < board.columns(); col++) {
				rowColFunc(row, col);
			}
			if (rowFunc) rowFunc(row);
		}
	};
	
	var processCell = function(row, col) {
		var neighbors = countNeighbors(row, col);
		if (neighbors == 2) {
			nextCells[row][col] = board.status(row, col);
		} else if (neighbors == 3) {
			nextCells[row][col] = true;
		}		
	}
	
	var countNeighbors = function(row, col) {

		var m, n, neighbors = 0;
		
		var thisIsMe = function() {
			return (m == row) && (n == col);
		};
		
		var thisIsOutOfBounds = function() {
			return (m < 0) || (n < 0) || (m >= board.rows()) || (n >= board.columns()); 
		};
		
		var traverseNeighbors = function(func) {
			for (m = row - 1; m <= row + 1; m++)
				for (n = col - 1; n <= col + 1; n++)
					func(m, n);
		};
		
		traverseNeighbors(function(row, col) {
			if (thisIsMe() || thisIsOutOfBounds()) return;
			if (board.status(row, col)) neighbors++;
		});
		
		return neighbors;
	}
	
	return board;
	
})();
