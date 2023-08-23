let playerWinCounter = 0;
let opponentWinCounter = 0;
let numRounds = 0;
const maxRounds = 5;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("detected click");
        playRound(button.value, getComputerChoice());

        if(numRounds >= maxRounds) {
            buttons.forEach((button) => {
                button.disabled=true;
            });
            updateScoreAndAddResult((playerWinCounter > opponentWinCounter) ? "You win!"
            : (playerWinCounter === opponentWinCounter) ? "It's a tie" : "Sorry, you lost");
        }
    });
});

function getComputerChoice() {
    const intBetweenZeroAndTwo = Math.floor(Math.random()*3);
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[intBetweenZeroAndTwo];
}

function playRound(playerSelection, computerSelection) {
    console.log("received playerSelection: " + playerSelection + " and computerSelection: " + computerSelection);

    if(playerSelection.toUpperCase()===computerSelection.toUpperCase()) {
        updateScoreAndAddResult("It's a tie! You both chose: " + playerSelection);
        numRounds++;
    }

    else switch(playerSelection.toUpperCase()) {
        case "ROCK":
            if(computerSelection.toUpperCase() === "PAPER") {
                opponentWinCounter++;
                numRounds++;
                updateScoreAndAddResult("You lose! Paper beats Rock.");
                return;
            }
            else {
                playerWinCounter++;
                numRounds++;
                updateScoreAndAddResult("You win! Rock beats Scissors!");
                return;
            }
        case "PAPER":
            if(computerSelection.toUpperCase() === "SCISSORS") {
                opponentWinCounter++;
                numRounds++;
                updateScoreAndAddResult("You lose! Scissors beats paper.");
                return;
            }
            else {
                playerWinCounter++;
                numRounds++;
                updateScoreAndAddResult("You win! Paper beats Rock!");
                return;
            }
        case "SCISSORS":
            if(computerSelection.toUpperCase() === "PAPER") {
                opponentWinCounter++;
                numRounds++;
                updateScoreAndAddResult("You lose! Paper beats Rock.");
                return;
            }
            else {
                playerWinCounter++;
                numRounds++;
                updateScoreAndAddResult("You win! Rock beats Scissors!");
                return;
            }
    }
}

function updateScoreAndAddResult(resultText) {
    const playerScore = document.querySelector('.player-score');
    const opponentScore = document.querySelector('.opponent-score');
    const resultsContainer = document.querySelector('.results-container');
    const resultToAdd = document.createElement('p');

    playerScore.textContent = playerWinCounter;
    opponentScore.textContent = opponentWinCounter;
    resultToAdd.textContent = resultText;
    resultsContainer.appendChild(resultToAdd);
}