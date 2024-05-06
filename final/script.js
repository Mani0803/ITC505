let gameBoard = document.getElementById('game-board');

function generatePuzzle() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let square = gameBoard.rows[i].cells[j];
            square.addEventListener('click', () => {
                toggleCellAndAdjacent(i, j);
                if (isSolved()) {
                    window.alert('Congratulations! You solved the puzzle!');
                }
            });
            if (Math.random() < 0.5) {
                square.classList.add('lit');
            }
        }
    }
}

function toggleCellAndAdjacent(row, col) {
    let affectedSquares = [
        [row, col], [row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]
    ];
    affectedSquares.forEach(coords => {
        let [r, c] = coords;
        if (r >= 0 && r < 5 && c >= 0 && c < 5) {
            let affectedSquare = gameBoard.rows[r].cells[c];
            affectedSquare.classList.toggle('lit');
        }
    });
}

function isSolved() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let square = gameBoard.rows[i].cells[j];
            if (!square.classList.contains('lit')) {
                return false;
            }
        }
    }
    return true;
}

generatePuzzle();

