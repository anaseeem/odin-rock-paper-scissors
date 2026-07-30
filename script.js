"use strict";
let userScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  const mechanism = {
    rock: { rock: 0, paper: 0, scissor: 1 },
    paper: { rock: 1, paper: 0, scissor: 0 },
    scissor: { rock: 0, paper: 1, scissor: 0 },
  };
  userScore += mechanism[humanChoice][computerChoice];
  computerScore += mechanism[computerChoice][humanChoice];
  console.log("Human choice : ", humanChoice);
  console.log("Computer choice : ", computerChoice);
  console.log("Human Score : ", userScore);
  console.log("Computer Score : ", computerScore);
}

function getHumanChoice() {
  const userChoice = prompt("Type 1 for rock, 2 for paper and 3 for scissor. Choose only one");
  const validChoice = parseInt(userChoice);
  switch (validChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
    default:
      return "rock";
  }
}
function getComputerChoice() {
  const rand = Math.random();
  if (rand <= 1 / 3) return "rock";
  if (rand <= 2 / 3) return "paper";
  else return "scissor";
}

function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (userScore > computerScore) {
    console.log("Yayy you have won!");
  } else if (userScore < computerScore) {
    console.log("Oh no you have failed");
  } else {
    console.log(" is a draw!!!");
  }
  console.log("Final Score Human : ", userScore);
  console.log("Final Score Computer : ", computerScore);
}

const confirmed = confirm("The game will begin after this, are you ready ?");
if (confirmed) {
  playGame();
} else {
  console.log("player declined");
}
