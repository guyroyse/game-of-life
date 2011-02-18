var board = (function() {

	var cells;
	
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
				function(row, col) {
					s += board.status(row, col) ? "x" : "o"; 				
				}, 
				function(row) {
					s += "\n";
				}
			);
			return s;
		},
		nextGeneration : function() {
			nextCells = initializeCells(this.rows(), this.columns());

			for (var row = 0; row < this.rows(); row++) {
				for (var col = 0; col < this.columns(); col++) {
					var neighbors = countNeighbors(row, col);
					if (neighbors == 2){
						nextCells[row][col] = cells[row][col];
					} else if(neighbors == 3) {
						nextCells[row][col] = true;
					}
					
				}
			}
			cells = nextCells;
		}
	};
	
	var traverseCells = function(rowColFunc, rowFunc) {
		for (var row = 0; row < board.rows(); row++) {
			for (var col = 0; col < board.columns(); col++) {
				rowColFunc(row, col);
			}
			if (rowFunc) {
				rowFunc(row);
			}
		}
	};
	
	var countNeighbors = function(row, col) {

		var m, n, neighbors = 0;
		
		var thisIsMe = function() {
			return (m == row) && (n == col);
		};
		
		var thisIsOutOfBounds = function() {
			return (m < 0) || (n < 0) || (m >= board.rows()) || (n >= board.columns()); 
		};
		
		for (m = row - 1; m <= row + 1; m++) {
			for (n = col - 1; n <= col + 1; n++) {
				if(thisIsMe() || thisIsOutOfBounds()) {
					continue;
				}
				
				if(board.status(m, n) == true) {
					neighbors++;
				}
			}
		}
		
		return neighbors;
	}
	var initializeCells = function(rows, columns) {
		var cells = [];
		for(var i = 0; i < rows; i++) {
			cells[i] = new Array(columns);
		}
		return cells;
	}
	
	return board;
})();
