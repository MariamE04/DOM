const cells = document.querySelectorAll('.t1'); // henter alle felter (divs med class .t1)
const status = document.getElementById('status'); // henter status-beskeden
const restartBtn = document.getElementById('restart'); // henter restart-knappen

let board = ["", "", "", "", "", "", "", "", ""]; // holder X og O for hvert felt. Index 0-8 matcher felterne.
let playerTurn = true; // skifter tur mellem X og O.
let gameOver = false; // stopper yderligere klik, når spillet er slut.

    function handleCellClick(event) {
    if (gameOver) return; // stopper klik hvis spillet er slut

    const cell = event.target;           // selve den div, man klikkede på
    const index = cell.dataset.index;    // henter index (0-8) fra HTML data-attribut

    if (board[index] !== "") return; // spring over, hvis feltet allerede er fyldt

    board[index] = playerTurn ? "X" : "O"; // sæt X eller O i arrayet
    cell.innerText = board[index];        // sæt X eller O i selve feltet


    // tjek vinder
    if (checkWinner()) {
        status.innerText = (playerTurn ? "X" : "O") + " vinder!"; // skriver beskeden i status-div’en.
        gameOver = true;
        return;
    }

    // tjek uafgjort
    if (!board.includes("")) {
        status.innerText = "Uafgjort!";
        gameOver = true;
        return;
    }

    // skift tur
    playerTurn = !playerTurn; // skifter fra true → false eller false → true.
    status.innerText = playerTurn ? "X's tur" : "O's tur"; // opdaterer beskeden for næste spiller.
}

// tjek for vinder
function checkWinner() {
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    for (let combo of winCombos) {
        const [a,b,c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) { 
            return true;
        }
    }
    return false;
}

// restart spillet
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.innerText = ""); //  ryd alle felter
    playerTurn = true; 
    gameOver = false;
    status.innerText = "X's tur";
}

// bind event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);




//querySelectorAll giver en liste af alle felterne, som vi senere kan loop’e igennem.
//getElementById henter et enkelt element.

// board[a] && board[a] === board[b] && board[a] === board[c] betyder:

// board[a] → feltet er ikke tomt

// board[a] === board[b] → alle tre felter har samme X eller O

// board[a] === board[c] → alle tre felter er ens

// Hvis alle tre er sande → vinder fundet → return true.