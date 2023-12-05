import { useEffect, useState } from "react";
import "./scss/Board.scss";
import { Square } from "./Square";
import {
    setMove,
    playableGames,
    makeSubWinner,
    makeWinnerMain,
    winnerCheck,
} from "../utils/gameLogic";

export const Board = ({
    depth, // Current board depth
    maxDepth, // Game depth
    globalCross,
    setGlobalCross,
    parentBoard = undefined, // Parent board if maxDepth is more than 1
    setParentBoard = undefined, // Parent board useState set function
    parentBoardIndex = undefined, // Parent board index
    childIndex = undefined, // SUB-GAME board index
    setChildIndex = undefined, // SUB-GAME board index useState set function
}) => {
    // Game board
    const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    // Checking if game is playable
    const playableGame = playableGames(childIndex, parentBoardIndex);

    useEffect(() => {
        setTimeout(() => {
            // Checking winner current game
            let winner = winnerCheck(board);

            if (depth < maxDepth) {
                // Checking winner in SUB-GAME if currentDepth is less than maxDepth
                makeSubWinner(
                    winner,
                    maxDepth,
                    depth,
                    parentBoardIndex,
                    parentBoard,
                    setParentBoard,
                    setChildIndex
                );
            }

            // If game depth is 1 then there is no SUB-GAMES and sets child to undefined
            // that let's to make move on any square
            if (maxDepth == 1) {
                setChildIndex(undefined);
            }

            // Checking if there is a winner in main game.
            makeWinnerMain(winner, maxDepth, depth);
        }, 100);
    }, board);

    return (
        <div
            className={
                "board" +
                // If game is playable and make game active or unactive
                (depth - 1 == 0 && maxDepth != 1
                    ? playableGame
                        ? " active"
                        : " unactive"
                    : "")
            }
        >
            {board.map((item, index) => {
                // Make callable function in each boar square that handles player move
                const setPlayerMove = () =>
                    setMove(
                        index,
                        board,
                        setBoard,
                        globalCross,
                        setGlobalCross
                    );

                return (
                    <Square
                        item={item}
                        depth={depth}
                        maxDepth={maxDepth}
                        setPlayerMove={setPlayerMove}
                        board={board}
                        setBoard={setBoard}
                        index={index}
                        globalCross={globalCross}
                        setGlobalCross={setGlobalCross}
                        childIndex={childIndex}
                        setChildIndex={setChildIndex}
                        playableGame={playableGame}
                        parentBoard={parentBoard}
                    />
                );
            })}
        </div>
    );
};
