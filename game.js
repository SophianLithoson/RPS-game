let playerWinCounter = 0;
let opponentWinCounter = 0;
let numRounds = 0;
const maxRounds = 5;

function getComputerChoice() {
    const intBetweenZeroAndTwo = Math.floor(Math.random()*3);
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[intBetweenZeroAndTwo];
}

function playRound(playerSelection, computerSelection) {
    console.log("received playerSelection: " + playerSelection + " and computerSelection: " + computerSelection);

    if(playerSelection.toUpperCase()===computerSelection.toUpperCase()) 
        updateScoreAndAddResult("It's a tie! You both chose: " + playerSelection);
    else switch(playerSelection.toUpperCase()) {
        case "ROCK":
            if(computerSelection.toUpperCase() === "PAPER") {
                opponentWinCounter++;
                updateScoreAndAddResult("You lose! Paper beats Rock.");
                return;
            }
            else {
                playerWinCounter++;
                updateScoreAndAddResult("You win! Rock beats Scissors!");
                return;
            }
        case "PAPER":
            if(computerSelection.toUpperCase() === "SCISSORS") {
                opponentWinCounter++;
                updateScoreAndAddResult("You lose! Scissors beats paper.");
                return;
            }
            else {
                playerWinCounter++;
                updateScoreAndAddResult("You win! Paper beats Rock!");
                return;
            }
        case "SCISSORS":
            if(computerSelection.toUpperCase() === "PAPER") {
                opponentWinCounter++;
                updateScoreAndAddResult("You lose! Paper beats Rock.");
                return;
            }
            else {
                playerWinCounter++;
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

    // Now that the round is finished, remove the click listeners if we have reached the end

    if(numRounds >= maxRounds) {
        const btns = document.querySelectorAll('b');
        btns.forEach((btn) => {
            btn.removeEventListener('click', listenForClick());
        });
    }
}

const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
    btn.addEventListener('click', function listenForClick() {
        console.count("detected click");
        playRound(btn.value, getComputerChoice());
    });
});

/* function game() {
    let playerChoice = "";
    let result = "";
    console.log("Starting new game");
    for(let i=0; i < NUM_OF_ROUNDS; i++) {
        playerChoice = prompt("Rock, Paper, or Scissors?");
        result = playRound(playerChoice, getComputerChoice());
        console.log(result);
        console.log("Player score: " + playerWinCounter + "  Computer score: " + opponentWinCounter);
    }
}
*/