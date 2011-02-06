describe("Jasmine Test Runner", function() {

  it("Runs", function() {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(42).toEqual(42);
  });

  describe("Game of Life Tests", function() {

    describe("Cell", function() {

      it("dies when it has no neighbors", function() {

        var board = new GameBoard(1,1);
        board.setCell(0, 0, true);

        board.pulse();

        expect(board.getCell(0, 0)).toBeFalsy();

      });

    });

  });

});
