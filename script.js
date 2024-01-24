function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSel, comSel) {
    let playerLower = playerSel.toLowerCase();
    if (playerLower == comSel) {
        console.log("Tie!");
    } else if (
        (playerLower == "rock" && comSel == "paper") ||
        (playerLower == "paper" && comSel == "scissors") ||
        (playerLower == "scissors" && comSel == "rock")
    ) {
        return `You Lost! ${playerLower} loses to ${comSel}!`;
    } else {
        return `You Won! ${playerLower} beats ${comSel}`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame()