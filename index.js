var count = 3;

const verifyGuess = () => {
    let playerOne = document.getElementById('actual-value').value;
    let playerTwo = document.getElementById('guess-value').value;
    let outputField = document.getElementById('output-field').innerHTML;

    if (playerOne === playerTwo) {
        document.getElementById('output-field').innerHTML = 'CORRECT!! perfect guess';
        document.getElementById('output-field').style.color ='green';
    } else { 
        document.getElementById('output-field').innerHTML = `WRONG!... try again ${count--}x`;  
        document.getElementById('output-field').style.color ='red';
    }
    if (count <= -1) {
        document.getElementById('output-field').innerHTML = 'GAME OVER!'; 
    }
    if (playerOne > 10) {
        document.getElementById('output-field').innerHTML = 'Player 1: your Number must be 10 or less';
    }
    if (outputField === 'CORRECT!! perfect guess') {
        document.getElementById('actual-value').value = null;
        document.getElementById('guess-value').value = null;    
    }
    if (playerOne === '' || playerTwo === '') {
        document.getElementById('output-field').innerHTML = 'Empty field! Input values';
        document.getElementById('output-field').style.color ='red';
    }
    if (isNaN(playerOne) || isNaN(playerTwo)) {
        document.getElementById('output-field').innerHTML = 'Values must be numbers';
    }                
}

const resetGame = () => {
        location.reload();
}
