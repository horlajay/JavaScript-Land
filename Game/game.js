//Clear the Board
var reset = document.querySelector('#btn');
function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent === '';
        
    }
}
reset.addEventListener('click', clearBoard);

// Perform The Function
var squares = document.querySelectorAll('td')

function changeMaker() {
    for (let i = 0; i < squares.length; i++) {
        squares[i];
        if (this.textContent = '') {
            this.textContent === 'X';
        }else if (this.textContent = 'X') {
            this.textContent === "O";
        }else {
            this.textContent === ''
        }
    }
}

squares.addEventListener('click', changeMaker)