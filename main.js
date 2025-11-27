let winLose = document.querySelector('div')

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
        winLose.textContent = 'You won!';
        winLose.style.color = 'green';
    } else if (human == 'scissors' && rob == 'paper') {
        winLose.textContent = 'You won!';
        winLose.style.color = 'green';
    }else if (human == 'paper' && rob == 'rock') {
        winLose.textContent = 'You won!';
        winLose.style.color = 'green';
    } else if (human === rob) {
        winLose.textContent = 'Its a tie!';
        winLose.style.color = 'black';
    } else {
        winLose.textContent = 'You lost...';
        winLose.style.color = 'red';
    }
}


let start = document.getElementById('start');
start.addEventListener('mousedown', game);
