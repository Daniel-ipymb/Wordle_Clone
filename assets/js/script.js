const gameContainer = document.querySelector(".game-container")
const tile = document.querySelector(".tile");
const tileRow = document.querySelector(".tile-row");
const totalGuesses = 6;
let currentRow = 0;
let currentTile = 0;
let currentGuess = [];
const WORD_LENGTH = 5;
// Function to generate tiles onto screen 
const guessGrid = document.querySelector("[data-guess-grid]")
const initBoard = () => {
  let board = document.getElementById("board");

  for (let indexRow = 0; indexRow < totalGuesses; indexRow++) {
    let tileRow = document.createElement("div");
    tileRow.classList.add("tile-row")
    tileRow.setAttribute("id", indexRow + 1)

    for (let indexTile = 0; indexTile < 5; indexTile++) {
      let tile = document.createElement("div");
      tile.classList.add("tile");
      tile.setAttribute("id", "row:" + indexRow + " tile:" + indexTile)
      tileRow.appendChild(tile)
    }
    board.appendChild(tileRow)
  }
}
initBoard()



const handleKeyPress = (e) => {
  let key = e.key
  if (key === "Backspace" || key === "Delete") {
    deleteKey()
    return
  }
  if (key === "ENTER") {
    submitGuess()
    return
  }

  if (key.match(/^[a-z]$/)) {
    pressKey(key)
    return
  }
  // updateLetter(key)
}

const handleMouseClick = (e) => {
  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key)
    return
  }

  if (e.target.matches("[data-enter]")) {
    submitGuess()
    return
  }

  if (e.target.matches("[data-delete]")) {
    deleteKey()
    return
  }
}

const pressKey = (key) => {
  console.log(key)
  const activeTiles = getActiveTiles()
  if (activeTiles.length >= WORD_LENGTH) return
  const nextTile = guessGrid.querySelector(".tile:not([data-letter])")
  nextTile.dataset.letter = key.toLowerCase()
  nextTile.textContent = key
  nextTile.dataset.state = "active"
}

const deleteKey = () => {
  const activeTiles = getActiveTiles()
  const lastTile = activeTiles[activeTiles.length - 1]
  if (lastTile == null) return
  lastTile.textContent = ""
  delete lastTile.dataset.state
  delete lastTile.dataset.letter
}

const getActiveTiles = () => {
  return guessGrid.querySelectorAll('[data-state="active"]')
}

// let guessesRemaining = totalGuesses;
// let currentGuess = [];
// let nextLetter = 0;
// let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
// console.log(rightGuessString)

// const updateLetter = (letter) => {
//   if ((currentTile) < 5 && currentRow < 6) {
//     const tile = document.getElementById("row:" + currentRow + " tile:" + currentTile)
//     tile.textContent = letter
//     currentGuess.push(letter)
//     tile.setAttribute("data", letter)
//     currentTile++
//     console.log(currentGuess)
//   }
// }

// const deleteLetter = () => {
//   if (currentTile > 0) {
//     currentTile--
//     const tile = document.getElementById("row:" + currentRow + " tile:" + currentTile)
//     tile.textContent = ''
//     currentGuess.push("")
//     tile.setAttribute("data", "")
//   }
// }
function startInteraction() {
  document.addEventListener("keydown", handleKeyPress)
  document.addEventListener("click", handleMouseClick)
}

function stopInteraction() {
  document.removeEventListener("keydown", handleKeyPress)
  document.removeEventListener("click", handleMouseClick)
}

startInteraction()


