import { useEffect, useState } from "react";
import "./scss/Board.scss";
import { Square } from "./Square";
import { winnerCheck } from "../utils/gameLogic";

export const Board = () => {
    const [mainBoard, setMainBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [cross, setCross] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            let winner = winnerCheck(mainBoard);

            if (winner != false) {
                alert("Winned is: " + winner);
            }
        }, 100);
    }, mainBoard);

    const handle = (i) => {
        let newBoard = [...mainBoard];
        if (mainBoard[i] == 0) {
            cross == true ? (newBoard[i] = "X") : (newBoard[i] = "O");
            setMainBoard(newBoard);
            setCross(!cross);
        } else {
            alert("Square is already occupied!");
        }
    };

    return (
        <div className="board">
            {mainBoard.map((item, index) => {
                return <Square handle={handle} item={item} index={index} />;
            })}
        </div>
    );
};
