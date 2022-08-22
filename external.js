function getComputerChoice(){
    const play = ["rock", "paper", "scissors"];
    return play[Math.floor(Math.random() * play.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Choose rock, paper, or scissors: ");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        console.log("Player: " + playerScore + "\n" + "Computer: " + computerScore + "\n" + "Tied");
        return("You tied!"); 
    }   else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors"
    || playerSelection == " scissors" && computerSelection == "rock") {
        computerScore = ++computerScore;
        console.log("Player: " + playerScore + "\n" + "Computer: " + computerScore + "\n" + "Computer won");
        return("You lost! " + computerSelection + " beats " + playerSelection + "!");
    }   else {
        playerScore = ++playerScore;
        console.log("Player: " + playerScore + "\n" + "Computer: " + computerScore + "\n" + "Player won");
        return("You won! " + playerSelection + " beats " + computerSelection + "!");
    }    
}

function game() {
    for (let round = 0; round < 5; round++) {
        console.log(playRound());
    if (round === 4){
        if (playerScore > computerScore){
            console.log("Nice! You won the game!")
        }else if (computerScore > playerScore){
            console.log("Sorry, you lost the game. ): ")
        }else{
            console.log("At least you tied!")
        }
        }
    }
}