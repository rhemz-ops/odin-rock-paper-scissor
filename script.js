let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const result = document.querySelector("#result");


const getComputerChoice = () => {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        result = "rock";
    } else if (result === 1) {
        result = "paper";
    } else if (result === 2) {
        result = "scissor";
    }

    return result;
}

rockBtn.addEventListener('click', () => {
    getHumanChoice("rock");
})

paperBtn.addEventListener('click', () => {
    getHumanChoice("paper");
})

scissorBtn.addEventListener('click', () => {
    getHumanChoice("scissor");
})

const getHumanChoice = (choice) => {
    playRound(choice, getComputerChoice());
}


const playRound = (humanChoice, computerChoice) => {
    const playerScore = document.querySelector("#playerScore");
    const comScore = document.querySelector("#comScore");

    if (
        (humanChoice === "rock" && computerChoice === "scissor") 
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissor" && computerChoice === "paper") 
    ) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        playerScore.textContent = humanScore;
        roundsPlayed++;
    } else if (humanChoice === computerChoice) {
        result.textContent = `It\'s a tie. You both choose ${humanChoice}`;
        roundsPlayed++;
    } else {
        result.textContent = `You lose. ${humanChoice} beats ${computerChoice}`;
        computerScore++;
        comScore.textContent = computerScore;
        roundsPlayed++
    }

}

