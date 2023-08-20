function getComputerChoice() {
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
            return 'Win';
        } else if (computerChoice === 'Paper') {
            return 'Lose';
        } else {
            return 'Tie';
        }
    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            return 'Win';
        } else if (computerChoice === 'Scissors') {
            return 'Lose';
        } else {
            return 'Tie';
        }
    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            return 'Win';
        } else if (computerChoice === 'Rock') {
            return 'Lose';
        } else {
            return 'Tie';
        }
    }
}


const




function game (playerRound) {
    
}



// function playRound(data){
    
//     let computerChoice = getComputerChoice('Rock','Paper','Scissors');
    
//     if (data.dataFromButton1 === 'Rock') {
//         if (computerChoice === 'Scissors') {
//             console.log(`You Win! Rock beats Scissors`);
//         } else if (computerChoice === 'Paper') {
//             console.log('You lose! Paper beats Rock');
//         } else if (computerChoice === 'Rock') {
//             console.log('Tie!')
//         }
//     }
    
//     if (data.dataFromButton2 === 'Paper') {
//         if (computerChoice === 'Rock') {
//             console.log("You Win! Paper beats Rock!");
//         } else if (computerChoice === 'Scissors') {
//             console.log('You lose! Scissors beats Paper');
//         } else if (computerChoice === 'Paper') {
//             console.log('Tie!');
//         }
//     }
    
//     if (data.dataFromButton3 === 'Scissors') {
//         if (computerChoice === 'Paper') {
//             console.log("You Win! Scissors beats Paper!");
//         } else if (computerChoice === 'Rock') {
//             console.log('You lose! Rock beats Scissors');
//         } else if (computerChoice === 'Scissors') {
//             console.log('Tie!');
//         }
//     }
    
// }



// playRound(eventData);        
    
    // if (data.dataFromButton1 == 'Rock' && computerChoice == 'Scissors'){
    //     console.log(`You Win! ${data.dataFromButton1} beats ${computerChoice}`)
    // }else if (data.dataFromButton1 == 'Rock' && computerChoice == 'Paper') {
    //     console.log('you lose')
    // }

    // if (data.dataFromButton2 == 'Paper' && computerChoice == 'Rock') {
    //     console.log("You Win! Paper beats Rock!")
    // }else if (data.dataFromButton2 == 'Paper' && computerChoice == 'Scissors') {
    //     console.log('you lose')
    // }


    // if (data.dataFromButton3 == 'Scissors' && computerChoice == 'Paper') {
    //     console.log(`You Win! ${data.dataFromButton3} beats ${computerChoice}`)
    // }else if (data.dataFromButton2 == 'Paper' && computerChoice == 'Scissors') {
    //     console.log(`You Lose! ${computerChoice} beats ${data.dataFromButton2}`)
    // }else if (data.dataFromButton3 == 'Scissors' && computerChoice == 'Scissors'){
    //     console.log('Tie!');
    // }
    
    // if (data.dataFromButton2 == 'Paper' && computerChoice == 'Rock'){
    //     console.log(`You Win! ${data.dataFromButton2} beats ${computerChoice}`)
        
    // }else if (data.dataFromButton1 == 'Rock' && computerChoice == 'Paper') {
    //     console.log(`You Lose! ${computerChoice} beats ${data.dataFromButton1}`)
    // }else if (data.dataFromButton2 == 'Paper' && computerChoice == 'Paper'){
    //     console.log('Tie!');
    // }


    
    
    
        // const buttons = document.querySelector('button');

    // buttons.forEach((button) => {
    //     let choice = ['Rock', 'Paper', 'Scissors'];

    //     let randomChoice = Math.floor(Math.random() * choice.length);

    //     let computerChoice = choice[randomChoice];

    //     button.addEventListener('click', (computerChoice) => {
    //         button.rock
    //         if (computerChoice == playerSelection) {
    //             console.log('Tie')
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