// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const squares = board.getElementsByTagName("div");

    // Step 1: Add square class to each div
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }

    // Step 2: Game state
    let currentPlayer = "X"; // Start with X
    let gameState = Array(9).fill(null); // Track the board (9 squares)

    // Step 3: Add click event to each square
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            // Only allow clicking if square is empty
            if (!gameState[i]) {
                // Update the square text
                squares[i].textContent = currentPlayer;

                // Add the class X or O for styling
                squares[i].classList.add(currentPlayer);

                // Update game state
                gameState[i] = currentPlayer;

                // Switch players
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    }
});
