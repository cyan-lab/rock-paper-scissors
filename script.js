function getComputerChoice() {
    const result = Math.floor(Math.random() * 3);
    console.log(result);

    if (result === 0) {
        return "rock";
    } else if (result === 1) {
        return "paper";
    } else if (result === 2) {
        return "scissors";
    }
}
/*
console.log("Computer choice:");
console.log(getComputerChoice());
*/
function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:");
    //return choice.toLowerCase();

    if (choice.toLowerCase() === "rock") {
        return "rock";
    } else if (choice.toLowerCase() === "paper") {
        return "paper";
    } else if (choice.toLowerCase() === "scissors") {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    
}

console.log("Your choice:");
const humanSelection = getHumanChoice();
console.log("Computer choice:");
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);
console.log("Your score: " + humanScore);
console.log("Computer score: " + computerScore);

console.log(playRound(humanSelection, computerSelection));
