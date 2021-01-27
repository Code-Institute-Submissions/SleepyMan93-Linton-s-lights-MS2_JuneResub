let win;
let intervalId;
let flash;
let computerTurn;
let order = [];
let good;
let turn;

const startButton = document.getElementById('start');
const turnCounter = document.getElementById('turn');

let on = false;

/* Start Button */

function startGame() {
    if (start.value = true) {
        on = true;
        initialiseGame();
    } else {
        on = false;
        turnCounter.innerHTML = "";
        clearInterval(intervalId);
    }
}

function endGame() {
    if (finish.value = true) {
        on = false;
        turnCounter.innerHTML = "";
        clearInterval(intervalId);
        clearColor();
        console.clear();
    } else {
        on = true;
        initialiseGame();
    }
}

let playerChoice = [];

function initialiseGame() {
    win = false;
    order = [];
    playerChoice = [];
    turn = 1;
    flash = 0;
    turnCounter.innerHTML = 1;
    computerTurn = true;
    good = true
    for (var i = 0; i < 20; i++) {
            order.push(Math.floor(Math.random() * 5) + 1);
        }
        console.log(order);

    intervalId = setInterval(gameFlash, 800); /* setInterval timing method will forvever call the function (gameFlash) at 800ms untill clearInterval is called inside the function */
}

function gameFlash() {

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
    console.log(turn);
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
    document.getElementById('orange').style.background = "F79256";
}

function clearColor() {
    document.getElementById('pink').style.background = "transparent"
    document.getElementById('blue').style.background = "transparent"
    document.getElementById('white').style.background = "transparent"
    document.getElementById('lime').style.background = "transparent"
    document.getElementById('orange').style.background = "transparent"
}







