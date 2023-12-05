// Board winner check
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

// Set either ( X or O ) on board
export const setMove = (index, board, setBoard, cross, setCross) => {
    // Copy board
    let newBoard = [...board];

    // Check if board is empty
    if (board[index] == 0) {
        cross == true ? (newBoard[index] = "X") : (newBoard[index] = "O");
        setBoard(newBoard);
        setCross(!cross);
    } else {
        alert("Square is already occupied!");
    }
};

// Checks if game ( SUB-GAME ) is playable and sets child game index to clicked square index or undefined
export const checkPlayableGame = (parentBoard, index, setChildIndex) => {
    parentBoard[index] == 0 ? setChildIndex(index) : setChildIndex(undefined);
};

// Checks if game ( SUB-Game ) is playable
export const playableGames = (childIndex, parentIndex) => {
    return childIndex == undefined || childIndex == parentIndex ? true : false;
};

// Makes winner in sub game ( changes parent boards value to game winners value )
export const makeSubWinner = (
    winner,
    maxDepth,
    currentDepth,
    parentIndex,
    parentBoard,
    setParentBoard,
    setChildIndex
) => {
    if (winner != false && maxDepth > currentDepth) {
        let newBoard = [...parentBoard];
        newBoard[parentIndex] = winner;
        setParentBoard(newBoard);
        setChildIndex(undefined);
    }
};

// Makes winned of main game
export const makeWinnerMain = (winner, maxDepth, currentDepth) => {
    if (winner != false && maxDepth == currentDepth) {
        alert("Winner of the game is: " + winner);
    }
};
