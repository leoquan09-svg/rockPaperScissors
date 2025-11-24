let getRob = () => {
    let rand = Math.floor(Math.random() * 3);
    let robot = ''
    if (rand === 0) {
        robot = 'rock';
    } else if (rand === 1) {
        robot = 'paper';
    } else {
        robot = 'scissors';
    }
    return robot;
}

let game = () => {
    let human = prompt('Rock, paper, or scissors: ');
    let rob = getRob();

    //determine winner
    if (human == 'rock' && rob == 'scissors') {
        console.log('You won!');
    } else if (human == 'scissors' && rob == 'paper') {
        console.log('Player 1 won!');
    }else if (human == 'paper' && rob == 'rock') {
        console.log('You won!');
    } else if (human === rob) {
        console.log('Its a tie!');
    } else {
        console.log('You lost...');
    }
}


let start = document.getElementById('start');
start.addEventListener('mousedown', game);
