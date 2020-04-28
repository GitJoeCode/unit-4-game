var reset = function() {
    targetNumber = getRndInteger(19, 120);
    counter = 0;
    crystalNumber(1, 12);

    var display = 
    "<p>You will be given a random number at the start of the game.</p>" +
    "<p>There are four crystals below.  By clicking on a crystal you will add a specific amount of points to your total score.</p>" +
    "<p>You win the game by matching your total score to the random number and you lose the game if your total score goes above the random number.</p>" +
    "<p>The value of each cystal is hidden from you until you click on it.</p>" +
    "<p>Each time when the game starts, the game will change the valves of each crystal.</p>" + 
    "<p>Wins: " + wins + "</p>" + 
    "<p>Losses: " + losses + "</p>";
    $("#number-to-guess").text(targetNumber);
    
    document.querySelector('#game1').innerHTML = display;
    
    var display =
    "<p>" + counter + "</p>";

    document.querySelector('#game2').innerHTML = display;
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function crystalNumber(min, max) {

    crystalOneCount = getRndInteger(min, max);
    crystalTwoCount = getRndInteger(min, max);
    crystalThreeCount = getRndInteger(min, max);
    crystalFourCount = getRndInteger(min, max);

}

var targetNumber = null;
var crystalOneCount = 0;
var crystalTwoCount = 0;
var crystalThreeCount = 0;
var crystalFourCount = 0;
var wins = 0;
var losses = 0;
var counter = 0;
reset();
crystalNumber(1, 12);

$(".crystal1").on("click", function() {

    counter += crystalOneCount;

    if (counter === targetNumber) {
      wins++;
      reset();
    }

    else if (counter >= targetNumber) {
      losses++;
      reset();
    }
    
    var display = 
    "<p>" + counter + "</p>";

    document.querySelector('#game2').innerHTML = display;
});

$(".crystal2").on("click", function() {

    counter += crystalTwoCount;

    if (counter === targetNumber) {
      wins++;
      reset();
    }

    else if (counter >= targetNumber) {
      losses++;
      reset();
    }
    
    var display = 
    "<p>" + counter + "</p>";

    document.querySelector('#game2').innerHTML = display;
});

$(".crystal3").on("click", function() {

    counter += crystalThreeCount;

    if (counter === targetNumber) {
      wins++;
      reset();
    }

    else if (counter >= targetNumber) {
      losses++;
      reset();
    }
    
    var display = 
    "<p>" + counter + "</p>";

    document.querySelector('#game2').innerHTML = display;
});

$(".crystal4").on("click", function() {

    counter += crystalFourCount;

    if (counter === targetNumber) {
      wins++;
      reset();
    }

    else if (counter >= targetNumber) {
      losses++;
      reset();
    }
    
    var display =
    "<p>" + counter + "</p>";

    document.querySelector('#game2').innerHTML = display;
});
    // This is fine except the way our code is written every user will win first (when they hit 50).
    // But will then lose immediately if they click again. Seems pointless right?
    // To make this a game we need to create additional code to randomize the counter and targetScore.



