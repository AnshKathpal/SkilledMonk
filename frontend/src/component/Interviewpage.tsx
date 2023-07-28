import React, { useState, ChangeEvent, MouseEvent } from "react";

const Interviewpage = () => {
    const [text, setText] = useState<string>("");
    const [displayText, setDisplayText] = useState<string>("");
    // const [start, setstart] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        if (displayText !== "") {
            if (text.trim() !== "") {
                setDisplayText((prevText) => prevText + (prevText !== "" ? "\n" : "") + text);
                setText("");
            }
        } else {
            alert("The interview has not yet started")
        }

    };

    const clear = (event: MouseEvent<HTMLButtonElement>) => {

        setDisplayText("");
        alert("Interview Ended")

    };


    // const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    // const API_KEY = 'YOUR_OPENAI_API_KEY';


    // useEffect(() => {
    //     startinterview()
    // }, [])


    const startinterview = async () => {
        try {
            const response = await fetch("https://reqres.in/api/users", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Authorization: `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: displayText }],
                }),
            });
            const data = await response.json();
            console.log(data.data[0].email)
            let data1 = data.data[0].email
            setDisplayText(data1);
            // setstart(data1)
        }
        catch (error) {
            console.error('Error:', error);

        }
    };

    const handlestart = () => {
        startinterview()
    }



    // background-image: "linearGradient(to right, #434343 0%, black 100%)""


    return (
        <div style={{ width: "80%" }} className="mt-10 mb-16">
            <div style={{
                background: "linear-gradient(to right, #434343 0%, black 100%)"

            }} className="ml-5 pt-3 text-xl font-extrabold mt-3 mb-3 rounded-md pl-10 text-white">
                <pre style={{ height: "400px", lineHeight: "35px", wordWrap: "break-word", whiteSpace: "pre-wrap" }}>{displayText}</pre>
            </div>
            <div>
                {
                    displayText === "" ? null :

                        <input
                            style={{ width: "80%" }}
                            type="text"
                            value={text}
                            className="border-4 border-black-500 px-8  ml-5 py-6 rounded-md font-bold text-2xl"
                            placeholder="Enter answer here"
                            onChange={handleChange}
                        />

                }
                <div className="flex flex-wrap">
                    <button style={{ backgroundImage: displayText === "" ? "linear-gradient(120deg, #f6d365 0%, #fda085 100%)" : "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)" }}
                        onClick={handlestart}
                        disabled={displayText !== "" ? true : false}
                        className="  text-black font-bold px-16 py-3 mt-3 ml-10 rounded"
                    >
                        {displayText === "" ? "START INTERVIEW" : "INTERVIEW IN PROGRESS....."}
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-green-600 text-white font-semibold px-16 py-3 mt-3 ml-10 rounded"
                    >
                        SUBMIT
                    </button>
                    {
                        displayText === "" ? null :

                            <button
                                onClick={clear}
                                className="bg-red-500 hover:bg-blue-950 text-white font-semibold px-16 py-3 mt-3 mx-3 ml-10 rounded"
                            >
                                END INTERVIEW
                            </button>

                    }
                </div>
            </div>
        </div>
    );
};

export default Interviewpage;
