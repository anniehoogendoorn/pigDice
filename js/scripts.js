function Player(userName) {
    this.userName = userName;
    this.score = 0;

};
//pass it a player object!
function Turn(player) {
    this.total = 0;
    this.player = player;
};

Turn.prototype.diceRoller = function() {
    var randNumber = Math.floor(Math.random() * 6) + 1;
    if (randNumber == 1) {
        this.total = 0;
        return randNumber;
    } else {
        this.total += randNumber;
        return randNumber;
    };

};

Turn.prototype.endTurn = function() {
    //adding total to score
    this.player.score += this.total;
    //and clearing total
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

    });

});
