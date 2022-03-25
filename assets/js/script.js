const gameContainer = document.querySelector(".game-container")
const tile = document.querySelector(".tile");
const tileRow = document.querySelector(".tile-row");
const NUMBER_OF_GUESSES = 6;

// function to generate tiles onto screen 
const initBoard = () => {
  let board = document.getElementById("board");

  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
    let tileRow = document.createElement("div");
    tileRow.className = "tile-row"

    for (let j = 0; j < 5; j++) {
      let tile = document.createElement("div");
      tile.className = "tile"
      tileRow.appendChild(tile)
    }
    board.appendChild(tileRow)
  }
}
initBoard()

// const NUMBER_OF_GUESSES = 6;
// let guessesRemaining = NUMBER_OF_GUESSES;
// let currentGuess = [];
// let nextLetter = 0;
// let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
// console.log(rightGuessString)

// detect keypress
// set datastate of each tile to absent if the letter isnt present in the word
// set datastate of each tile to present if the letter is present in the word
// set datastate of each tile to correct if the letter is present and at the right position
// document.addEventListener("keydown", function (e) {
//   e.preventDefault()
//   let key = e.key
//   console.log(key)
//   // If a letter is pressed update tile



//   let alphabetCharacters = "abcdefghijklmnopqrstuvwxyz ".split("");

//   if (alphabetCharacters.includes(key)) {
//     console.log("no")
//     // If its backspace delete last letter of word
//   } else if (key = "Backspace") {
//     console.log("yes")
//   }
// })
