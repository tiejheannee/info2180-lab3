document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const status = document.getElementById("status");
    const squares = board.getElementsByTagName("div");
    const newGameBtn = document.querySelector(".btn"); // New Game button
    const originalStatus = "Move your mouse over a square and click to play an X or an O.";

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }

    let currentPlayer = "X";                   // Current player
    let gameState = Array(9).fill(null);       // Board state

    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8], // rows
        [0,3,6],[1,4,7],[2,5,8], // columns
        [0,4,8],[2,4,6]          // diagonals
    ];

    function checkWinner() {
        for (let combo of winningCombos) {
            const [a,b,c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                status.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                status.classList.add("you-won");
                return gameState[a]; // Return winner
            }
        }
        return null; // No winner yet
    }

    for (let i = 0; i < squares.length; i++) {
        const square = squares[i];

        square.addEventListener("click", function () {
            // Only allow if square is empty and game is not won
            if (!gameState[i] && !status.classList.contains("you-won")) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[i] = currentPlayer;

                if (!checkWinner()) {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });

        // Hover effect
        square.addEventListener("mouseenter", function () {
            if (!gameState[i]) square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover");
        });
    }

    newGameBtn.addEventListener("click", function () {
        // Clear all squares
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = "";
            squares[i].classList.remove("X", "O", "hover");
        }

        // Reset game state and current player
        gameState = Array(9).fill(null);
        currentPlayer = "X";

        // Reset status message
        status.textContent = originalStatus;
        status.classList.remove("you-won");
    });
});

