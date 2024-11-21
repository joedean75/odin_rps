function getComputerChoice() {
    let answer = Math.floor(Math.random() * 3);
    let choice = ''
    if (answer === 0) {
        choice = 'rock'
    }
    else if (answer === 1){
        choice = 'paper'
    }
    else if (answer === 2) {
        choice = 'scissors'
    } 
    return choice
}
function getHumanChoice() {
    let humanPick = prompt('Rock, Paper, Scissors')
    if (humanPick.toLowerCase() === 'rock'){
        return 'Rock'
    }

    else if (humanPick.toLowerCase() === 'paper')  {
        return 'Paper'
    }
    else if (humanPick.toLowerCase() === 'scissors') {
        return 'Scissors'
    }
    else {
        return 'Not a valid Choice!'
    }
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let person = humanChoice.toLowerCase();
        let computer = computerChoice;
        if ((person === 'rock') && (computer === 'rock')) {
            console.log('Draw')
        } else if ((person === 'paper') && (computer === 'paper')) {
            console.log('Draw')
        } else if ((person === 'scissors') && (computer === 'scissors')) {
            console.log('Draw')
        } else if ((person === 'scissors') && (computer === 'paper')) {
            console.log('You Win')
            humanScore ++
        } else if ((person === 'paper') && (computer === 'rock')) {
            console.log('You Win')
            humanScore ++
        } else if ((person === 'rock') && (computer === 'scissors')) {
            console.log('you win!')
            humanScore ++
        } else if ((person === 'scissors') && (computer === 'rock')) {
            console.log('You lose')
            computerScore ++
        }else if ((person === 'rock') && (computer === 'paper')) {
            console.log('You lose')
            computerScore ++
        }else if ((person === 'paper') && (computer === 'scissors')) {
            console.log('You lose')
            computerScore ++
        } else {
            console.log('Try agian')
        }
    
    }

    round1 = playRound(humanSelection1, computerSelection1)
    round2 = playRound(humanSelection2, computerSelection2)
    round3 = playRound(humanSelection3, computerSelection3)
    round4 =  playRound(humanSelection4, computerSelection4)
    round5 = playRound(humanSelection5, computerSelection5)
    console.log(humanScore)
    console.log(computerScore)
}


let humanSelection1 = getHumanChoice();
let humanSelection2 = getHumanChoice();
let humanSelection3 = getHumanChoice();
let humanSelection4 = getHumanChoice();
let humanSelection5 = getHumanChoice();

let computerSelection1 = getComputerChoice();
let computerSelection2 = getComputerChoice();
let computerSelection3 = getComputerChoice();
let computerSelection4 = getComputerChoice();
let computerSelection5 = getComputerChoice();

//console.log(getComputerChoice())
//console.log(getHumanChoice())

//playRound(humanSelection, computerSelection)

playGame();
