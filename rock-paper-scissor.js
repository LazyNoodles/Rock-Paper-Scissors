const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let isGameOver = false;
let scoreToReach = 5;



function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const newGame = document.querySelector("#playAgain");
const finalScore = document.querySelector("#final");
const roundScore = document.querySelector("#roundScore");

rockBtn.addEventListener("click", function(){
    if (!isGameOver){
    playGame("rock", getComputerChoice());
    endGame();
    }
});

paperBtn.addEventListener("click", function(){
    if (!isGameOver){
    playGame("paper", getComputerChoice());
    endGame();
    }
});
scissorsBtn.addEventListener("click", function(){
    if (!isGameOver){
    playGame("scissors", getComputerChoice());
    endGame();
    }
});

newGame.addEventListener("click", function(){
    isGameOver = false;
    humanScore = 0;
    computerScore = 0;
    roundScore.innerText = "";
    finalScore.innerText = "";
    human.innerText = "0";
    computer.innerText = "0";
})

const computer = document.querySelector("#computer");
const human = document.querySelector("#human");

// Determine who wins each round using the game's logic
function playGame(humanSelection, computerSelection){
    if (humanSelection === computerSelection){
        roundScore.innerText= "It is a Tie!";
    }
    else if (humanSelection === "rock"){
        if (computerSelection === "paper"){
            roundScore.innerText = `You chose ${humanSelection} and the computer chose ${computerSelection}. You lost.`;
            computerScore++;
            computer.innerText = computerScore;
        }
        else if (computerSelection === "scissors"){
            roundScore.innerText = `You chose ${humanSelection} and the computer chose ${computerSelection}. You win!`;
            humanScore++;
            human.innerText = humanScore;
        }
    }
    else if (humanSelection === "paper"){
        if (computerSelection === "rock"){
            roundScore.innerText = `You chose ${humanSelection} and the computer chose ${computerSelection}. You win!`;
            humanScore++;
            human.innerText = humanScore;
        }
        else if (computerSelection === "scissors"){
            roundScore.innerText = `You chose ${humanSelection} and the computer chose ${computerSelection}. You lost.`;
            computerScore++;
            computer.innerText = computerScore;
        }
    }
    else if (humanSelection === "scissors"){
        if (computerSelection === "paper"){
            roundScore.innerText = `You chose ${humanSelection} and the computer chose ${computerSelection}. You win!`;
            humanScore++;
            human.innerText = humanScore;
        }
        else if (computerSelection === "rock"){
            roundScore.innerText = `You chose ${humanSelection} and the computer chose ${computerSelection}. You lost.`;
            computerScore++;
            computer.innerText = computerScore;
        }
    }
}

// Determine who has reached the desired goal first and end the game
function endGame() {
    if (humanScore === scoreToReach || computerScore === scoreToReach) {
        isGameOver = true;
        if (humanScore === scoreToReach) {
        finalScore.innerText = "You win!";
        human.classList.add("winner");
        computer.classList.add("loser");
    } else if (computerScore === scoreToReach){
    finalScore.innerText = "Computer wins!";
    human.classList.add("loser");
    computer.classList.add("winner");
    }
}}


