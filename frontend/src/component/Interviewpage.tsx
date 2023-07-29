import axios from "axios";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Interviewpage = () => {



    const [text, setText] = useState<string>("");
    const [displayText, setDisplayText] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false)
    // const [start, setstart] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(text,"text")
        if (displayText !== "") {
            if (text.trim() !== "") {
                setDisplayText((prevText) => prevText + (prevText !== "" ? "\n" : "") + text);
                setText("");
            }
        } else {
            // alert("The interview has not yet started")
           toast.error('The interview has not yet started!', {
                position: "top-center",
                autoClose: 1000,
                transition:Zoom,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

        //     })
        setIsLoading(true)
        axios.post("https://tyaaribackend-production.up.railway.app/chatbot/chat", {   "messages": [
            {
              "role": "system",
              "content": "Act as a senior developer, you will be taking an interview of tech students.\n\nFollow these rules:\n1. Ask only conceptual questions from the given tech stacks list [React, Nodejs, Java] to the user.\n2. First ask the user to choose one of the tech stacks from the given list and then ask a question related to that stack.\n3. Don't ask questions about work experience, only ask about concepts.\n4. You need to ask one question one by one.\n5. Don't ask any question that has already been asked.\n6. Don't give a list of questions to the user. \n7 Don't ask user the to choose the tech stacks again and again only ask him once at begning"
            }, 
            {
              "role": "user",
              "content": text
            }
            ] }).then((res) => {
            // setDisplayText(res.data)
            console.log(res.data)
            if (text.trim() !== "") {
                //  setIsLoading(false)
                setDisplayText((prevText) => prevText + (prevText !== "" ? "\n" : "") +res.data);
                setText("");
            }
            console.log(res)
        })
            .catch((err) => {
                console.log(err)
            })

    };

    const clear = (event: MouseEvent<HTMLButtonElement>) => {

        setDisplayText("");
        // alert("Interview Ended")
       toast.success('Interview Ended', {
            position: "top-center",
            autoClose: 500,
            transition:Zoom,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setIsLoading(false)

    };


    useEffect(()=>{

        getKey ()

    },[])


     const getKey= ()=>{


        // try {
        //     // Fetch the response from the OpenAI API with the signal from AbortController
        //     const response = await fetch("https://tyaaribackend-production.up.railway.app/chatbot/getkey/1", {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json",
        //             // Authorization: `Bearer ${API_KEY}`,
        //         }
        //     });


        //     const data = await response.json();
        //     console.log(data)
        //     // resultText.innerText = data.choices[0].message.content;
        // } catch (error) {
        //     console.error("Error:", error);
        //     // resultText.innerText = "Error occurred while generating.";
        // }


        axios.get("https://tyaaribackend-production.up.railway.app/chatbot/getkey/1").then((res) => {
            // setIsLoading(false)
            // toast.success('Interview Started', {
            //     position: "top-center",
            //     autoClose: 1000,
            //     transition:Zoom,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            // });
            // setDisplayText(res.data)
            console.log(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
        //


     }


    // const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    // const API_KEY = 'YOUR_OPENAI_API_KEY';


    // useEffect(() => {
    //     startinterview()
    // }, [])


    const startinterview = () => {
        // setIsLoading(true)
        // try {
        //   fetch("https://digitron-backend.onrender.com/chat/interviewChat", {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             // model: 'gpt-3.5-turbo',
        //             // messages: [{ role: 'user', content: displayText }],
        //             "msg":"Hi"
        //         }),
        //     })

    let obj =
    {
        "messages": [
          {
            "role": "system",
            "content": "Act as a senior developer, you will be taking an interview of tech students.\n\nFollow these rules:\n1. Ask only conceptual questions from the given tech stacks list [React, Nodejs, Java] to the user.\n2. First ask the user to choose one of the tech stacks from the given list and then ask a question related to that stack.\n3. Don't ask questions about work experience, only ask about concepts.\n4. You need to ask one question one by one.\n5. Don't ask any question that has already been asked.\n6. Don't give a list of questions to the user. \n7 once the interview has started dont ask to choose for the tach stack untill and unless the interview has ended"
          }, 
          {
            "role": "user",
            "content": ""
          }
          ]
      }


        axios.post("https://tyaaribackend-production.up.railway.app/chatbot/chat", obj).then((res) => {

            // setIsLoading(false)
            // toast.success('Interview Started', {
            //     position: "top-center",
            //     autoClose: 1000,
            //     transition:Zoom,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            // });
            // setDisplayText(res.data)
            console.log(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
        // .then((response)=>{
        //     if (!response.ok) {
        //         throw new Error("Network response was not ok.");
        //     }
        //     return response.json();
        // })
        // .then((data)=>{
        //     console.log(data)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })

        // }
        // catch (error) {
        //     console.error('Error:', error);

        // }
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
                <pre style={{ height: "450px", overflowY: "scroll", lineHeight: "35px", wordWrap: "break-word", whiteSpace: "pre-wrap" }}>{isLoading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>  <img width={"200px"} src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_medium.gif" alt="" /></div> : displayText}</pre>
            </div>
            <div>
            

                        <input
                            style={{ width: "80%" }}
                            type="text"
                            value={text}
                            className="border-4 border-black-500 px-8  ml-5 py-6 rounded-md font-bold text-2xl"
                            placeholder="Enter answer here"
                            onChange={handleChange}
                        />

           
                <div className="flex flex-wrap">
                    <button style={{ position: "relative", backgroundImage: displayText === "" ? "linear-gradient(120deg, #f6d365 0%, #fda085 100%)" : "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)" }}
                        onClick={startinterview}
                        disabled={displayText !== "" ? true : false}
                        className="  text-black font-bold px-16 py-3 mt-3 ml-10 rounded"
                    >
                       START INTERVIEW
                        {displayText !== "" && <img style={{ width: "50px", mixBlendMode: "multiply", position: "absolute", top: "12px", right: "12px" }} src="http://cdn.lowgif.com/full/ffda60e00be16a45-animated-progress-bar-gif-free-download-www-imgkid-com.gif" />}
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
            {/* <button onClick={notify}>Notify</button> */}
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
