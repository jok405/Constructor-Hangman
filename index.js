// =================  Constructor Hangman | Composed by John Kim | Univeristy of Richmond  ============================= 

// ============================  | A tribute to Megaman 3 hangman game | ============================

// ======================================== | Index of Hangman | ====================================


// ======================================= | The required links | ========================================

var inquirer = require('inquirer');  //npm inquirer package

var gameWords = require('./gamewords.js');   // Random selection of word from the array

var theAlphabet = require('./Alphabet.js');   // The alphabet

var vetTheLetter = require('./vettingLetter.js'); // Mechanism to validate letter input



