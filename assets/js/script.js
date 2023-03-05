const boardGame = document.querySelector("#board");
let wordLength = 5;
let numberOfTries = 6;
let currentTile = 0;

function createGameTiles() {
  for (let i = 0; i < numberOfTries; i++) {
    const tileRow = document.createElement("div");
    tileRow.classList.add("tile-row");
    boardGame.appendChild(tileRow);
    for (let j = 0; j < wordLength; j++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tileRow.appendChild(tile);
    }
  }
}

function checkGuess() {}

function deleteKey() {}

function userInput(key) {
  key.toUppercase();
  //
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // check if the words typed is up to 5 if not ignore
    //get word from wordlist
    // if it is we check it against the word in wordlist
    //if the word is valid we want to move to the next row and column is 0
    checkGuess();
  }

  if (e.key === "Backspace" || e.key === "Delete") {
    deleteKey();
  }

  if (e.key.match(/^[a-z]$/)) {
    console.log(e.key);
    userInput(e.key);
  }
});

createGameTiles();
