function getComputerChoice() {
    const intBetweenZeroAndTwo = Math.floor(Math.random()*3);
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[intBetweenZeroAndTwo];
}

function playRound(playerSelection, computerSelection) {
    if(String.toUpper(playerSelection)===String.toUpper(computerSelection)) 
        return "It's a tie! You both chose: " + playerSelection;
    else switch(String.toUpper(playerSelection)) {
        case "ROCK":
            if(String.toUpper(computerSelection) === "PAPER")
                return "You lose! Paper beats Rock."
            else
                return "You win! Rock beats Scissors!"
        case "PAPER":
            if(String.toUpper(computerSelection) === "SCISSORS")
                return "You lose! Scissors beats paper."
            else
                return "You win! Paper beats Rock!"
        case "SCISSORS":
            if(String.toUpper(computerSelection) === "PAPER")
                return "You lose! Paper beats Rock."
            else
                return "You win! Rock beats Scissors!"
}