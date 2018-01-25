// =================  Constructor Hangman | Composed by John Kim | Univeristy of Richmond  ============================= 

// ============================= | A tribute to Megaman 3 hangman game | ============================

// ================================ | Display Constructor for Hangman | ==================================== 

var showMeTheLetter = function(word, theRightLetter){

  this.itsTheWord = word;
  this.matchingLetter = theRightLetter;
  this.matchesTheWord = '';

  this.winner = false; // Found out that without this statement, a win is declared.

  this.parseDisplay = function(){      // What is shown to player

    var shown = '';

    if(this.matchingLetter == undefined){
     for(var i = 0; i < this.itsTheWord.length; i++){         // If no letter matches word
        shown += ' _ ';
      }
    }
    else{

      for(var i = 0; i < this.itsTheWord.length; i++){ // For loop checks duplicate valid letters

        var matchedLetter = false;             // Spaces correspond to number of letter in word

        for(var j = 0; j < this.matchingLetter.length; j++){           // When letter matches word

          if(this.itsTheWord[i] == this.matchingLetter[j]){
            shown += this.matchingLetter[j];
            matchedLetter = true;
          }
        }
        if(!matchedLetter){          // If guessed letter does not match
          shown += ' _ ';
        }
      }
    }
    this.matchesTheWord = shown.trim();
    console.log(this.matchesTheWord);

    if(this.matchesTheWord == this.itsTheWord){ // Check point to validate a win
      this.winner = true;
    }
  }
};

module.exports = showMeTheLetter;