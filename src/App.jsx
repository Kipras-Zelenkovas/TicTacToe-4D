import { useState } from "react";
import "./App.scss";
import { Board } from "./components/Board";

function App() {
    // GAME DEPTH - MORE DEPTH MORE GAMES IN EACH SQUARE
    const maxDepth = 2;

    // IF PLAYER IS CROSS - X
    const [cross, setCross] = useState(true);

    // PLAYED INDEX IN CHILD GAME
    const [childIndex, setChildIndex] = useState(undefined);

    return (
        <div className="main">
            <Board
                depth={maxDepth}
                maxDepth={maxDepth}
                globalCross={cross}
                setGlobalCross={setCross}
                childIndex={childIndex}
                setChildIndex={setChildIndex}
            />
        </div>
    );
}

export default App;
