
let score = document.getElementById("score");
let canvas = document.getElementById("gameCanvas");
let panel = document.getElementById("snake-panel");
let background_music = new Audio('../assets/audio/love.mp3');


score.hidden = true; 
canvas.hidden = true; 

function hide_elements () {
    score.hidden = false; 
    canvas.hidden = false; 
    var divsToHide = document.getElementsByClassName("button"); 
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "hidden"; 
    }

}

function level(n) {
    hide_elements(); 
    background_music.play();
    snake(n);
}

