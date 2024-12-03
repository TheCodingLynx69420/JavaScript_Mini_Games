// Lets go!;

//making an array to put choices in them;

const choices = ["rock", "paper", "scissors"];

//getting the document by id for the player display board + the score board;

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

//declaring score variables;

let playerScore = 0;
let computerScore = 0;


//making game logic functions;


function playGame(playerChoice) {
  //1. first we will import the Math module to make the browser (or should i say the comp player) choose any of the choices from the array provided above ^;
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  //2. we are gonna declare the result variable but wont put any value in it cuz it is going to vary depending on your choice!;
  let result = "";
  //3. heres the fun begins! you can optionally use if-else again and again to program game rules but using switch case seems more cleaner;
  if (playerChoice === computerChoice) {
    result = "Its a TIE!";

  }
  else {
    //if you know the rules, this piece below is self-explanatory;
    switch (playerChoice) {
      case 'rock':
        result = (computerChoice === 'scissors') ? "You WIN!" : "You LOSE!"
        break;
      case 'paper':
        result = (computerChoice === 'rock') ? "You WIN!" : "You LOSE!"
        break;
      case 'scissors':
        result = (computerChoice === 'paper') ? "You WIN!" : "You LOSE!"
        break;
    }
  }
  //Manipulating the text for Result;
  playerDisplay.textContent = `You Chose: ${playerChoice}`;
  computerDisplay.textContent = `Comp Chose: ${computerChoice}`;
  resultDisplay.textContent = result;

  //Optional code below (but it would make it more cooler):changing the text color depending on the result using the css classes;

  resultDisplay.classList.remove("greentext", "redtext");

  switch (result) {
    case "You WIN!":
      resultDisplay.classList.add("greentext");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You LOSE!":
      resultDisplay.classList.add("redtext");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }

}
