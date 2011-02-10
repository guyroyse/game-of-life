var board = {
	initialize : function() {},
	status : function() {
		return false;
	}
};

function nextGeneration(board) {
	
	var error = "Argument is not a board";
	if (board && board.isArray()) {
		for (var i = 0; i < board.length; i++) {
			if (board[i].isNotArray()) {
				throw error;
			}
		}
		return [];
	}
	throw error;
}

Object.prototype.isArray = function() {
	return this instanceof Array;
};

Object.prototype.isNotArray = function() {
	return !this.isArray();
};
