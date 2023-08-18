
let choice = ['Rock', 'Paper', 'Scissors']

let computerChoice = Math.floor(Math.random() * choice.length);

console.log(choice[computerChoice]);

// function getComputerChoice (rock,paper,scissors) {

//     let rdm = Math.floor(Math.random() * 3) + 1;

//     if (rdm === 1) {
//         return(rock);
//     }
//     else if (rdm === 2) {
//         return(paper);
//     }
//     else if (rdm === 3) {
//         return(scissors);
//     }
// }

let pRock;
let pScissors;
let pPaper;


// const rock = document.querySelector('.rock');

// rock.addEventListener('click', function funcRock (){
//     return 'Rock';
// });


// const paper = document.querySelector('.paper');

// paper.addEventListener('click', function funcPaper (){
//     return 'Paper';
// });



function cos () {
    let pScissors = 'Scissors';
    const scissors = document.querySelector('.scissors');

    scissors.addEventListener('click', function (pScissors) {
        pScissors = "Scissors";
        

        
    });
}








function playRound(funcPaper, getComputerChoice){
    
    if (funcPaper == getComputerChoice.toLowerCase()) {
        console.log("Tie!");
        
    }
    if (playerSelection == 'rock' && getComputerChoice.toLowerCase() == 'scissors'){
        console.log(`You Win! ${plyr} beats ${getComputerChoice}`)
        
    }
    else if (playerSelection == 'scissors' && getComputerChoice.toLowerCase() == 'rock') {
        console.log(`You Lose! ${getComputerChoice} beats ${plyr}`)

    }
    else if (playerSelection == 'scissors' && getComputerChoice.toLowerCase() == 'paper') {
        console.log(`You Win! ${plyr} beats ${getComputerChoice}`)
    }
    else if (playerSelection == 'paper' && getComputerChoice.toLowerCase() == 'scissors') {
        console.log(`You Lose! ${getComputerChoice} beats ${plyr}`)
    }
    if (playerSelection == 'paper' && getComputerChoice.toLowerCase() == 'rock'){
        console.log(`You Win! ${plyr} beats ${getComputerChoice}`)
        
    }
    else if (playerSelection == 'rock' && getComputerChoice.toLowerCase() == 'paper') {
        console.log(`You Lose! ${getComputerChoice} beats ${plyr}`)
    
    }

}



