function getComputerChoice(){
    const rpsChoice = ['Rock','Paper','Scrissors']
    const randomChoice = Math.floor(Math.random() * 3)
    return rpsChoice[randomChoice]

}

function getResult(computerChoice,playerChoice){
    let score;
    if (computerChoice == playerChoice){
        score = 0
    }
    else if (playerChoice == 'Rock' && computerChoice =='Scrissors'){
        score = 1
    }
    else if (playerChoice == 'Scrissors' && computerChoice == 'Paper'){
        score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1
    }
    else {
        score = -1
    }
    return score
}


function showResult(score){
    let result = document.getElementById("result")

    switch(score){
        case -1:
            result.innerText = 'You Lost'
        break;
        case 0:
            result.innerText = 'Tie'
        break;
        case 1:
            result.innerText = 'You Won'
        break;
    }
}

let rockBlinker = document.getElementById("rock_blink")
let paperBlinker = document.getElementById("paper_blink")
let scrissorsBlinker = document.getElementById("scrissors_blink")

//im sorry i didnt used querySelectorAll correctly before
function clearBlinkers(){
    rockBlinker.innerText = " ";
    paperBlinker.innerText = " ";
    scrissorsBlinker.innerText = " ";
}

function showBlinkers(computerChoice){
    clearBlinkers()

    if (computerChoice == "Rock"){
        rockBlinker.innerText = "🤖"
    }
    else if (computerChoice == "Paper"){
        paperBlinker.innerText = "🤖"
    }
    else{
        scrissorsBlinker.innerText = "🤖"
    }
}

let computerScore = document.getElementById("computer_score")
let playerScore = document.getElementById("player_score")

function appendScore(score){
        if (score == -1){
            computerScore.innerText = `${Number(computerScore.innerText) + 1}`
        }
        else if(score == 1){
            playerScore.innerText = `${Number(playerScore.innerText) + 1}`
        }
        else {
            
        }

    }




function onclickRPS(playerChoice){
    let computerChoice = getComputerChoice()
    let result = getResult(computerChoice,playerChoice)
    showBlinkers(computerChoice)

    showResult(result)
    appendScore(result)
}

function onclickClear(){
    let result = document.getElementById("result")
    computerScore.innerText = "0";
    playerScore.innerText = "0";
    result.innerText = "";

}

let rockButton = document.getElementById("rock")
let paperButton = document.getElementById("paper")
let scrissorsButton = document.getElementById("scrissors")

rockButton.onclick = () => onclickRPS('Rock');
paperButton.onclick = () => onclickRPS('Paper')
scrissorsButton.onclick = () => onclickRPS('Scrissors')

let clearButton = document.getElementById("res")

clearButton.onclick = () => {
    onclickClear();
    clearBlinkers();

}
