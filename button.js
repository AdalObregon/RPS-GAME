var botonElement; // Boton play
var counter = 0;
var selector;
var cont ;

let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result_txt");
var choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }

}
function clickF(input){
    counter++;
    document.getElementById("counter").innerHTML = counter;
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp__choice", user__choice).innerHTML = 
    `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp CPU:  <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user__choice").innerHTML = 
    `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp YOU:  <span> ${input.toUpperCase()} </span>`;

    let comp__choice = choices[num];

    switch(choices_object[input][comp__choice]){
        case 'win':
            result.style.cssText = "color: #689f38";
            result.innerHTML = "YOU WIN";
            
            user_score++;
            break;
        case 'lose':
            result.style.cssText = "color: #d32f2f";
            result.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result.style.cssText = "color: #d67f";
            result.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}
