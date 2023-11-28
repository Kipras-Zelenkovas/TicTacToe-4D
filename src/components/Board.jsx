import { useEffect, useState } from "react";
import "./scss/Board.scss";
import { Square } from "./Square";
import { handle, winnerCheck } from "../utils/gameLogic";

export const Board = ({ depth }) => {
    const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [cross, setCross] = useState(true);

    const currentDepth = depth;

    useEffect(() => {
        setTimeout(() => {
            let winner = winnerCheck(board);

            if (winner != false) {
                alert("Winned is: " + winner);
            }
        }, 100);
    }, board);

    return (
        <div className="board">
            {board.map((item, index) => {
                return (
                    <Square
                        item={item}
                        index={index}
                        depth={currentDepth}
                        handle={handle(index, board)}
                    />
                );
            })}
        </div>
    );
};
