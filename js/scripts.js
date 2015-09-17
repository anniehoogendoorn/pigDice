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
Turn.prototype.diceRoller = function(player1, player2) {
    var randNumber = Math.floor(Math.random() * 6) + 1;
    if (randNumber == 1) {
        this.total = 0;
        this.endTurn(player1, player2);
        // this.randNumber += randNumber;
        return randNumber;
    } else {
        this.total += randNumber;
        this.randNumber += randNumber;
        return randNumber;
    };

};

//
Turn.prototype.endTurn = function(player1, player2) {
    debugger;
    //adding total to score
    this.player.score += this.total;
    //and clearing total
    this.total = 0;
    this.randNumber = 0;
    if (this.player == player1) {
        this.player = player2;
    } else if (this.player == player2) {
        this.player = player1;
    }
    // console.log(this.player);
}



$(document).ready(function() {

    var player1 = new Player("Player 1");
    var player2 = new Player("Player 2");

    //Start current turn with player1, will be changed in endTurn
    var currentTurn = new Turn(player1);

    var total = currentTurn.total;

    //Prints initial Roll Total of 0
    $("#roll-total").text(total);

    //Prints initial player scores of 0
    $('#player1-score').text(player1.score);
    $('#player2-score').text(player2.score);

    //Prints current Player
    $('#current_player').text(currentTurn.player.userName);

    //This code runs when you click the Roll button
    $("form#roll").submit(function(event) {
        event.preventDefault();

        //Creates a dice roll number
        var result = currentTurn.diceRoller(player1, player2);

        //Prints the roll number to the page
        $('#roll').text(result);

        //Prints current Player
        $('#current_player').text(currentTurn.player.userName);

        //Prints the roll total to the page
        $('#roll-total').text(currentTurn.total);
    });

    //This code runs when you click the End Turn button
    $("form#end-turn").submit(function(event) {
        event.preventDefault();

        currentTurn.endTurn(player1, player2);

        //Prints current Player
        $('#current_player').text(currentTurn.player.userName);

        //Prints players scores
        $('#player1-score').text(player1.score);
        $('#player2-score').text(player2.score);

        //Prints the cleared roll and roll-total on page
        $('#roll').text(currentTurn.randNumber);
        $('#roll-total').text(currentTurn.total);


    });

});
