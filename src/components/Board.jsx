import { useEffect, useState } from "react";
import "./scss/Board.scss";
import { Square } from "./Square";
import {
    handle,
    makeNextMove,
    makeSubWinner,
    makeWinnerMain,
    winnerCheck,
} from "../utils/gameLogic";

export const Board = ({
    depth,
    maxDepth,
    globalCross = undefined,
    setGlobalCross = undefined,
    parentBoard = undefined,
    setParentBoard = undefined,
    parentBoardIndex = undefined,
    childIndex = undefined,
    setChildIndex = undefined,
}) => {
    const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const active = makeNextMove(childIndex, parentBoardIndex);

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
                    setParentBoard,
                    setChildIndex
                );
            }

            if (maxDepth == 1) {
                setChildIndex(undefined);
            }

            makeWinnerMain(winner, maxDepth, depth);
        }, 100);
    }, board);

    return (
        <div className={"board" + (active ? " active" : " unactive")}>
            {board.map((item, index) => {
                const test = () =>
                    handle(index, board, setBoard, globalCross, setGlobalCross);

                return (
                    <Square
                        item={item}
                        depth={depth}
                        maxDepth={maxDepth}
                        handle={test}
                        board={board}
                        setBoard={setBoard}
                        index={index}
                        globalCross={globalCross}
                        setGlobalCross={setGlobalCross}
                        childIndex={childIndex}
                        setChildIndex={setChildIndex}
                        active={active}
                        parentBoard={parentBoard}
                    />
                );
            })}
        </div>
    );
};
