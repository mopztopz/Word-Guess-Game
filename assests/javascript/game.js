var lives = 10;
var fighters = ['ryu', 'ken', 'sagat', 'blanka', 'e-honda', 'zangief', 'chun-li', 'dhalsim']      // list of word to be guessed
//picks a random word
var fighters = fighters[Math.floor(Math.random() * fighters.length)];

// answer array
var answer = [];
for (var i = 0; i < fighters.length; i++) {
  answer[i] = " _ ";
}


var remainingLetters = fighters.length;

//Game Loop will run while "remainingLetters" is greater than 0
while (remainingLetters > 0) {
  alert(answer.join(''));
  
  
  //will ask for guess form player and store it in the guess var.
  var playerLetterGuess = prompt('Guess a letter, or press cancel to quit the game.');
  
  
  //if player presses cancel the game will exit the loop
  if (playerLetterGuess === null) {
    break;
    prompt('thanks for plying')
  
  
    //if the player enters 0 or more than one letter the game will alert them to only pick one
  } else if (playerLetterGuess.length !== 1) {
    alert("Please enter a single letter.");
  }
  
  
  // creates a loop that runs throuh "fighters" var, so if  the word is "ryu" the first instance of the loop would return "r" to the var "j"
  for (var j = 0; j < fighters.length; j++) {
   
   
    //This if statment check to insure that the j var is the same as the player's selection. If it does, it will update the answer array
    if (fighters[j] == playerLetterGuess) {
      answer[j] = playerLetterGuess;
      remainingLetters--;
    }
  }
}

//End of the game loop
// Show lives
  //  comments = function () {
  //   showLives.innerHTML = "You have " + lives + " lives";
  //   if (lives < 1) {
  //     showLives.innerHTML = "Game Over";

alert(answer.join(''));
alert('Good job! the answer was ' + fighters);