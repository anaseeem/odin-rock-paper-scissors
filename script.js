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
}

function getHumanChoice(rawChoice) {
  const validChoice = parseInt(rawChoice);
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

const controls = document.getElementById("controls");
const controlButtons = Array.from(controls.querySelectorAll("button"));

const playerScoreShow = document.getElementById("player-score");
const playerChoiceShow = document.getElementById("player-choice");

const computerScoreShow = document.getElementById("computer-score");
const computerChoiceShow = document.getElementById("computer-choice");

const winnerModal = document.getElementById("game-over-modal");
const winnerShow = document.getElementById("final-winner-text");
const resetBtn = document.getElementById("reset-btn");

controls.addEventListener("click", (event) => {
  const button = event.target.closest(".btn-choice");
  if (!button) return;

  controlButtons.forEach((btn) => {
    btn.disabled = true;
  });

  const choice = button.dataset.choice;
  const userChoice = getHumanChoice(choice);
  const computerChoice = getComputerChoice();

  const iconMap = {
    rock: "🪨",
    paper: "📄",
    scissor: "✂️",
  };
  playerChoiceShow.textContent = iconMap[userChoice];
  computerChoiceShow.textContent = iconMap[computerChoice];

  playRound(userChoice, computerChoice);
  playerScoreShow.textContent = userScore;
  computerScoreShow.textContent = computerScore;

  if (userScore === 5 || computerScore === 5) {
    winnerModal.classList.remove("hidden");
    if (userScore === 5) {
      winnerShow.textContent = "🎉 You won the game!";
    }
    if (computerScore === 5) {
      winnerShow.textContent = ":( Computer has won the game!";
    }
    return;
  }

  setTimeout(() => {
    controlButtons.forEach((btn) => {
      btn.disabled = false;
    });
  }, 100);
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  playerScoreShow.textContent = userScore;
  computerScoreShow.textContent = computerScore;
  playerChoiceShow.textContent = "❓";
  computerChoiceShow.textContent = "❓";

  controlButtons.forEach((btn) => {
    btn.disabled = false;
  });

  winnerModal.classList.add("hidden");
});
