function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    switch (choice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
        default:
            return "ERROR";
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

while (scores[0] + scores[1] != 5) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    if (playerChoice === "ERROR") {
        console.log("Unknown input");
        continue;
    }

    let winner = findWinnerArray[playerChoice][computerChoice];
    switch (winner) {
        case 1:
            console.log("You won");
            scores[0] += 1;
            break;
        case -1:
            console.log("You lost");
            scores[1] += 1;
            break;
        case 0:
            console.log("It was a tie");
            break;
        default:
            console.log("There was some terminal error");
            break;
    }
    
    console.log(`Current Score: ${scores[0]} to ${scores[1]}`);
}