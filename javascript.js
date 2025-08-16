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

function getHumanChoice(){
    let answer = prompt('Enter your choice: "rock", "paper", or "scissors"');
    return answer.toLowerCase();

}

function playRound(playerChoice, computerChoice){
    if (playerChoice == computerChoice){
        console.log("Ah! We both chose "+ playerChoice +"!");
    } else {
        if (playerChoice == 'rock'){
            if (computerChoice == 'paper'){
                computerScore++;
                console.log("Oh no! The computer's "+ computerChoice +" beat my " + playerChoice + "!");
            }
            if (computerChoice == 'scissors'){
                playerScore++;
                console.log("Haha! My "+ playerChoice +" beat the computer's " + computerChoice + "!");
            }
        } else if (playerChoice == 'paper'){
            if (computerChoice == 'rock'){
                playerScore++;
                console.log("Haha! My "+ playerChoice +" beat the computer's " + computerChoice + "!");
            }
            if (computerChoice == 'scissors'){
                computerScore++;
                console.log("Oh no! The computer's "+ computerChoice +" beat my " + playerChoice + "!");
            }
        } else if (playerChoice == 'scissors'){
            if (computerChoice == 'rock'){
                computerScore++;
                console.log("Oh no! The computer's "+ computerChoice +" beat my " + playerChoice + "!");
            }
            if (computerChoice == 'paper'){
                playerScore++;
                console.log("Haha! My "+ playerChoice +" beat the computer's " + computerChoice + "!");
            }
        }
    }
    console.log("Scores\nPlayer: " + playerScore + "\tComputer: " + computerScore);
}

let playerScore = 0;
let computerScore = 0;

function playGame(){

    for (let i = 0; i < 5; i++){
        let h = getHumanChoice();
        let c = getComputerChoice();
        if (h === ""){
            break;
        }
        playRound(h, c);
    }
}


