let humanScore = 0;
let computerScore = 0;

// REFER TO THE BUTTON ELEMENTS
const swordBtn = document.querySelector("#swordBtn");
const shieldBtn = document.querySelector("#shieldBtn");
const staffBtn = document.querySelector("#staffBtn");

const playerScoreEL = document.querySelector("#playerScore");
const computerScoreEl = document.querySelector("#computerScore");
const textResult = document.querySelector("#text-result");

const getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        randomChoice = "sword";
    } else if (randomChoice === 1) {
        randomChoice = "shield";
    } else {
        randomChoice = "staff";
    }

    return randomChoice;
}

const getHumanChoice = choice => {
    playRound(choice, getComputerChoice());
}

const playRound = (humanChoice, computerChoice) => {
    // PLAYER WINNING CONDITION
    if ((humanChoice === "sword" && computerChoice === "staff")
        || (humanChoice === "staff" && computerChoice === "shield")
        || (humanChoice === "shield" && computerChoice === "sword")
    ) {
        humanScore++;
        playerScoreEL.textContent = humanScore;
        textResult.textContent = `You WIN! ${humanChoice} beats ${computerChoice}`;
        console.log(humanChoice + " " + computerChoice);
    } else if (humanChoice === computerChoice) {
        textResult.textContent = `It\'s a tie. You both choose ${computerChoice}`;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        textResult.textContent = `Computer Win. ${humanChoice} lost against ${computerChoice}`;
    }

    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            textResult.textContent = "YOU WON";
        } else {
            textResult.textContent = "YOU LOST";
        }
    } 
}



