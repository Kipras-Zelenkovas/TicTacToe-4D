import "./App.scss";
import { Board } from "./components/Board";

function App() {
    const maxDepth = 2;
    return (
        <div className="main">
            <Board depth={maxDepth} />
        </div>
    );
}

export default App;
