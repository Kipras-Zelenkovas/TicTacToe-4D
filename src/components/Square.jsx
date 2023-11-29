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
}) => {
    return (
        <div
            className="square"
            onClick={() => (depth - 1 == 0 ? handle() : false)}
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
                />
            ) : (
                ""
            )}
        </div>
    );
};
