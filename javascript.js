
//play a single round of rock paper scissors
    //computer chooses rock, paper, or scissors
    const computerSelection = ["Rock", "Paper", "Scissors"];
    
    const random = Math.floor(Math.random() * computerSelection.length);
    console.log(computerSelection[random]);


//player inputs rock, paper, or scissors (not 'case sensitive)
//if computer chooses rock and player chooses paper
    //return You win! Paper beats Rock!
//else if computer chooses rock and player chooses scissors
    //return You lose! Rock beats Scissors!
//else 
    //return It's a tie!
//if computer chooses scissors and player chooses rock
    //return You win! Rock beats scissors!
//else if computer chooses scissors and player chooses paper
    //return You lose! Scissors beats Paper!
//else 
    //return It's a tie!
//if computer chooses paper and player chooses scissors
    //return You win! Scissors beats Paper!
//else if computer chooses paper and player chooses rock
    //return You Lose! Paper beats Rock!
//else
    //return It's a tie!
