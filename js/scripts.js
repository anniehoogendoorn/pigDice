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
    return this.total;
}


// var diceRoll = function() {
//     // var randomNumber = Math.floor(Math.random)
//     return Math.floor(Math.random() * 6) + 1;
// }
