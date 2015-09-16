function Player(userName) {
    this.userName = userName;
    this.score = 0;
}

function Turn() {
    this.total = 0;
}

Turn.prototype.diceRoller = function() {
    var randNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randNumber);
    this.total += randNumber;
    return randNumber;
}

$(document).ready(function() {
    var newTurn = new Turn();
    var total = newTurn.total;
    $("#roll-total").text(total);

$("form#roll").submit(function(event) {
    event.preventDefault();

    $('#roll-total').text(newTurn.total);

    var result = newTurn.diceRoller();
    $('#roll').text(result);



});

// $("")
});
