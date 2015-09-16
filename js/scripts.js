function Player(userName) {
    this.userName = userName;
    this.score = 0;

};
//pass it a player object!
function Turn(player) {
    this.total = 0;
    this.randNumber = 0;
    this.player = player;
};

//Creates random number, saves it and then returns it
Turn.prototype.diceRoller = function() {
    var randNumber = Math.floor(Math.random() * 6) + 1;
    if (randNumber == 1) {
        this.total = 0;
        // this.randNumber += randNumber;
        return randNumber;
    } else {
        this.total += randNumber;
        this.randNumber += randNumber;
        return randNumber;
    };

};

//
Turn.prototype.endTurn = function() {
    //adding total to score
    this.player.score += this.total;
    //and clearing total
    this.total = 0;
    this.randNumber = 0;
}

debugger;

$(document).ready(function() {
    var newPlayer = new Player("Austin");
    var newTurn = new Turn(newPlayer);
    var total = newTurn.total;
    $("#roll-total").text(total);

    $("form#roll").submit(function(event) {
        event.preventDefault();

        var result = newTurn.diceRoller();

        $('#roll').text(result);

        $('#roll-total').text(newTurn.total);
    });

    $("form#end-turn").submit(function(event) {
        event.preventDefault();
        newTurn.endTurn();

        $('#player1-score').text(newPlayer.score);


        $('#roll').text(newTurn.randNumber);

        $('#roll-total').text(newTurn.total);

    });

});
