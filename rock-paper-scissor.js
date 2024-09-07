const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return computerTurn = options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice(){
    let validInput = false;
    while (validInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceLower = choice.toLowerCase();
        if (options.includes(choiceLower)){
            validInput = true;
            return choiceLower;
        }
    }
}

function checkWinner(humanSelection, computerSelection){
    if (humanSelection == computerSelection){
        return "Tie";
    }
    else if (
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "paper" && computerSelection == "rock") ||
        (humanSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Human";
    }
    else {
        return "Computer";
    }
}

function playRound(humanSelection, computerSelection){
   const result = checkWinner(humanSelection, computerSelection);
   if (result == "Tie"){
    return "It is a Tie!";
   }
   else if (result == "Human"){
    return `You Win! ${humanSelection} beats ${computerSelection}`;
   }
   else {
    return `You Loose! ${computerSelection} beats ${humanSelection}`;
   }
}

function game(){
    let humanScore = 0;
    let computerScore = 0;
    console.log("Welcome to the Game!");
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        if (checkWinner(humanSelection, computerSelection) == "Human"){
            humanScore++;
        }
        else if (checkWinner(humanSelection, computerSelection) == "Computer"){
            computerScore++;
        }
    }
    console.log("Game is Finished!");
    if (humanScore > computerScore){
        console.log("Human was the Winner!");
    }
    else if (humanScore < computerScore){
        console.log("Computer was the Winner!");
    }
    else{
        console.log("Tie!");
    }
}

game();
