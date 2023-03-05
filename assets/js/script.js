const boardGame = document.querySelector("#board");
const guessGrid = document.querySelector("[data-guess-grid]");
let wordLength = 5;
let numberOfTries = 6;
let currentTile = 0;

createGameTiles();
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

console.log(guessGrid.childNodes);
function checkGuess() {}

function deleteKey() {
  const activeTiles = getActiveTiles();
  const lastTile = activeTiles[activeTiles.length - 1];
  if (lastTile == null) return;
  lastTile.textContent = "";
  delete lastTile.dataset.state;
  delete lastTile.dataset.letter;
}

function userInput(key) {
  const activeTiles = getActiveTiles();
  if (activeTiles.length >= 5) return;
  // const userInput = key.toUpperCase();
  const nextTile = guessGrid.querySelector(".tile-row > :not([data-letter])");
  nextTile.dataset.letter = key.toLowerCase();
  nextTile.textContent = key;
  nextTile.dataset.state = "active";
}

function getActiveTiles() {
  return guessGrid.querySelectorAll("[data-state='active']");
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
    userInput(e.key);
  }
});

document.addEventListener("click", function (e) {
  if (e.target.matches("[data-letter]")) {
    userInput(e.target.dataset.letter);
    return;
  }
  if (e.target === "Backspace" || e.target === "Delete") {
    deleteKey();
    return;
  }
  if (e.target === "Enter") {
    checkGuess();
    return;
  }
});

// const guessRow = document.querySelector(".tile-row");
// console.log(guessRow);
