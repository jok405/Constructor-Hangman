// =================  Constructor Hangman | Composed by John Kim | Univeristy of Richmond  ============================= 

// ============================  | A tribute to Megaman 3 hangman game | ============================

// ======================================== | Index of Hangman | ====================================


// ======================================= | The required links | ========================================

var inquirer = require('inquirer');  //npm inquirer package

var gameWords = require('./gamewords.js');   // Random selection of word from the array

var theAlphabet = require('./Alphabet.js');   // The alphabet

var vetTheLetter = require('./vettingLetter.js'); // Mechanism to validate letter input

// ========================================= | Game Object | ==========================

var game = {
    wordCache : gameWords,              //import hangman words
    guessesLeft : 10,                   // with every round of play
    yourWord : null,                    // the word object

    beginGame : function(){
        this.guessesLeft = 10;
        
        var k = math.floor(math.random() * this.wordCache.length);
        this.yourWord = this.wordCache[k];

        console.log('Figure it out');
    }
}

// ===================================== | Inclusion of Prompts | =====================

