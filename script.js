let humanScore = 0;
let computerScore = 0;

// REFER TO THE BUTTON ELEMENTS
const swordBtn = document.querySelector("#swordBtn");
const shieldBtn = document.querySelector("#shieldBtn");
const staffBtn = document.querySelector("#staffBtn");
const restartBtn = document.querySelector("#restart");
const weaponBtn = document.querySelectorAll(".weaponBtn");

const playerScoreEL = document.querySelector("#playerScore");
const computerScoreEl = document.querySelector("#computerScore");
const textResult = document.querySelector("#text-result");
const playerWeaponImg = document.querySelector("#player-weapon-image");
const computerWeaponImg = document.querySelector("#computer-weapon-image");


//THIS WILL RESTART THE GAME AND RE-ENABLED THE BUTTONS FOR PLAYING
const restartGame = () => {
    humanScore = 0;
    computerScore = 0;
    playerScoreEL.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
    weaponBtn.forEach(btn => {
        btn.disabled = false;
    })
    textResult.textContent = `Choose a weapon!`;
    playerScoreEL.style.color = "#FBF6E2";
    computerScoreEl.style.color = "#FBF6E2";
    playerWeaponImg.src = "./images/sword.png";
    computerWeaponImg.src = "./images/sword.png";
}

swordBtn.addEventListener("click", () => {
    getHumanChoice("sword");
    playerWeaponImg.src = "./images/sword.png";
});

shieldBtn.addEventListener("click", () => {
    getHumanChoice("shield");
    playerWeaponImg.src = "./images/shield.png";
});

staffBtn.addEventListener("click", () => {
    getHumanChoice("staff");
    playerWeaponImg.src = "./images/staff.png";
})

const getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        randomChoice = "sword";
        computerWeaponImg.src = "./images/sword.png";
    } else if (randomChoice === 1) {
        randomChoice = "shield";
        computerWeaponImg.src = "./images/shield.png";
    } else {
        randomChoice = "staff";
        computerWeaponImg.src = "./images/staff.png";
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

    // CHANGES TEXT COLOR DEPENDING ON THE SITUATION OF THE GAME
    if (humanScore > computerScore) {
        playerScoreEL.style.color = "lime";
        computerScoreEl.style.color = "red";
    } else if (humanScore === computerScore) {
        playerScoreEL.style.color = "yellow";
        computerScoreEl.style.color = "yellow";
    } else {
        computerScoreEl.style.color = "lime"
        playerScoreEL.style.color = "red";
    }

    if (humanScore >= 5 || computerScore >= 5) {

        if (humanScore > computerScore) {
            textResult.innerHTML = `<span class="winColor">Good job you won!</span> The final score is 
            <br>PLAYER:${humanScore} 
            COMPUTER: ${computerScore}`;
        } else {
            textResult.innerHTML = `<span class="loseColor">Game over</span>. Computer wins with the score of 
            <br>PLAYER: ${humanScore} 
            COMPUTER: ${computerScore}`;
        }

        weaponBtn.forEach(button => {
            button.disabled = true; 
        })
        restartBtn.style.display = "inline";
        restartBtn.addEventListener("click", () => {
            restartGame();
            restartBtn.style.display = "none";
        })

    } 
}


