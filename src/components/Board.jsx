import { useEffect, useState } from "react";
import "./scss/Board.scss";
import { Square } from "./Square";
import {
    handle,
    makeSubWinner,
    makeWinnerMain,
    winnerCheck,
} from "../utils/gameLogic";

export const Board = ({
    depth,
    maxDepth,
    parentBoard = undefined,
    setParentBoard = undefined,
    parentBoardIndex = undefined,
}) => {
    const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [cross, setCross] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            let winner = winnerCheck(board);

            if (depth < maxDepth) {
                makeSubWinner(
                    winner,
                    maxDepth,
                    depth,
                    parentBoardIndex,
                    parentBoard,
                    setParentBoard
                );
            }

            makeWinnerMain(winner, maxDepth, depth);
        }, 100);
    }, board);

    return (
        <div className="board">
            {board.map((item, index) => {
                const test = () =>
                    handle(index, board, setBoard, cross, setCross);

                return (
                    <Square
                        item={item}
                        depth={depth}
                        maxDepth={maxDepth}
                        handle={test}
                        parentBoard={board}
                        setParentBoard={setBoard}
                        index={index}
                    />
                );
            })}
        </div>
    );
};
