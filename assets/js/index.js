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

console.log(on)

/* Viewport User Input Fix: https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone 
I added in an extra CSS style so that the input field doesn't grow with a border*/

function sizing(x) {
    if (x.matches) {
        $('input[type=text]').on('focus', function(){
        // replace CSS font-size with 16px to disable auto zoom on iOS
        $(this).data('fontSize', $(this).css('font-size')).css('font-size', '16px').addClass("remove-outline");
        }).on('blur', function(){
        // put back the CSS font-size
        $(this).css('font-size', $(this).data('fontSize'));
    });
    }
}

var x = window.matchMedia("(max-width: 550px)")
sizing(x) // Call listener function at run time
x.addListener(sizing) // Attach listener function on state changes

/* Theme Music */


/* Start Button */

function startGame() {
    $("#message").addClass("hide-display");
    $(".template").removeClass("hide-display");


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

/* Username Store and Messages */

function userName() {
    var name = document.getElementById("nameField").value;
    

    var introMessage = `<p class="typewriter">Now we're ready for LIFT OFF ${name}!</p>
    <p class="typewriter2">Push the BIG red button...</p>
    <p class="typewriter3">Your mission statement awaits!<span>|</span></p>`;
    $("#introMessage").addClass("speech-box");
    document.getElementById("introMessage").innerHTML = introMessage;

    console.log(name);
    console.log(introMessage);


    var message = `<p class="text-color">HEEELLP! MY SHIP... IT'S ABOUT TO CRASH...</p> 

    <p class="text-color">${name}, my name is Linton and I'm on a super important mission to help save our planet and I need YOUR help!</p>
    <p class="text-color">Will you be the hero that Earth needs?</p>
    <p class="text-color">To restore power, the mainframe needs a color series. There are 20 rounds to save Earth. When the mainframe flashes a color, wait and then
    push the same color. If you get it right, the mainframe will then flash one more light in the series.</p>
    <p class="text-color">All you have to do is REMEMBER the pattern and repush the lights in order...
    Reckon you could do that?... That's right! I KNOW YOU CAN.</p>
    <p class="text-color">Gods speed ${name}!!. If you need me, just click on "Restart Game" to remind yourself of the mission...<span>|</span> </p>`;
    window.localStorage.setItem("message", message);

    console.log(message);
}

window.onload = function() {
    $(".template").addClass("hide-display");
    var message = window.localStorage.getItem("message");
    document.getElementById("message").innerHTML = message;
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

    if (playerColor.length == 5 && good == true) {
        winGame();
    }

    if (turn == playerColor.length && good && !win) {
        turn++;
        repeatRound();
        turnCounter.innerHTML = turn;
        console.log("Good Move!")
    }
}

function winGame() {
    flashLight();
    turnCounter.innerHTML = `CONGRATULATIONS! Power has been restored to my ship. Saving the world today was down to YOU!`;
    on = false;
    win = true;
    let winning = document.getElementById("winningJingle");
    function playAudio() {
        if (win = true) {
            winning.play()
        }
    }
}




