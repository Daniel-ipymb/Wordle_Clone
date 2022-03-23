const tile = document.querySelector(".tile");
const tileRow = document.querySelector(".tile-row");
// detect keypress
// set datastate of each tile to absent if the letter isnt present in the word
// set datastate of each tile to present if the letter is present in the word
// set datastate of each tile to correct if the letter is present and at the right position
document.addEventListener("keydown", function (e) {
  e.preventDefault()
  let key = e.key
  console.log(key)
  // If a letter is pressed update tile
  let alphabetCharacters = "abcdefghijklmnopqrstuvwxyz ".split("");

  if (alphabetCharacters.includes(key)) {
    console.log("no")
    // If its backspace delete last letter of word
  } else if (key = "Backspace") {
    console.log("yes")
  }
})

