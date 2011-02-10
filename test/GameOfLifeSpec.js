describe("Jasmine Test Runner", function() {

  it("Runs", function() {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(42).toEqual(42);
  });

  describe("Game of Life", function() {

    beforeEach(function() {
      // any startup code goes here
    });

    it("returns a board when handed a board", function() {
    	expect(nextGeneration([[]]) instanceof Array).toBeTruthy();
    });
    
    it("throws an exception when not handed a board", function() {
    	expect(nextGeneration).toThrow("Argument is not a board");
    });
    
    it("throws an exception when handed a board that is an array", function() {
    	expect(function() {
    		nextGeneration({});
    	}).toThrow("Argument is not a board");
    });
    
    it("throws an excpetion when handed a board that is not a 2 dimensional array", function() {
    	expect(function() {
    		nextGeneration([{}]);
    	}).toThrow("Argument is not a board");
    });
    
    it("has a board", function() {
    	expect(board).toBeDefined();
    });
    
    describe("board", function() {
    	it("it initializes with an empty board", function() {
    		board.initialize(1, 1);
    		expect(board.status(0, 0)).toBeFalsy();
        });
    });
    
  });

});
