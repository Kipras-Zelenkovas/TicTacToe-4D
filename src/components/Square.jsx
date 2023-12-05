import { checkPlayableGame } from "../utils/gameLogic";
import { Board } from "./Board";
import "./scss/Square.scss";

export const Square = ({
    item,
    depth,
    maxDepth,
    setPlayerMove,
    index = undefined,
    board = undefined,
    setBoard = undefined,
    globalCross = undefined,
    setGlobalCross = undefined,
    childIndex = undefined,
    setChildIndex = undefined,
    playableGame = undefined,
    parentBoard = undefined,
}) => {
    return (
        <div
            className={
                // Check if current games square can be square class
                // It's more for visual aspect, because on 2 depth it's not looking
                // good, on 3 depth, if there is no squares you can't differ
                // where is games and subgames
                item != 0 || depth - 1 == 0 || maxDepth > 2 ? "square" : ""
            }
            onClick={() => {
                if (playableGame) {
                    if (depth - 1 == 0) {
                        setPlayerMove();

                        // If game depth is not 1 check what next playable square is
                        if (maxDepth != 1) {
                            checkPlayableGame(
                                parentBoard,
                                index,
                                setChildIndex
                            );
                        }
                    }
                }
            }}
        >
            {
                // Check if in game board is item ( X or O ) if not
                // Check if depth-1 is not 0 then we make in each square SUB-GAME
                item != 0 ? (
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
                )
            }
        </div>
    );
};
