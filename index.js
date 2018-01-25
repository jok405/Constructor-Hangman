// =================  Constructor Hangman | Composed by John Kim | Univeristy of Richmond  ========================== 

// ============================  | A tribute to Megaman 3 hangman game | ============================================

// ======================================== | Index of Hangman | ====================================================


var inquirer = require('inquirer');                     // Npm inquirer package
var gameWords = require('./gamewords.js');              // Random selection of word from the array
var theAlphabet = require('./Alphabet.js');             // The alphabet
var vetTheLetter = require('./vettingLetter.js');       // Mechanism to validate letter input
var showMeTheLetter = require('./showMeTheLetter.js'); // Blank spaces converted to valid letters of word
    
// ===================================== | Inclusion of Prompts | ===========================================

var usedLetters = [];
var theRightLetter = [];      
var theWordInPlay;

// ========================================= | Game Object| =====================================================

var game = {

  wordCache : gameWords, // import a list of words
  isYourChanceleft : 10, // per word
  theActualWord : null, // the word object


  startGame : function(){
    this.isYourChanceleft = 10;       // Player has 10 chances

    // get a random word from the array
    var j = Math.floor(Math.random() * this.wordCache.length);
    this.theActualWord = this.wordCache[j];

    console.log('Error. Continue debugging.'); 

    theWordInPlay = new showMeTheLetter(this.theActualWord);      // Underscore in lieu of letters
    theWordInPlay.parseDisplay();
    console.log('Guesses Left: ' + game.isYourChanceleft);

    // prompt for a letter
    recursivePrompt();
  }
};



// Had to isolate the recursive prompt from the game object because b/c of weird scoping issues //

function recursivePrompt(){

  if(game.isYourChanceleft > 0){
    inquirer.prompt([
      {
        type: "value",
        name: "letter",
        message: "Guess a Letter: "
      }
    ]).then(function(playerInput){

      var inputLetter = playerInput.letter.toLowerCase();

      if(theAlphabet.indexOf(inputLetter) == -1){

        console.log('Invalid character. Try again.');         // Alert bad character entry.
        console.log('Guesses remaining: ' + game.isYourChanceleft);
        console.log('Used Letters: ' + usedLetters);
        recursivePrompt();

      }
      else if(theAlphabet.indexOf(inputLetter) != -1 && usedLetters.indexOf(inputLetter) != -1){

        console.log('Duplicate letter. Try again.');          // Alert duplicate keystroke.
        console.log('Guesses Left: ' + game.isYourChanceleft);
        console.log('Used Letters: ' + usedLetters);
        recursivePrompt();

      }
      else{

        usedLetters.push(inputLetter);        // Recycle letter from the alphabet
                                                          
        var letterInWord = vetTheLetter(inputLetter, game.theActualWord);   // Vet the letter against the word

        if(letterInWord){                // If the letter is in the word, update the letter object

          theRightLetter.push(inputLetter);             // Add to correct letters list

          theWordInPlay = new showMeTheLetter(game.theActualWord, theRightLetter);
          theWordInPlay.parseDisplay();

          if(theWordInPlay.winner){              // Player won
            console.log('Congrats, you win!');
            return;
          }
          else{                                  // Recursive prompt
            console.log('Guesses Left: ' + game.isYourChanceleft);
            console.log('Used Letters: ' + usedLetters);
            recursivePrompt();
          }
        }
        else{                            
          game.isYourChanceleft--;

          theWordInPlay.parseDisplay();
          console.log('Guesses Left: ' + game.isYourChanceleft);
          console.log('Used Letters: ' + usedLetters);
          recursivePrompt();
        }        
      }
    });    
  }
  else{      // If not enough guesses left, then player lost
    console.log('The correct word was "' + game.theActualWord + '".');
  }
}
// Create a new game object using the constructor and begin playing
game.startGame();