import axios from "axios";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Interviewpage = () => {


    const [text, setText] = useState<string>("");
    const [displayText, setDisplayText] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false)


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };


    const submitanswer = () => {
        console.log("hello")
        try {
            axios.post("https://backend-deploy-production-c982.up.railway.app/chatbot/chat", {


                "messages": [
                    {
                        "role": "system",

                        "content": "After the techstack is chosen then ask questios related to that tech stack  and questions should be subjective type and not an optional type if the answer is correct proceed to next question and if the answer is wrong tell it is wrong and then proceed to next question"


                    },

                    {
                        "role": "user",
                        "content": text
                    }
                ]
            }).then((res) => {

                if (text.trim() !== "") {
                    setIsLoading(false)
                    setDisplayText((prevText) => prevText + (prevText !== "" ? "\n" : "") + res.data);
                    setText("");
                }
            })
                .catch((err) => {
                    console.log(err)
                })

        } catch (error) {
            console.log(error)
        }
    }



    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        // console.log(text, "text")
        if (displayText !== "") {
            if (text.trim() !== "") {
                setDisplayText((prevText) => prevText + (prevText !== "" ? "\n" : "") + text);
                setIsLoading(true)
                setText("");
                submitanswer()
            }
        } else {
            toast.warn('The interview has not yet started!', {
                position: "top-center",
                autoClose: 1000,
                transition: Zoom,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };



    const clear = (event: MouseEvent<HTMLButtonElement>) => {

        setDisplayText("");

        toast.success('Interview Ended', {
            position: "top-center",
            autoClose: 500,
            transition: Zoom,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        setIsLoading(false)
    };





    useEffect(() => {
        getKey()

    }, [])
    


    const getKey = async () => {

        try {
            let response = await axios.get("https://backend-deploy-production-c982.up.railway.app/chatbot/getkey/6")
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    // const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    // const API_KEY = 'YOUR_OPENAI_API_KEY';


    const startinterview = () => {
        // https://digitron-backend.onrender.com/chat/interviewChat
        setIsLoading(true)

        let obj =
        {

            "messages": [
                {
                    "role": "system",
                    "content": "I want you to act as a senior developer interviewer. At the beginning of the interview, ask me to select the tech stack [React, Java, Node]. You should ask only once to choose the tech stack. Take my technical interview for the chosen tech stack and share your feedback.Ask one question at a time..You will stop the interview when I tell you to stop using the phrase “stop the interview”.Afterward, provide me feedback when I ask you using the phrase, “share your feedback”.The feedback should be evaluated using the following rubrics:Subject Matter Expertise, Communication skills, Hiring criteria:Options are Reject, Waitlist, Hire, and Strong Hire,Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10."
                },
                {
                    "role": "user",
                    "content": ""
                }

            ]


        }


        try {
            axios.post("https://backend-deploy-production-c982.up.railway.app/chatbot/chat", obj).then((res) => {

                setIsLoading(false)
                toast.success('Interview Started', {
                    position: "top-center",
                    autoClose: 1000,
                    transition: Zoom,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setDisplayText(res.data)
                console.log(res.data)
                setDisplayText(res.data)
            })
                .catch((err) => {
                    console.log(err)
                })

        }
        catch (error) {
            console.log(error)
        }

    };





    return (
        <div style={{ width: "90%", margin: "auto", marginBottom: "50px", marginTop:"30px" }} className="mt-10 mb-16">
            <div style={{
                background: "linear-gradient(to right, #434343 0%, black 100%)"

            }} className="ml-5 pt-3 text-xl font-extrabold mt-3 mb-3 rounded-md pl-10 text-white">
                <pre style={{ height: "500px", overflowY: "scroll", lineHeight: "35px", wordWrap: "break-word", whiteSpace: "pre-wrap", textAlign:"left" }}>{isLoading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>  <img width={"200px"} src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_medium.gif" alt="" /></div> : displayText}</pre>
            </div>
            <div>
                {
                    displayText === "" ? null :


                        <input
                            style={{ width: "97%" }}
                            type="text"
                            value={text}
                            className="border-4 border-black-500 px-8  py-6 rounded-md font-semibold text-xl"
                            placeholder="Enter answer here"
                            onChange={handleChange}
                        />
                }
                <div className="flex flex-wrap">
                    <button style={{ position: "relative", backgroundImage: displayText === "" ?"linear-gradient(to right, #434343 0%, black 100%)" : "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)" }}
                        onClick={startinterview}
                        disabled={displayText !== "" ? true : false}
                        className="  text-white font-bold px-16 py-3 mt-3 ml-5 rounded"
                    >
                        {displayText === "" ? "START INTERVIEW" : "IN PROGRESS"}
                        {displayText !== "" && <img style={{ width: "50px", mixBlendMode: "multiply", position: "absolute", top: "12px", right: "12px" }} src="http://cdn.lowgif.com/full/ffda60e00be16a45-animated-progress-bar-gif-free-download-www-imgkid-com.gif" alt="progress_img" />}
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-800 hover:bg-green-600 text-white font-semibold px-16 py-3 mt-3 ml-10 rounded"
                    >
                        SUBMIT
                    </button>
                    {
                        displayText === "" ? null :

                            <button
                                onClick={clear}
                                className="bg-red-600 hover:bg-red-200  text-black font-bold px-16 py-3 mt-3 mx-3 ml-10 rounded"
                            >
                                END INTERVIEW
                            </button>
                    }
                </div>
            </div>
            <ToastContainer position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </div>
    );
};

export default Interviewpage;
