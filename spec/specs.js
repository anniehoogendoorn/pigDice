describe('Player', function() {
    it("creates a new player with a name entered by the user", function() {
        var testPlayer = new Player("Piggy");
        expect(testPlayer.userName).to.equal("Piggy");
    });

});


describe('Turn', function() {
    it("returns a random integer between 1 and 6", function() {
        var testTurn = new Turn();
        expect(testTurn.diceRoller()).to.be.within(1, 6);
    });

    it("adds to dice roll to roll total", function() {
        var testTurn = new Turn();
        testTurn.total = 6;
        console.log(testTurn.total);
        //debugger;
        testTurn.diceRoller()
        expect(testTurn.total).to.be.within(7, 12);
    });

});
