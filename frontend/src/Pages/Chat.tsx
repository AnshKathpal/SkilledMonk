import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import axios from "axios";

export const Chat = () => {
  const [displayText, setDisplayText] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(text, "text");
    if (displayText !== "") {
      if (text.trim() !== "") {
        setDisplayText(
          (prevText) => prevText + (prevText !== "" ? "\n" : "") + text
        );
        setText("");
      }
    } else {
    }
    axios
      .post("https://backend-deploy-production-c982.up.railway.app/chatbot/chat", {
        messages: [
          {
            role: "system",
            content: "Act as ChatGPT and answer all the questions.",
          },
          {
            role: "user",
            content: text,
          },
        ],
        // "messages": [
        //   {
        //     "role": "system",
        //     "content": "As a senior developer, you will be conducting an interview with tech students. Follow these rules for the interview process:\n\nAsk only conceptual questions from the given tech stacks list [React, Nodejs, Java] to the user.\nOnce the interview starts, begin by asking a question related to the chosen tech stack. There is no need to ask the user to choose a tech stack again for subsequent questions.\nFocus solely on concepts and do not inquire about work experience during the interview.\nPresent one question at a time, and refrain from repeating any previously asked questions.\nDo not provide a list of questions to the user all at once.\nAfter the user provides an answer, proceed with the next question without asking them to select a tech stack again.\nContinue this question-answer process until the interview is stopped by me.\nWhen I ask you for feedback, rate the user's interview responses on a scale from 0 to 10."
        //   },
        //   {
        //     "role": "user",
        //     "content": ""
        //   }
        // ]
      })
      .then((res) => {
        // setDisplayText(res.data)
        console.log(res.data);
        if (text.trim() !== "") {
          //  setIsLoading(false)
          setDisplayText(
            (prevText) => prevText + (prevText !== "" ? "\n" : "") + res.data
          );
          setText("");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getKey();
  }, []);

  const getKey = () => {
    axios
      .get("https://backend-deploy-production-c982.up.railway.app/chatbot/getkey/6")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //
  };

  return (
    <>
      <div style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }} className="text-5xl m-6 p-3">
        <p>Ask your Doubts from our ChatBot</p>
        <p className="text-2xl m-2 p-2">Feel free to ask anything...</p>
      </div>
      <div
        className=" m-auto text-3xl text-left p-6"
        style={{
          width: "80%",
          height: "55vh",
          background: "linear-gradient(to right, #6c6b6b 0%, black 100%)",
          color: "white",
          overflowY: "scroll",
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
        {displayText}
      </div>

      <div
        className="m-auto flex justify-evenly items-center"
        style={{ width: "80%" }}
      >
        <input
          type="text"
          placeholder="Enter Text Here..."
          style={{ width: "60%" }}
          className="border border-solid border-gray-500 m-6 text-2xl p-6 rounded-2xl"
          value={text}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className=" mt-3 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-800 text-lg font-bold text-white"
        >
          Send
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </div>
    </>
  );
};
