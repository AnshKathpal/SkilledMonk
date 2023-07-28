import React, { useState, ChangeEvent, MouseEvent } from "react";

const Interviewpage = () => {
    const [text, setText] = useState<string>("");
    const [displayText, setDisplayText] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        if (text.trim() !== "") {
            setDisplayText((prevText) => prevText + (prevText !== "" ? "\n" : "") + text);
            setText("");
        }
    };

    const clear = (event: MouseEvent<HTMLButtonElement>) => {
        setDisplayText("");
    };

    return (
        <div className="w-2/3">
            <div className="ml-5 pt-3 text-xl font-bold mt-3 mb-3 bg-slate-600 rounded-md pl-4 text-yellow-300">
                <pre style={{ height: "400px" }}>{displayText}</pre>
            </div>
            <div>
                <input
                    type="text"
                    value={text}
                    className="border-4 border-black-500 px-8 w-2/3 ml-5 py-6 rounded-md font-bold text-2xl"
                    placeholder="Enter answer here"
                    onChange={handleChange}
                />
                <div className="flex justify-between flex-wrap w-2/3">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-green-600 text-white font-semibold px-16 py-3 mt-3 ml-10 rounded"
                    >
                        SUBMIT
                    </button>
                    <button
                        onClick={clear}
                        className="bg-gray-400 hover:bg-blue-950 text-white font-semibold px-16 py-3 mt-3 mx-3 ml-10 rounded"
                    >
                        CLEAR
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Interviewpage;
