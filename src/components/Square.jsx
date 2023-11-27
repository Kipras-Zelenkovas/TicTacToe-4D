import "./scss/Square.scss";

export const Square = ({ handle, item, index }) => {
    return (
        <div className="square" onClick={() => handle(index)}>
            <h1>{item != 0 ? item : ""}</h1>
        </div>
    );
};
