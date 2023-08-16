const NUM_OF_ROUNDS = 5;
let playerWinCounter = 0;
let computerWinCounter = 0;

function getComputerChoice() {
    const intBetweenZeroAndTwo = Math.floor(Math.random()*3);
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[intBetweenZeroAndTwo];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase()===computerSelection.toUpperCase()) 
        return "It's a tie! You both chose: " + playerSelection;
    else switch(playerSelection.toUpperCase()) {
        case "ROCK":
            if(computerSelection.toUpperCase() === "PAPER") {
                computerWinCounter++;
                return "You lose! Paper beats Rock."
            }
            else {
                playerWinCounter++;
                return "You win! Rock beats Scissors!"
            }
        case "PAPER":
            if(computerSelection.toUpperCase() === "SCISSORS") {
                computerWinCounter++;
                return "You lose! Scissors beats paper."
            }
            else {
                playerWinCounter++;
                return "You win! Paper beats Rock!"
            }
        case "SCISSORS":
            if(computerSelection.toUpperCase() === "PAPER") {
                computerWinCounter++;
                return "You lose! Paper beats Rock."
            }
            else {
                playerWinCounter++;
                return "You win! Rock beats Scissors!"
            }
    }
}

function game() {
    let playerChoice = "";
    let result = "";
    console.log("Starting new game");
    for(let i=0; i < NUM_OF_ROUNDS; i++) {
        playerChoice = prompt("Rock, Paper, or Scissors?");
        result = playRound(playerChoice, getComputerChoice());
        console.log(result);
        console.log("Player score: " + playerWinCounter + "  Computer score: " + computerWinCounter);
    }
}