//create function for the game
function game() {
    //code for game
    function playRound(playerSelection, computerSelection) {
        if (computerSelection === "Rock" && playerSelection.toLowerCase() === "rock") {
            return result = "It's a Tie!";
        }
        if (computerSelection === "Rock" && playerSelection.toLowerCase() === "paper") {
            return result = "You Win! Paper beats Rock!";
        }
        if (computerSelection === "Rock" && playerSelection.toLowerCase() === "scissors") {
            return result = "You Lose! Rock beats Scissors!";
        }
        if (computerSelection === "Paper" && playerSelection.toLowerCase() === "paper") {
            return result = "It's a Tie!";
        }
        if (computerSelection === "Paper" && playerSelection.toLowerCase() === "scissors") {
            return result = "You win! Scissors beats Paper!";
        }
        if (computerSelection === "Paper" && playerSelection.toLowerCase() === "rock") {
            return result = "You Lose! Paper beats Rock!";
        }
        if (computerSelection === "Scissors" && playerSelection.toLowerCase() === "scissors") {
            return result = "It's a Tie!";
        }
        if (computerSelection === "Scissors" && playerSelection.toLowerCase() === "rock") {
            return result = "You win! Rock beats Scissors";
        }
        if (computerSelection === "Scissors" && playerSelection.toLowerCase() === "paper") {
            return result = "You Lose! Scissors beats Paper!";
        }
    }
    
    //displays the match results
    let result; 
    //computer memorizes choice 
    function getComputerChoice() {
        if (computer[random] === "Rock") {
            return "Rock";
        } else if (computer[random] === "Paper") {
            return "Paper";
        } else if (computer[random] === "Scissors") {
            return "Scissors";
        }
    }
    //computer selects randomly
    const computer = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * computer.length);
    //displays computer's choice (just for reference)
    console.log(getComputerChoice());
    //player chooses
    const playerSelection = prompt("Choose Rock, Paper, or Scissors.");
    //changes function to variable
    const computerSelection = getComputerChoice();
    //prints results (change later to return, not console.log)    
    console.log(playRound(playerSelection, computerSelection));
}

    //make the function loop 5 times
    game()
    game()
    game()
    game()
    game()