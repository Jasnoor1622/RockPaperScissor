var compChoice;
var userChoice;
var comp;
var compScore = 0;
var userScore = 0;
var choices = ["Rock", "Paper", "Scissor"];
document.querySelector(".Rock").onclick = () =>{
    userChoice = document.querySelector(".Rock").getAttribute("id");
    comp = Math.floor(Math.random()*3);
    compChoice = choices[comp];
    if(compChoice == "Rock"){
        document.querySelector(".Start").innerHTML = "Draw!!!";
        document.querySelector(".Start").style.background = "grey";
    }
    else if(compChoice == "Scissor"){
        document.querySelector(".Start").innerHTML = "You Won, Computer chose Scissor";
        document.querySelector(".Start").style.background = "green";
        userScore++;
    }
    else if(compChoice == "Paper"){
        document.querySelector(".Start").innerHTML = "Computer Won, Computer chose Paper";
        document.querySelector(".Start").style.background = "red";
        compScore++;
    }
    document.querySelector(".User").innerHTML = userScore;
    document.querySelector(".Comp").innerHTML = compScore;
}

document.querySelector(".Paper").onclick = () =>{
    userChoice = document.querySelector(".Paper").getAttribute("id");
    comp = Math.floor(Math.random()*3);
    compChoice = choices[comp];
    if(compChoice == "Rock"){
        document.querySelector(".Start").innerHTML = "You Won, Computer chose Rock.";
        document.querySelector(".Start").style.background = "green";
        userScore++;
    }
    else if(compChoice == "Scissor"){
        document.querySelector(".Start").innerHTML = "Computer Won, Computer chose Scissor.";
        document.querySelector(".Start").style.background = "red";
        compScore++;
    }
    else if(compChoice == "Paper"){
        document.querySelector(".Start").innerHTML = "Draw!!!";
        document.querySelector(".Start").style.background = "grey";
    }
    document.querySelector(".User").innerHTML = userScore;
    document.querySelector(".Comp").innerHTML = compScore;
}

document.querySelector(".Sci").onclick = () =>{
    userChoice = document.querySelector(".Sci").getAttribute("id");
    comp = Math.floor(Math.random()*3);
    compChoice = choices[comp];
    if(compChoice == "Rock"){
        document.querySelector(".Start").innerHTML = "Computer Won, Computer chose Rock";
        document.querySelector(".Start").style.background = "red";
        compScore++;
    }
    else if(compChoice == "Scissor"){
        document.querySelector(".Start").innerHTML = "Draw!!!";
        document.querySelector(".Start").style.background = "grey";
    }
    else if(compChoice == "Paper"){
        document.querySelector(".Start").innerHTML = "You Won, Computer chose Paper.";
        document.querySelector(".Start").style.background = "green";
        userScore++;
    }
    document.querySelector(".User").innerHTML = userScore;
    document.querySelector(".Comp").innerHTML = compScore;
}


    

