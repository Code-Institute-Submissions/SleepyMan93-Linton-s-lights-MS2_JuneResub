/* Used the foundations in this video to help build my js - https://www.youtube.com/watch?v=n_ec3eowFLQ */

let win = false;
let intervalId;
let flash;
let computerTurn;
let order = [];
let good;
let turn;
let on = false;
let easy = false;
let medium = false;
let hard = false;

const startButton = document.getElementById('start');
const turnCounter = document.getElementById('turn');
let winSong = document.getElementById("winningJingle");

window.onload = function() {
    $(".template").addClass("hide-display");
    $(".linton-img").addClass("hide-display");
    var message = window.localStorage.getItem("message");
    document.getElementById("message").innerHTML = message;
}

/* Start Button */

function startGame() {
    $("#message").addClass("hide-display");
    $(".template").removeClass("hide-display");
    $(".linton-img").removeClass("hide-display");


    if (start.value = true) {
        on = true;
        initialiseGame();
    } else {
        on = false;
        turnCounter.innerHTML = "";
        clearInterval(intervalId);
    }
    console.log(on)
}

/* Reset Button */

function endGame() {
    if (finish.value = true) {
        on = false;
        turnCounter.innerHTML = "";
        clearInterval(intervalId);
        clearColor();
    } else {
        on = true;
        initialiseGame();
    }
}

/* Level Choice */

function level() {
    easy = false;
    hard = false;
}

/* Game reset */

let playerColor = [];

function initialiseGame() {
    win = false;
    order = [];
        for (var i = 0; i < 20; i++) {
            order.push(Math.floor(Math.random() * 5) + 1);
        }
    playerColor = [];
    turn = 1;
    flash = 0;
    turnCounter.innerHTML = 1;
    computerTurn = true;
    good = true
    console.log(order)

    intervalId = setInterval(gameFlash, 800); /* setInterval timing method will forvever call the function (gameFlash) at 800ms untill clearInterval is called inside the function */
}

/* Light Flash Methods */

function gameFlash() {
    on = false;

    if (flash == turn) {
        clearInterval(intervalId);
        computerTurn = false;
        clearColor();
        on = true;
    }

    if (computerTurn) {
    clearColor();
    setTimeout(() => {
        if (order[flash] == 1) one();
        if (order[flash] == 2) two();
        if (order[flash] == 3) three();
        if (order[flash] == 4) four();
        if (order[flash] == 5) five();
        flash++;
    }, 200);
    }
    console.log(on)
}

function one() {
    document.getElementById('pink').style.background = "#F7AEF8";
}

function two() {
    document.getElementById('blue').style.background = "#00B2CA";
}

function three() {
    document.getElementById('white').style.background = "#E7E6F7";
}

function four() {
    document.getElementById('lime').style.background = "#9EE493";
}

function five() {
    document.getElementById('orange').style.background = "#F79256";
}

function clearColor() {
    document.getElementById('pink').style.background = "transparent"
    document.getElementById('blue').style.background = "transparent"
    document.getElementById('white').style.background = "transparent"
    document.getElementById('lime').style.background = "transparent"
    document.getElementById('orange').style.background = "transparent"
}

function flashLight() {
    document.getElementById('pink').style.background = "#F7AEF8"
    document.getElementById('blue').style.background = "#00B2CA"
    document.getElementById('white').style.background = "#E7E6F7"
    document.getElementById('lime').style.background = "#9EE493"
    document.getElementById('orange').style.background = "#F79256"
}

const pinkLight = document.getElementById('pink');
const blueLight = document.getElementById('blue');
const whiteLight = document.getElementById('white');
const limeLight = document.getElementById('lime');
const orangeLight = document.getElementById('orange');


pinkLight.addEventListener('click', () => {
    if (on);
    playerColor.push(1);
    checkMove();
    one();
    if (!win) {   /* Having ! before the variable means not. In this case.. "if not win, clearColor after 400 ms" */
        setTimeout(() => {
            clearColor();
        }, 400)
    };
})

blueLight.addEventListener('click', () => {
    if (on);
    playerColor.push(2);
    checkMove();
    two();
    if (!win) {   
        setTimeout(() => {
            clearColor();
        }, 400)
    };
})

whiteLight.addEventListener('click', () => {
    if (on);
    playerColor.push(3);
    checkMove();
    three();
    if (!win) {   
        setTimeout(() => {
            clearColor();
        }, 400)
    };
})

limeLight.addEventListener('click', () => {
    if (on);
    playerColor.push(4);
    checkMove();
    four();
    if (!win) {   
        setTimeout(() => {
            clearColor();
        }, 400)
    };
})

orangeLight.addEventListener('click', () => {
    if (on);
    playerColor.push(5);
    checkMove();
    five();
    if (!win) {   
        setTimeout(() => {
            clearColor();
        }, 400)
    };
})

function repeatRound() {
    playerColor = [];
    computerTurn = true;
    flash = 0; 
    intervalId = setInterval(gameFlash, 800);
}

function checkMove() {
    if (playerColor[playerColor.length -1] !== order[playerColor.length -1]) {
            good = false;
            flashLight();
            turnCounter.innerHTML = "ERROR!";
            setTimeout(() => {
                turnCounter.innerHTML = turn;
                clearColor();

                if (level(hard)) {
                    initialiseGame();
                } else {
                    repeatRound();
                    good = true;
                    }
                }, 800);
    } 

    if (playerColor.length == 15 && good == true) {
        winGame();
    }

    if (turn == playerColor.length && good && !win) {
        turn++;
        repeatRound();
        turnCounter.innerHTML = turn;
        console.log("Good Move!")
    }
}

function winAudio() {
    winSong.play();
}


function winGame() {
    flashLight();
    turnCounter.innerHTML = `CONGRATULATIONS! Power has been restored to my ship. Saving the world today was down to YOU!`;
    on = false;
    win = true;
    winAudio();
}






