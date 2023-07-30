import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import axios from "axios";

export const Chat = () => {
  const [displayText, setDisplayText] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(text, "text");
    if (displayText !== "") {
      if (text.trim() !== "") {
        setIsLoading(false);
        setDisplayText(
          (prevText) => prevText + (prevText !== "" ? "\n" : "") + text
        );
        setText("");
      }
    } else {
    }
    axios
      .post(
        "https://backend-deploy-production-c982.up.railway.app/chatbot/chat",
        {
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
        }
      )
      .then((res) => {
        // setDisplayText(res.data)
        console.log(res.data);
        if (text.trim() !== "") {
          setIsLoading(false);
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
      .get(
        "https://backend-deploy-production-c982.up.railway.app/chatbot/getkey/6"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //
  };

  return (
    <div style={{ backgroundColor: "#e0e2e6" }}>
      <div
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
        className="text-5xl m-6 p-3 bg-white "
      >
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
          borderRadius : "15px"
        }}
      >
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <img
              width={"200px"}
              src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_medium.gif"
              alt=""
            />
          </div>
        ) : (
          displayText
        )}
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
    </div>
  );
};
