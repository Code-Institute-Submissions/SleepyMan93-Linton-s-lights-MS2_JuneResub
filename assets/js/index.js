let win;
let intervalId;
let flash;
let compTurn;
let order = [];
let good;

const startButton = document.getElementById('start');
const turnCounter = document.getElementById('turn');

let on = false;

/* Start Button */

function startGame () {
    if (start.value = true) {
        on == true;
        initialiseGame ();
    } else {
        on == false;
        turnCounter.innerHTML = "";
        clearInterval(intervalId);
    }
    console.log(start.value);
}


function initialiseGame() {
    win = false;
    order = [];
    let playerChoice = [];
    flash = 0;
    intervalId = 0;
    let turn = 1;
    turnCounter.innerHTML = 1;
    compTurn = true;
    good = true
    for (var i = 0; i < 20; i++) {
            order.push(Math.floor(Math.random() * 5) + 1);
        }
        console.log(order);

    intervalId = setInterval(gameFlash, 800);
}

function gameFlash() {

        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            if (order[flash] == 5) five();
            flash++;
        }, 200);
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
}







