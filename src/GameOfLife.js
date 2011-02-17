var board = (function() {
	var cells;
	return {
		initialize : function(width, height) {
			cells = [];
			for(i = 0; i < width; i++) {
				cells[i] = new Array(height);
			}
		},
		width : function() {
			return cells.length;
		},
		height : function() {
			return cells[0].length;
		},
		status : function(x, y) {
			return cells[x][y];
		},
		makeAlive : function(x, y) {
			cells[x][y] = true;
		},
		makeDead : function(x, y) {
			cells[x][y] = false;
		}, 
		nextGeneration : function() {
			nextState = [];
			
		}
	};
})();
