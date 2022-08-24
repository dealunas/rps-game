let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let buttons = document.querySelectorAll(".button");

const main = document.querySelector("main");
const body = document.querySelector("body");
const container = document.querySelector("#rounds");
const endGame = document.querySelector("#end-game");
const endBody = document.querySelector("#end-body");
const returnMain = document.querySelector("#play-again");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
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
};

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    if (playerSelection == computerSelection) {
        displayResults(`You tied! ${capitalize(playerSelection)} ties with ${computerSelection}.`); 
    }   else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors"
    || playerSelection == " scissors" && computerSelection == "rock") {
        computerScore = ++computerScore;
        keepComputerScore();
        displayResults(`You lost! ${capitalize(computerSelection)} beats ${playerSelection}!`);
    }   else {
        playerScore = ++playerScore;
        keepPlayerScore();
        displayResults(`You won! ${capitalize(playerSelection)} beats ${computerSelection}!`);
    }    
};

function declareWinner() {
    nextSlide();
    if (playerScore > computerScore){
        endBody.textContent = "Nice! You won the game!"
        returnMain.textContent = "Play again?"
        }else{
            endBody.textContent = "Sorry, you lost the game. ):"
            returnMain.textContent = "Try again?"
        }
};

function keepPlayerScore(){
    let playerScoreBox = document.querySelector("#player-score");
    playerScoreBox.textContent = playerScore;
}

function keepComputerScore(){
    let computerScoreBox = document.querySelector("#computer-score");
    computerScoreBox.textContent = computerScore;
}

function displayResults(str) {
    container.textContent = str;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function nextSlide() {
    main.classList.add("disappear");
    endGame.classList.remove("disappear");

    returnMain.addEventListener("click", () => {
        main.classList.remove("disappear");
        endGame.classList.add("disappear");
        resetGame();
    });
}

function resetGame() {
    container.textContent ="";
    playerScore = 0;
    computerScore = 0;
    keepPlayerScore();
    keepComputerScore();
}