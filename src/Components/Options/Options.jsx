import "./Options.css";

const Options = () => {
    const name = localStorage.getItem("name");


    return (
        <div className="options">
            <div className="options_container">
                <h2 className="options_name">
                    {name}
                </h2>
                <div className="options_btn-container">
                    <button type="submit" className="options_btn">Play</button>
                </div>
                <div className="options_btn-container">
                    <button type="submit" className="options_btn">Options</button>
                </div>
                <div>
                    <p>high score</p>
                </div>
            </div>
        </div>
    )
};

export default Options;