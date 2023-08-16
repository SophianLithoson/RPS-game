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
            if(computerSelection.toUpperCase() === "PAPER")
                return "You lose! Paper beats Rock."
            else
                return "You win! Rock beats Scissors!"
        case "PAPER":
            if(computerSelection.toUpperCase() === "SCISSORS")
                return "You lose! Scissors beats paper."
            else
                return "You win! Paper beats Rock!"
        case "SCISSORS":
            if(computerSelection.toUpperCase() === "PAPER")
                return "You lose! Paper beats Rock."
            else
                return "You win! Rock beats Scissors!"
    }
}