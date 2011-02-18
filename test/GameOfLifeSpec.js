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
    		expect(board.rows()).toEqual(2);
    		expect(board.columns()).toEqual(3);
    	});
    	
    	describe("Cell", function() {
        
        	beforeEach(function() {
        		board.initialize(3,3);
        	})
        	
    		it("dies when it has no neighbors", function() {
        		board.makeAlive(1, 1);
        		board.nextGeneration();
        		expect(board.status(1, 1)).toBeFalsy();
        	});
    		
    		it("dies when it has one neighbor", function() {
    			board.makeAlive(1, 1);
    			board.makeAlive(1, 2);
    			board.nextGeneration();
    			expect(board.status(1, 1)).toBeFalsy();
    		});

    		it("stays alive when it has two neighbors", function() {
    			board.makeAlive(1, 0);
    			board.makeAlive(1, 1);
    			board.makeAlive(1, 2);
    			board.nextGeneration();
    			expect(board.status(1, 1)).toBeTruthy();
    		});
    		
    		it("stays dead when it has two neighbors", function() {
    			board.makeAlive(1, 0);
    			board.makeAlive(1, 2);
    			board.nextGeneration();
    			expect(board.status(1, 1)).toBeFalsy();
    		});
    		
    		it("stays alive when it has three neighbors", function() {
    			board.makeAlive(1, 0);
    			board.makeAlive(1, 1);
    			board.makeAlive(1, 2);
    			board.makeAlive(2, 1);
    			board.nextGeneration();
    			expect(board.status(1, 1)).toBeTruthy();
    		});
    		
    		it("comes alive when it has three neighbors", function() {
    			board.makeAlive(1, 0);
    			board.makeAlive(1, 2);
    			board.makeAlive(2, 1);
    			board.nextGeneration();
    			expect(board.status(1, 1)).toBeTruthy();
    		});
    		
    		it("dies when it has more than three neighbors", function() {
    			board.makeAlive(0, 1);
    			board.makeAlive(1, 0);
    			board.makeAlive(1, 1);
    			board.makeAlive(1, 2);
    			board.makeAlive(2, 1);
    			board.nextGeneration();
    			expect(board.status(1, 1)).toBeFalsy();
    		});
    		
    		it("stays dead when it has more than three neighbors", function() {
    			board.makeAlive(0, 1);
    			board.makeAlive(1, 0);
    			board.makeAlive(1, 2);
    			board.makeAlive(2, 1);
    			board.nextGeneration();
    			expect(board.status(1, 1)).toBeFalsy();
    		});
    		
    		it("pulses", function() {
    			board.makeAlive(1, 0);
    			board.makeAlive(1, 1);
    			board.makeAlive(1, 2);
    			expect(board.printBoard()).toEqual("ooo\nxxx\nooo\n");
    			board.nextGeneration();
    			expect(board.printBoard()).toEqual("oxo\noxo\noxo\n");
    			board.nextGeneration();
    			expect(board.printBoard()).toEqual("ooo\nxxx\nooo\n");
    		});
    		

    	});
    	
    });
    
  });

});
