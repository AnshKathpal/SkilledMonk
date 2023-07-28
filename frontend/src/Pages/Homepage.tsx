import React from "react";

export const Homepage = () => {
  return (
    <>
      <div
        className="border border-solid border-blue-800"
        style={{ height: "80vh" }}
      >
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div
        className=" m-6 p-4"
        style={{
          boxShadow:
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        }}
      >
        <h2 className="text-4xl">
          About InterviewSensei, A Digital Interview Paltform
        </h2>
        <div
          className=" m-auto mt-6 p-3 mb-4 text-left"
          style={{
            width: "80%",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
        >
          <span className="font-bold ">Data Security and Privacy: </span>
          <span>
            Since interviews involve sensitive information, InterviewSensei
            platforms prioritize data security and privacy. They implement
            measures to protect the confidentiality of the interviews and comply
            with relevant data protection regulations.
          </span>
        </div>
        <div
          className=" m-auto mt-6 p-3 mb-4 text-left"
          style={{
            width: "80%",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
        >
          <span className="font-bold">
            Integration with Applicant Tracking Systems:{" "}
          </span>
          <span>
            Integration with GPT platforms allows for seamless data transfer and
            integration of interview outcomes. This ensures that interview
            feedback and evaluations are easily accessible and can be considered
            alongside other candidate information.
          </span>
        </div>
        <div
          className=" m-auto mt-6 p-3 mb-4 text-left"
          style={{
            width: "80%",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
        >
          <span className="font-bold">Recording and Playback: </span>
          <span>
            One of the advantages of InterviewSensei platforms is the ability to
            record interviews. This feature allows interviewers to review
            interviews at a later time and share them with other stakeholders
            for evaluation and feedback.
          </span>
        </div>
        <div
          className=" m-auto mt-6 p-3 mb-4 text-left"
          style={{
            width: "80%",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
        >
          <span className="font-bold">Interview Question Libraries: </span>
          <span>
            Platforms offer a library of interview questions, categorized by
            industry, job role, or competency. These question banks serve as
            valuable resources for interviewers, helping them prepare for
            interviews and ensuring consistency in the interview process.
          </span>
        </div>
        <div
          className=" m-auto mt-6 p-3 mb-4 text-left"
          style={{
            width: "80%",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
        >
          <span className="font-bold">Mobile Accessibility: </span>
          <span>
            InterviewSensei offer mobile accessibility, allowing candidates and
            interviewers to participate in interviews using their smartphones or
            tablets. Mobile compatibility expands accessibility and convenience
            for users who prefer or require mobile devices.
          </span>
        </div>
        <div
          className=" m-auto mt-6 p-3 mb-4 text-left"
          style={{
            width: "80%",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
        >
          <span className="font-bold">Information: </span>
          <span>
            A digital interview platform offers a modern and efficient approach
            to conducting interviews, providing convenience, flexibility, and
            powerful features that enhance the hiring process for both employers
            and candidates.
          </span>
        </div>
      </div>
    </>
  );
};
