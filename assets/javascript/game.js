
//created variable 'choices' that gives an index array of all 26 letters to be used within the game
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
               'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
               'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
               'y', 'z']




//setting my variables initally to 0 at the start of the game
var win = 0;
var loss = 0;
var usedAttempts = 0;
var userChoice = [];
var remainingAttempts = 9;



//Created a new variable 'computerChoice' that randomly picks from the 'choice' array index
var computerChoice = choices[Math.floor(Math.random()*choices.length)];

function countRemainingAttempts() {
    document.querySelector("#remainingAttempts").innerHTML = "Remaining number of attempts: " + remainingAttempts;
}




