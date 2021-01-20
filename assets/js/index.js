let win;
let on = false;
let intervalId;

const startButton = document.getElementById('start');
const turnCounter = document.getElementById('turn');

startButton.addEventListener('click', (event) => {
    if (startButton.checked == true) {
        on == true;
        turnCounter.innerHTML = "-";
        play ();
    } else {
        on == false;
        turnCounter.innerHTML = "";
        clearInterval(intervalId);
    }
});


function play() {
    let win = false;
    let order = []
        for (var i = 0; i < 20; i++) {
            order.push(Math.floor(Math.random() * 5) + 1);
        }
        console.log(order);
    let playerOrder = [];
    let flash = 0;
    let intervalId = 0;
    let turn = 1;
    const turnCounter = document.querySelector("#turn")
        turnCounter.innerHTML = 1;
    let compTurn = true;


    
}


