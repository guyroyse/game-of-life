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

    it("has a board", function() {
    	expect(board).toBeDefined();
    });
    
    describe("board", function() {
    	
    	beforeEach(function() {
    		board.initialize(1,1);
    	})
    	
    	it("initializes with an empty board", function() {
    		expect(board.status(0, 0)).toBeFalsy();
        });
    	
    	it("has a cell that can be set to true", function() {
    		board.makeAlive(0, 0);
    		expect(board.status(0, 0)).toBeTruthy();
    	});
    	
    	it("has a cell that can be killed", function() {
    		board.makeAlive(0, 0);
    		board.makeDead(0, 0);
    		expect(board.status(0, 0)).toBeFalsy();    		
    	});
    	
    	it("has a height and width", function(){
    		board.initialize(2, 3);
    		expect(board.width()).toEqual(2);
    		expect(board.height()).toEqual(3);
    	});
    	
    	describe("Cell", function() {
        
    		it("dies when it has no neighbors", function() {
    			board.initialize(3, 3);
        		board.makeAlive(1, 1);
        		board.nextGeneration();
        		expect(board.status(1, 1)).toBeFalsy();
        	});

    	});
    	
    });
    
  });

});
