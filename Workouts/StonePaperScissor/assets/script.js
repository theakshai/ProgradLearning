let computerSelected ;
let userSelected = document.querySelector(".options")
let userImage = document.querySelector("#user-image")
let computerImage = document.querySelector("#computer-image")
let userScore = document.querySelector(".userScore")
let computerScore = document.querySelector(".computerScore")
let winner = document.querySelector(".winner");
let confetti = document.querySelector(".confetti")
    let cs = 0;
    let us = 0;

// Each key has his strong opponet as pair.
let strongWeakPair = {
    "stone": "paper",
    "scissors": "stone",
    "paper": "scissors",
}

let allValues = {
    0: "stone",
    1: "paper",
    2: "scissors",
}

let changeImage = () =>{
    userImage.src = `../assets/Images/${userSelected.value}.png`;
}

let startGame = () => {
    computerSelected = Math.floor(Math.random() * (3));
    computerImage.src = `../assets/Images/${allValues[computerSelected]}.png`;
    userImage.src = `../assets/Images/${userSelected.value}.png`;

    if(userScore.value == 20){
        alert("User Won the Game");
        userScore.value = 0;
        computerScore.value = 0;
    }
    if(userScore.value ==  20 && computerScore.value == 20){
        alert("The Game is Tied");
        userScore.value = 0;
        computerScore.value = 0;
    }
    if(computerScore.value == 20){
        alert("Computer Won the Game");
        userScore.value = 0;
        computerScore.value = 0;
    }
    if(userSelected.value == allValues[computerSelected]){

    }else if(strongWeakPair[userSelected.value] == allValues[computerSelected]){
        computerScore.value++;
    }else{
        userScore.value++;
    }
}
