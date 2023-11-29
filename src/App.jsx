import { useState } from "react";
import "./App.scss";
import { Board } from "./components/Board";

function App() {
    const maxDepth = 2;
    const [cross, setCross] = useState(true);
    return (
        <div className="main">
            <Board
                depth={maxDepth}
                maxDepth={maxDepth}
                globalCross={cross}
                setGlobalCross={setCross}
            />
        </div>
    );
}

export default App;
