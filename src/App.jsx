import { useState } from "react";
import "./App.scss";
import { Board } from "./components/Board";

function App() {
    const maxDepth = 2;
    const [cross, setCross] = useState(true);
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
