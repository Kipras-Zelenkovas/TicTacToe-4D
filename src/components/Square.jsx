import { setNextSquare } from "../utils/gameLogic";
import { Board } from "./Board";
import "./scss/Square.scss";

export const Square = ({
    item,
    depth,
    maxDepth,
    handle,
    index = undefined,
    board = undefined,
    setBoard = undefined,
    globalCross = undefined,
    setGlobalCross = undefined,
    childIndex = undefined,
    setChildIndex = undefined,
    active = undefined,
    parentBoard = undefined,
}) => {
    return (
        <div
            className={
                item != 0 || depth - 1 == 0 || maxDepth > 2 ? "square" : ""
            }
            onClick={() => {
                if (active) {
                    if (depth - 1 == 0) {
                        handle();
                        maxDepth != 1
                            ? setNextSquare(
                                  parentBoard,
                                  childIndex,
                                  index,
                                  setChildIndex
                              )
                            : false;
                    }
                }
            }}
        >
            {item != 0 ? (
                item
            ) : depth - 1 != 0 ? (
                <Board
                    depth={depth - 1}
                    maxDepth={maxDepth}
                    parentBoardIndex={index}
                    parentBoard={board}
                    setParentBoard={setBoard}
                    globalCross={globalCross}
                    setGlobalCross={setGlobalCross}
                    childIndex={childIndex}
                    setChildIndex={setChildIndex}
                />
            ) : (
                ""
            )}
        </div>
    );
};
