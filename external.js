function getComputerChoice(){
    const play = ["rock", "paper", "scissors"];
    return play[Math.floor(Math.random() * play.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Choose rock, paper, or scissors: ");
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        console.log("Player: " + playerScore + "\n" + "Computer: " + computerScore + "\n" + "Tied");
        alert("You tied!"); 
    }   else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors"
    || playerSelection == " scissors" && computerSelection == "rock") {
        computerScore = ++computerScore;
        console.log("Player: " + playerScore + "\n" + "Computer: " + computerScore + "\n" + "Computer won");
        alert("You lost! " + computerSelection + " beats " + playerSelection + "!");
    }   else {
        playerScore = ++playerScore;
        console.log("Player: " + playerScore + "\n" + "Computer: " + computerScore + "\n" + "Player won");
        alert("You won! " + playerSelection + " beats " + computerSelection + "!");
    }    
}