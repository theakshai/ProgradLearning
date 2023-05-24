let computerSelected ;
let userSelected = document.querySelector(".options")
let userImage = document.querySelector("#user-image")
let computerImage = document.querySelector("#computer-image")
let userScore = document.querySelector(".userScore")
let computerScore = document.querySelector(".computerScore")
let winner = document.querySelector(".winner");

let allValues = {
    0: "stone",
    1: "paper",
    2: "scissors",
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
    if(computerScore.value == 20){
        alert("Computer Won the Game");
        userScore.value = 0;
        computerScore.value = 0;
    }
    if(userSelected.value == "stone"){
        if(allValues[computerSelected] == "paper"){
            computerScore.value++;
        }else if(allValues[computerSelected] == "scissors"){
            userScore.value++;
        }else{
        }
    }else if(userSelected.value == "paper"){
        if(allValues[computerSelected] == "scissors"){
            computerScore.value++;
        }else if(allValues[computerSelected] == "stone"){
            userScore.value++;
        }else{
        }
    }else{
        if(allValues[computerSelected] == "paper"){
            userScore.value++;
        }else if(allValues[computerSelected] == "stone"){
            computerScore.value++;
        }else{
        }
    }
}
