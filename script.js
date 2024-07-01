// THIS FUNCTION GENERATES RANDOM NUMBER BETWEEN 0 AND 2
const getComputerChoice = () => {
    let result =  Math.floor(Math.random() * 3);
    if (result === 0) {
        result = "rock";
    } else if (result === 1) {
        result = "paper";
    } else {
        result = "scissor";
    }
    return result;
}


// THIS FUNCTION WILL GET THE PLAYERS CHOICE
const getHumanChoice = () => {
    return prompt("Pick Rock, Paper, or Scissors? ");
}



const playGame = () => {

    // THIS INITIALIZES THE SCORE FOR BOTH PLAYERS
    let humanScore = 0;
    let computerScore = 0;


    // THIS FUNCTION WILL PLAY ONE ROUND IF CALLED
    const playRound = (humanChoice, computerChoice) => {
    
    humanChoice = getHumanChoice().toLowerCase(); 
    computerChoice = getComputerChoice();

    if(
        (humanChoice === "rock" && computerChoice === "scissor") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log(`You WIN! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`It's a tie you both choose ${computerChoice.toUpperCase()}, play again.`);
    } else {
        console.log(`You LOSE! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`);
        computerScore++;
    }
    console.log(`Current score is:
        Human: ${humanScore}
        Computer: ${computerScore}`);
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if(humanScore > computerScore) {
        console.log("YOU WON!");
    } else if (humanScore === computerScore) {
        console.log(("IT\'S A DRAW."));
    }
    
    else {
        console.log("YOU LOST.");
    }
}

playGame();