function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice(choice) {
    switch (choice) {
        case "Rock":
            return 0;
        case "Paper":
            return 1;
        case "Scissors":
            return 2;
        default:
            return "ERROR";
    }
}


function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let winner = findWinnerArray[playerChoice][computerChoice];
    switch (winner) {
        case 1:
            scores[0] += 1;
            results.textContent = "You Won!";
            break;
        case -1:
            scores[1] += 1;
            results.textContent = "You Lost!";
            break;
        case 0:
            results.textContent = "It was a tie!";
            break;
        default:
            console.log("There was some terminal error");
            break;
    }
    
    scoreHeader.textContent = `Player: ${scores[0]}, Computer: ${scores[1]}`;

    if (scores[0] === 5 || scores[1] === 5) {
        console.log("WE HAVE A WINNER");
    }
}


/*
 * Index array at [playerChoice][computerChoice]
 * 0 = rock, 1 = paper, 2 = scissors for indexing
 * 1 = player win, -1 = computer win, 0 = tie for result
*/
let findWinnerArray = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0]
];

// [Player Score, Computer Score]
let scores = [0, 0];

const buttons = document.querySelectorAll("button");
const scoreHeader = document.querySelector("h1.score");
const results = document.createElement("div");
document.body.insertBefore(results, document.querySelector(".choices"))

buttons.forEach((button) => {
    button.addEventListener("click", () => playRound(getPlayerChoice(button.textContent)))
});