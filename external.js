let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let buttons = document.querySelectorAll(".images");

buttons.forEach((images) => {
    images.addEventListener("click", () => {
        const img = images.querySelector("img");
        playerSelection = img.alt.toLowerCase();

        playRound(playerSelection, computerSelection);

        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }
    });
});

function getComputerChoice(){
    const play = ["Rock", "Paper", "Scissors"];
    return play[Math.floor(Math.random() * play.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
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


function declareWinner() {
    for (let round = 0; round < 5; round++) {
        console.log(playRound());
    }
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
