let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

const choices = ['rock', 'paper', 'scissors'];
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const roundNumberElement = document.getElementById('roundNumber');
const roundResultElement = document.getElementById('roundResult');
const finalResultElement = document.getElementById('finalResult');
const finalWinnerElement = document.getElementById('finalWinner');

function playRound(playerChoice) {
    if (currentRound > 10) {
        return;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    updateScores(result);
    displayRoundResult(playerChoice, computerChoice, result);

    currentRound++;
    roundNumberElement.textContent = `${currentRound}/10`;

    if (currentRound > 10) {
        displayFinalWinner();
    }
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }

    return 'lose';
}

function updateScores(result) {
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function displayRoundResult(playerChoice, computerChoice, result) {
    roundResultElement.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. You ${result}!`;
}

function displayFinalWinner() {
    finalResultElement.style.display = 'block';
    if (playerScore > computerScore) {
        finalWinnerElement.textContent = `You win the game with ${playerScore} to ${computerScore}!`;
    } else if (playerScore < computerScore) {
        finalWinnerElement.textContent = `Computer wins the game with ${computerScore} to ${playerScore}!`;
    } else {
        finalWinnerElement.textContent = `It's a tie! Final score: Player ${playerScore} - Computer ${computerScore}`;
    }
}
