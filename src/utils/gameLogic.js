export const winnerCheck = (board) => {
    if (
        (board[0] == "X" && board[1] == "X" && board[2] == "X") ||
        (board[3] == "X" && board[4] == "X" && board[5] == "X") ||
        (board[6] == "X" && board[7] == "X" && board[8] == "X") ||
        (board[0] == "X" && board[4] == "X" && board[8] == "X") ||
        (board[2] == "X" && board[4] == "X" && board[6] == "X") ||
        (board[0] == "X" && board[3] == "X" && board[6] == "X") ||
        (board[1] == "X" && board[4] == "X" && board[7] == "X") ||
        (board[2] == "X" && board[5] == "X" && board[8] == "X")
    ) {
        return "X";
    } else if (
        (board[0] == "O" && board[1] == "O" && board[2] == "O") ||
        (board[3] == "O" && board[4] == "O" && board[5] == "O") ||
        (board[6] == "O" && board[7] == "O" && board[8] == "O") ||
        (board[0] == "O" && board[4] == "O" && board[8] == "O") ||
        (board[2] == "O" && board[4] == "O" && board[6] == "O") ||
        (board[0] == "O" && board[3] == "O" && board[6] == "O") ||
        (board[1] == "O" && board[4] == "O" && board[7] == "O") ||
        (board[2] == "O" && board[5] == "O" && board[8] == "O")
    ) {
        return "O";
    } else {
        return false;
    }
};

export const handle = (i, board, setBoard, cross, setCross) => {
    let newBoard = [...board];
    if (board[i] == 0) {
        cross == true ? (newBoard[i] = "X") : (newBoard[i] = "O");
        setBoard(newBoard);
        setCross(!cross);
    } else {
        alert("Square is already occupied!");
    }
};

export const makeSubWinner = (
    winner,
    maxDepth,
    currentDepth,
    parentIndex,
    parentBoard,
    setParentBoard
) => {
    if (winner != false && maxDepth > currentDepth) {
        let newBoard = [...parentBoard];
        newBoard[parentIndex] = winner;
        setParentBoard(newBoard);
    }
};

export const makeWinnerMain = (winner, maxDepth, currentDepth) => {
    if (winner != false && maxDepth == currentDepth) {
        alert("Winner of the game is: " + winner);
    }
};
