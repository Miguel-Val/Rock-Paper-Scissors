


function getComputerChoice (rock,paper,scissors) {

    let rdm = Math.floor(Math.random() * 3) + 1;

    if (rdm === 1) {
        return(rock);
    }
    else if (rdm === 2) {
        return(paper);
    }
    else if (rdm === 3) {
        return(scissors);
    }
}





function playerSelection (getComputerChoice) {
    let plyr = prompt("Please type in your selection, Rock, Paper, Scissors. ");
    

    if (plyr.toLowerCase() == getComputerChoice.toLowerCase()) {
        console.log("Tie!");
        
    }
    if (plyr.toLowerCase() == 'rock' && getComputerChoice.toLowerCase() == 'scissors'){
        console.log(`You Win! ${plyr} beats ${getComputerChoice}`)
        
    }
    else if (plyr.toLowerCase() == 'scissors' && getComputerChoice.toLowerCase() == 'rock') {
        console.log(`You Lose! ${getComputerChoice} beats ${plyr}`)

    }
    else if (plyr.toLowerCase() == 'scissors' && getComputerChoice.toLowerCase() == 'paper') {
        console.log(`You Win! ${plyr} beats ${getComputerChoice}`)
    }
    else if (plyr.toLowerCase() == 'paper' && getComputerChoice.toLowerCase() == 'scissors') {
        console.log(`You Lose! ${getComputerChoice} beats ${plyr}`)
    }
    if (plyr.toLowerCase() == 'paper' && getComputerChoice.toLowerCase() == 'rock'){
        console.log(`You Win! ${plyr} beats ${getComputerChoice}`)
        
    }
    else if (plyr.toLowerCase() == 'rock' && getComputerChoice.toLowerCase() == 'paper') {
        console.log(`You Lose! ${getComputerChoice} beats ${plyr}`)
    
}

}




playerSelection(getComputerChoice("Rock", "Paper", "Scissors"));
playerSelection(getComputerChoice("Rock", "Paper", "Scissors"));
playerSelection(getComputerChoice("Rock", "Paper", "Scissors"));
playerSelection(getComputerChoice("Rock", "Paper", "Scissors"));
playerSelection(getComputerChoice("Rock", "Paper", "Scissors"));