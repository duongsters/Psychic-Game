
//---------intial variables-----------------------------------//


//setting my variables initally to 0 at the start of the game//
var win = 0;
var loss = 0;
var remainingAttempts = 9;
var userChoice = [];



//Declared variable 'choices' that gives an index array of all 26 CHAR letters to be used within the game//
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
               'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
               'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
               'y', 'z']




//Declared a new variable 'computerChoice' that randomly picks from the 'choice' array index before the user makes a keyboard choice//
var computerChoice = choices[Math.floor(Math.random()*choices.length)];

//Function newRemainingAttempts is created to run the countdown the remaining attempts there are left until the game is over//
function newRemainingAttempts() {
    //line 29 basiclly was made to grab and point out the variable "remainingAttempts" within index.html; a message is outputed stating how many attempts the user/player has left//
    document.querySelector("#remainingAttempts").innerHTML = "Remaining number of attempts: " + remainingAttempts;
}

//Function usedAttempt is made to when it runs, it will retrieve the result of the user playing the game and convert the array letter chosen in the 'choices' array index and convert it to a string----//
function usedAttempt() {
//Using the .queryselector & .innerhtml methods, I am able to point out to the ID "usedAttempts" from the index.html file while matching with specified message stating the number of attempts the player user has done so far then shows the results of chars they chose; they char choices chosen are then displayed and seperated by commas//
    document.querySelector("#usedAttempts").innerHTML = "Current number of attempts: " + userChoice.join(', ');
}
// ----this will basically tell the code to run the newRemainingAttempts function---//
newRemainingAttempts();



//Created a new variable 'gameover' that runs a function to when the user has no more attempts, the game will eventually restart back to the inital 9 attempts given//
    var gameover = function() {  
            //gave the variable 'choice' to be an open array where the user could input any char on the keyboard//
            userChoice = [];
            //the remainAttempts count has remained the same with the 9 attempts given initally for the player//
            remainingAttempts = 9;
            var computerChoice = choices[Math.floor(Math.random() * choices.length)];
}



//-------event function created for when User Player presses on a char key----------------//

//created this event function 
document.onkeyup = function(event) {
   //when this onkeyup function event is running, the variable "remainingAttempts" will get clicked '-1' from attempts left//
    remainingAttempts--;
//created variable userAttempts withing this event function  that will convert any uppercased letter to lowercase//
    var userAttempts = String.fromCharCode(event.keyCode).toLowerCase();
//used the .push method in order to append the array value(s) chosen by the player/user from 'userChoice' then return a new length property of the object 'userAttempts'//
    userChoice.push(userAttempts);
    newRemainingAttempts();
    usedAttempt();

//if the user's choices matches with randomized choices of the computer concurrently, the first 'if' command will tell the user has won in the match; then global variable 'wins' will get clicked up with a '+1' increase//
    if (userAttempts === computerChoice) {
        win++;
        document.querySelector("#win").innerHTML = "Number of Wins: " + win;
        gameover();
    }
    //if the user and computer choices dont match, then the 'else if' conditional statement is waiting in the end to run when it recognizes that the set variable 'remainingAttempts' has reached to null. It would count the current gameplay as a loss and the 'loss' variable clicker will get ticked "+1"//
    else if (remainingAttempts === 0) {
        loss++;
        //the .queryselector is used to point out to the index.html variable 'loss' then outputs that given information in a message in the browser that tell the amount of losses the user has made so far//
        document.querySelector("#loss").innerHTML = "Number of losses: " + loss;
        gameover();
    }

};


