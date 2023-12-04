import { Board } from "./Board";
import "./scss/Square.scss";

export const Square = ({
    item,
    depth,
    maxDepth,
    handle,
    index = undefined,
    parentBoard = undefined,
    setParentBoard = undefined,
    globalCross = undefined,
    setGlobalCross = undefined,
    childIndex = undefined,
    setChildIndex = undefined,
    active = undefined,
}) => {
    return (
        <div
            className="square"
            onClick={() =>
                active ? (depth - 1 == 0 ? handle() : false) : false
            }
        >
            {item != 0 ? (
                item
            ) : depth - 1 != 0 ? (
                <Board
                    depth={depth - 1}
                    maxDepth={maxDepth}
                    parentBoardIndex={index}
                    parentBoard={parentBoard}
                    setParentBoard={setParentBoard}
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
