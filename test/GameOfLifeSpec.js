describe("Jasmine Test Runner", function() {

  it("Runs", function() {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(42).toEqual(42);
  });

  describe("Game of Life Tests", function() {

    describe("Cell", function() {

      var board;
      var centerCell = function() {
        return board.getCellStatus(1,1);
      };

      beforeEach(function() {
        board = new GameBoard(3, 3);
      });

      it("dies when it has no neighbors", function() {
        board.setCellAlive(1,1);
        board.pulse();
        expect(centerCell()).toBeFalsy();
      });

      it("dies when it has four neighbors", function() {
        board.setCellAlive(0,1);
        board.setCellAlive(1,0);
        board.setCellAlive(1,1);
        board.setCellAlive(1,2);
        board.setCellAlive(2,1);
        board.pulse();
        expect(centerCell()).toBeFalsy();
      });

      it("dies when it has eight neighbors", function() {
        for(var i = 0; i < 3; i++)
          for(var j = 0; j < 3; j++)
            board.setCellAlive(i,j);
        board.pulse();
        expect(board.getCellStatus(1,1)).toBeFalsy();
      });

      it("lives when it has two neighbors", function() {
        board.setCellAlive(1,0);
        board.setCellAlive(1,1);
        board.setCellAlive(1,2);
        board.pulse();
        expect(centerCell()).toBeTruthy();
      });

    });

  });

});
