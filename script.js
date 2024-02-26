function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let i = Math.floor(Math.random() * 3); // random integer between 0, 1 and 2
  return choices[i];
}

function playRound(e) {
  const roundResult = document.createElement('div');
  const runningScore = document.createElement('div');

  const playerSelection = e.target.name;
  const computerSelection = getComputerChoice();

  playerSelectionLabel =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  computerSelectionLabel =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

  if (playerSelection === computerSelection) {
    roundResult.textContent = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    roundResult.textContent = `You Win! ${playerSelectionLabel} beats ${computerSelectionLabel}`;
    playerScore++;
  } else {
    roundResult.textContent = `You Lose! ${computerSelectionLabel} beats ${playerSelectionLabel}`;
    computerScore++;
  }

  runningScore.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
  results.innerHTML = '';
  results.appendChild(roundResult);
  results.appendChild(runningScore);

  if (playerScore === 5 || computerScore === 5) {
    const winner = document.createElement('div');
    winner.textContent = playerScore > computerScore ? 'You Won!' : 'You Lost!';
    results.appendChild(winner);

    playerScore = 0;
    computerScore = 0;
  }
}

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((btn) => {
  btn.addEventListener('click', playRound);
});
