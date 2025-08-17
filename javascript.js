function getComputerChoice(){
    const choice = Math.trunc(Math.random() * 3);
    switch (choice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerChoice, computerChoice){
    if (playerChoice == computerChoice){
        resultElement.textContent = "Ah! We both chose "+ playerChoice +"!";
    } else {
        if (playerChoice == 'rock'){
            if (computerChoice == 'paper'){
                computerScore++;
                resultElement.textContent = "Oh no! The computer's "+ computerChoice +" beat my " + playerChoice + "!";
            }
            if (computerChoice == 'scissors'){
                playerScore++;
                resultElement.textContent = "Haha! My "+ playerChoice +" beat the computer's " + computerChoice + "!";
            }
        } else if (playerChoice == 'paper'){
            if (computerChoice == 'rock'){
                playerScore++;
                resultElement.textContent = "Haha! My "+ playerChoice +" beat the computer's " + computerChoice + "!";
            }
            if (computerChoice == 'scissors'){
                computerScore++;
                resultElement.textContent = "Oh no! The computer's "+ computerChoice +" beat my " + playerChoice + "!";
            }
        } else if (playerChoice == 'scissors'){
            if (computerChoice == 'rock'){
                computerScore++;
                resultElement.textContent = "Oh no! The computer's "+ computerChoice +" beat my " + playerChoice + "!";
            }
            if (computerChoice == 'paper'){
                playerScore++;
                resultElement.textContent = "Haha! My "+ playerChoice +" beat the computer's " + computerChoice + "!";
            }
        }
    }
    // console.log("Scores\nPlayer: " + playerScore + "\tComputer: " + computerScore);
}

function updateScoreLabels(){
    hsElement.textContent = playerScore;
    csElement.textContent = computerScore;
}

function appendVictoryMessage(){
    if (playerScore == 3){
        resultElement.textContent += " Human wins! We beat the machines!";    
    }
    if (computerScore == 3){
        resultElement.textContent += " Computer wins! My job is cooked by AI!";    
    }
}

function playGame(){
    updateScoreLabels();
        
    document.addEventListener('click', function (event) {
        if (playerScore > 2 || computerScore > 2){
            playerScore = 0;
            computerScore = 0;
        }
        let target = event.target;

        switch (target.id){
            case ("rock-button"):
                h = "rock";
                playRound(h, getComputerChoice());
                appendVictoryMessage();
                break;
            case ("paper-button"):
                h = "paper"
                playRound(h, getComputerChoice());;   
                appendVictoryMessage();
                break;
            case ("scissors-button"):
                h = "scissors";   
                playRound(h, getComputerChoice());
                appendVictoryMessage();   
                break;
        }

        updateScoreLabels();
    });
}


let playerScore = 0;
let computerScore = 0;

let hsElement = document.querySelector(".scores #human-score p");
let csElement = document.querySelector(".scores #cpu-score p");
let resultElement = document.querySelector(".results p");

updateScoreLabels();
playGame();

// function playGame(){

//     for (let i = 0; i < 5; i++){
//         let h = getHumanChoice();
//         let c = getComputerChoice();
//         if (h === ""){
//             break;
//         }
//         playRound(h, c);
//     }
// }

// function getHumanChoice(){
//     let answer = prompt('Enter your choice: "rock", "paper", or "scissors"');
//     return answer.toLowerCase();
// }

