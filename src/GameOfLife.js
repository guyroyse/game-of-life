var board = (function() {
	var cells;
	var countNeighbors = function(row, col) {

		var neighbors = 0;
		var m, n;
		
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
				
				if(cells[m][n] == true) {
					neighbors++;
				}
			}
		}
		
		return neighbors;
	}
	var initializeBoard = function(rows, columns) {
		var theBoard = [];
		for(var i = 0; i < rows; i++) {
			theBoard[i] = new Array(columns);
		}
		return theBoard;
	}
	return {
		initialize : function(rows, columns) {
			cells = initializeBoard(rows, columns);
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
			for (var row = 0; row < this.rows(); row++) {
				for (var col = 0; col < this.columns(); col++) {
					s+= this.status(row, col) ? "x" : "o"; 
				}
				s+= "\n";
			}
			
			return s;
		},
		nextGeneration : function() {
			nextState = initializeBoard(this.rows(), this.columns());

			for (var row = 0; row < this.rows(); row++) {
				for (var col = 0; col < this.columns(); col++) {
					var neighbors = countNeighbors(row, col);
					if (neighbors == 2){
						nextState[row][col] = cells[row][col];
					} else if(neighbors == 3) {
						nextState[row][col] = true;
					}
					
				}
			}
			cells = nextState;
		}
	};
})();
