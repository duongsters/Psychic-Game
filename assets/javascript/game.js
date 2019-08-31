
//---------intial variables-----------------------------------//


//setting my variables initally to 0 at the start of the game
var win = 0;
var loss = 0;
var remainingAttempts = 9;
var userChoice = [];



//created variable 'choices' that gives an index array of all 26 CHAR letters to be used within the game
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
               'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
               'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
               'y', 'z']



//----------------------------------------------------------------

//Created a new variable 'computerChoice' that randomly picks from the 'choice' array index
var computerChoice = choices[Math.floor(Math.random()*choices.length)];

//Function newRemainingAttempts is created to run the countdown the remaining attempts there are left until the game is over
function newRemainingAttempts() {
    //line 25 basiclly was made to display the variable "remainingAttempts" the user/player has left by using queryselector to search within the HTML file
    document.querySelector("#remainingAttempts").innerHTML = "Remaining number of attempts: " + remainingAttempts;
}

//This function usedAttempts is made to when it runs, it will retrieve the result of the user playing the game and convert the array letter chosen in the 'choices' array index and convert it to a string
function usedAttempt() {
//I directed a text node where it returns out the message of the letter choices the player has attempted so far within the game by concatnating all of the elements within the 'choice' array index
    document.querySelector("#usedAttempts").innerHTML = "Current number of attempts: " + userChoice.join(', ');
}
newRemainingAttempts();



//Created a new variable 'gameover' that runs a function to when the user has no more attempts, the
    var gameover = function() {  
            userChoice = [];
            remainingAttempts = 9;
            var computerChoice = choices[Math.floor(Math.random() * choices.length)];
}



//-------event function created for when User Player presses on a char key----------------//

//created this event function 
document.onkeyup = function(event) {
    remainingAttempts--;
//created variable userAttempts withing this event function  that will convert any uppercased letter to lowercase
    var userAttempts = String.fromCharCode(event.keyCode).toLowerCase();

    userChoice.push(userAttempts);
    newRemainingAttempts();
    usedAttempt();


    if (userAttempts === computerChoice) {
        win++;
        document.querySelector("#win").innerHTML = "Number of Wins: " + win;
        gameover();
    }
    else if (remainingAttempts === 0) {
        loss++;
        document.querySelector("#loss").innerHTML = "Number of losses: " + loss;
        gameover();
    }

};


