// =================  Constructor Hangman | Composed by John Kim | Univeristy of Richmond  ============================= 

// ============================  | A tribute to Megaman 3 hangman game | ============================

// ===================================== | Vetting constructor | ====================================

// The constructor file validating letters against the randomly chosen word.

function vetTheLetter(letter, word) {
    if(word.indexof(letter) != -1){
        return true;
    }
    else{
        return false;
    }
}

module.exports = vetTheLetter;            // Export modular function
