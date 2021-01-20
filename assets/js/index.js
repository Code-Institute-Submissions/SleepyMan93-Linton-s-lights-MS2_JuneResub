$("#start")

function game() {
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


