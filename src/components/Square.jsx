import { Board } from "./Board";
import "./scss/Square.scss";

export const Square = ({ item, depth, handle }) => {
    return (
        <div className="square" onClick={() => handle()}>
            {item != 0 ? (
                item
            ) : depth - 1 != 0 ? (
                <Board depth={depth - 1} />
            ) : (
                ""
            )}
        </div>
    );
};
