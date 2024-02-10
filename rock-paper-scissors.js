// Pseudocode included in comments
// Tell computer the choices
let choices = ["Rock", "Paper", "Scissors"]

// Make choices random
function getChoice(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

// Gets random choice from computer
function getComputerChoice(){
    const randomNum = getChoice(0,3)
    let computerChoice = (choices[randomNum]);
    return computerChoice
}

//Prompts player for choice
function getPlayerChoice(){
let playerSelection = prompt('Rock, paper or scissors?');
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    return playerSelection
}

// Play one round, telling computer the rules and scoring along the way
function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    console.log(`\nRound: ${roundCount}`);
    if (playerSelection == computerSelection){
        console.log(`Computer choice: ${computerSelection}`);
        console.log(`Player choice: ${playerSelection}`);
        return "It's a tie!"
    }
    else if ((computerSelection == "Paper" && playerSelection == "Rock") ||
            (computerSelection == "Scissors" && playerSelection == "Paper") ||
            (computerSelection == "Rock" && playerSelection == "Scissors")){
        computerRoundWins++;
        console.log(`Computer choice: ${computerSelection}`);
        console.log(`Player choice: ${playerSelection}`);
        return "Computer wins!"
    }else{
        console.log(`Computer choice: ${computerSelection}`);
        console.log(`Player choice: ${playerSelection}`);
        playerRoundWins++;
        return "Player wins!"
    }
}
// Play 5 rounds using loop
function playGame(n){
    for (let i=1; i<=n; i++){
        console.log(playRound(playerSelection, computerSelection));
        roundCount++;
        console.log(`Computer Score: ${computerRoundWins}\tPlayer Score: ${playerRoundWins}`);
    }
    if (computerRoundWins == playerRoundWins){
        console.log("\nTie!")
    } else if(computerRoundWins > playerRoundWins){
        console.log("\nComputer wins the game! Better luck next time!")
    } else {
        console.log("\n Congrats! Player wins the game!")
    } 
}


//tell computer the variables
let roundCount = 1;
let playerRoundWins = 0;
let computerRoundWins = 0; 
let computerSelection = null;
let playerSelection = null;


console.log(playGame(5));
