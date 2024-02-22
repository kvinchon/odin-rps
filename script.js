const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let i = Math.floor(Math.random() * 3); // random integer between 0, 1 and 2
  return choices[i];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  playerSelectionLabel =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  computerSelectionLabel =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return;
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(
      `You Win! ${playerSelectionLabel} beats ${computerSelectionLabel}`
    );
    return 0;
  } else {
    console.log(
      `You Lose! ${computerSelectionLabel} beats ${playerSelectionLabel}`
    );
    return 1;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection;

    do {
      playerSelection = prompt("Choose between Rock, Paper and Scissors:");
    } while (!choices.includes(playerSelection.toLowerCase()));

    const computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);

    if (winner === 0) {
      playerScore += 1;
    } else if (winner === 1) {
      computerScore += 1;
    }
  }

  if (playerScore > computerScore) {
    console.log("You Won!");
  } else if (playerScore < computerScore) {
    console.log("You Lost!");
  } else {
    console.log("It's a tie game!");
  }

  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
}

playGame();
