function getComputerChoice(rock ,paper, scissors) {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => playRound('Rock'));
paper.addEventListener('click', () => playRound('Paper'));
scissors.addEventListener('click', () => playRound('Scissors'));


function playRound(playerChoice) {
    let computerChoice = getComputerChoice('Rock', 'Paper', 'Scissors');
    
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            game('You WIN! Rock beats Scissors');
        } else if (computerChoice === 'Paper') {
            game('You LOSE! Paper beats Rock');
        } else {
            game('Tie!');
        }
    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            game('You WIN! Paper beats Rock');
        } else if (computerChoice === 'Scissors') {
            game('You LOSE! Scissors beats Paper');
        } else {
            game('Tie!');
        }
    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            game('You WIN! Scissors beats Paper');
        } else if (computerChoice === 'Rock') {
            game('You LOSE! Rock beats Scissors');
        } else {
            game('Tie!');
        }
    }
}

let text = document.querySelector('.text');
let pScore = document.querySelector('.pScore');
let cScore = document.querySelector('.cScore');
let playerScore = 0;
let cpuScore = 0;


function game (wlText) {

    const winRock = 'You WIN! Rock beats Scissors';
    const loseRock = 'You LOSE! Paper beats Rock';
    const winPaper = 'You WIN! Paper beats Rock';
    const losePaper = 'You LOSE! Scissors beats Paper';
    const winScissors = 'You WIN! Scissors beats Paper';
    const loseScissors = 'You LOSE! Rock beats Scissors';

    if (wlText === winRock){
        text = document.querySelector('.text').innerHTML = winRock;
        playerScore++;
        pScore = document.querySelector('.pScore').innerHTML = playerScore;
    }else if (wlText === loseRock) {
        text = document.querySelector('.text').innerHTML = loseRock;
        cpuScore++;
        cScore = document.querySelector('.cScore').innerHTML = cpuScore;
    }else if(wlText === winPaper){
        text = document.querySelector('.text').innerHTML = winPaper
        playerScore++;
        pScore = document.querySelector('.pScore').innerHTML = playerScore;
    }else if(wlText === losePaper){
        text = document.querySelector('.text').innerHTML = losePaper;
        cpuScore++
        cScore = document.querySelector('.cScore').innerHTML = cpuScore;
    }else if(wlText === winScissors) {
        text = document.querySelector('.text').innerHTML = winScissors;
        playerScore++;
        pScore = document.querySelector('.pScore').innerHTML = playerScore;
    }else if(wlText === loseScissors) {
        text = document.querySelector('.text').innerHTML = loseScissors;
        cpuScore++;
        cScore = document.querySelector('.cScore').innerHTML = cpuScore;
    }else {
        text = document.querySelector('.text').innerHTML = wlText;
    }
    if (playerScore === 5) {
        text = document.querySelector('.text').innerHTML = 'Game Over You Won!';
        playerScore = 0; 
        cpuScore = 0;
        pScore = document.querySelector('.pScore').innerHTML = playerScore;
        cScore = document.querySelector('.cScore').innerHTML = cpuScore;
    }else if (cpuScore === 5) {
        text = document.querySelector('.text').innerHTML = 'Game Over You LOST!';
        playerScore = 0; 
        cpuScore = 0;
        pScore = document.querySelector('.pScore').innerHTML = playerScore;
        cScore = document.querySelector('.cScore').innerHTML = cpuScore;
    }
    
    

}



// function playRound(data){
    
//     let computerChoice = getComputerChoice('Rock','Paper','Scissors');
    
//     if (data.dataFromButton1 === 'Rock') {
//         if (computerChoice === 'Scissors') {
//             console.log(`You WIN! Rock beats Scissors`);
//         } else if (computerChoice === 'Paper') {
//             console.log('You LOSE! Paper beats Rock');
//         } else if (computerChoice === 'Rock') {
//             console.log('Tie!!')
//         }
//     }
    
//     if (data.dataFromButton2 === 'Paper') {
//         if (computerChoice === 'Rock') {
//             console.log("You WIN! Paper beats Rock!");
//         } else if (computerChoice === 'Scissors') {
//             console.log('You LOSE! Scissors beats Paper');
//         } else if (computerChoice === 'Paper') {
//             console.log('Tie!!');
//         }
//     }
    
//     if (data.dataFromButton3 === 'Scissors') {
//         if (computerChoice === 'Paper') {
//             console.log("You WIN! Scissors beats Paper!");
//         } else if (computerChoice === 'Rock') {
//             console.log('You LOSE! Rock beats Scissors');
//         } else if (computerChoice === 'Scissors') {
//             console.log('Tie!!');
//         }
//     }
    
// }



// playRound(eventData);        
    
    // if (data.dataFromButton1 == 'Rock' && computerChoice == 'Scissors'){
    //     console.log(`You WIN! ${data.dataFromButton1} beats ${computerChoice}`)
    // }else if (data.dataFromButton1 == 'Rock' && computerChoice == 'Paper') {
    //     console.log('you lose')
    // }

    // if (data.dataFromButton2 == 'Paper' && computerChoice == 'Rock') {
    //     console.log("You WIN! Paper beats Rock!")
    // }else if (data.dataFromButton2 == 'Paper' && computerChoice == 'Scissors') {
    //     console.log('you lose')
    // }


    // if (data.dataFromButton3 == 'Scissors' && computerChoice == 'Paper') {
    //     console.log(`You WIN! ${data.dataFromButton3} beats ${computerChoice}`)
    // }else if (data.dataFromButton2 == 'Paper' && computerChoice == 'Scissors') {
    //     console.log(`You LOSE! ${computerChoice} beats ${data.dataFromButton2}`)
    // }else if (data.dataFromButton3 == 'Scissors' && computerChoice == 'Scissors'){
    //     console.log('Tie!!');
    // }
    
    // if (data.dataFromButton2 == 'Paper' && computerChoice == 'Rock'){
    //     console.log(`You WIN! ${data.dataFromButton2} beats ${computerChoice}`)
        
    // }else if (data.dataFromButton1 == 'Rock' && computerChoice == 'Paper') {
    //     console.log(`You LOSE! ${computerChoice} beats ${data.dataFromButton1}`)
    // }else if (data.dataFromButton2 == 'Paper' && computerChoice == 'Paper'){
    //     console.log('Tie!!');
    // }


    
    
    
        // const buttons = document.querySelector('button');

    // buttons.forEach((button) => {
    //     let choice = ['Rock', 'Paper', 'Scissors'];

    //     let randomChoice = Math.floor(Math.random() * choice.length);

    //     let computerChoice = choice[randomChoice];

    //     button.addEventListener('click', (computerChoice) => {
    //         button.rock
    //         if (computerChoice == playerSelection) {
    //             console.log('Tie!')
    //         }
    //     })
    // });


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

// var eventData = {};

// const rock = document.querySelector('.rock');

// rock.addEventListener('click', (event) => {
//     eventData.dataFromButton1 = 'Rock';
//     playRound(eventData);
// });


// const paper = document.querySelector('.paper');

// paper.addEventListener('click', (event) =>{
//     eventData.dataFromButton2 = 'Paper';
//     playRound(eventData);
// });


// const scissors = document.querySelector('.scissors');

// scissors.addEventListener('click', (event) => {
//     eventData.dataFromButton3 = 'Scissors';
//     playRound(eventData);
// });