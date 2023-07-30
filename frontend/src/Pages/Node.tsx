import React from "react";
import express from "../Images/middleware-logo.png";
import mongo from "../Images/rest-logo.png";
import node from "../Images/aws-logo.png";
import nodelogo from "../Images/nodejs-logo.png";
import redux from "../Images/sql-logo.png";
import typescript from "../Images/redis-logo.png";

export const Node = () => {
  return (
    <div className="bg-#e0e2e6" >
      <div className="m-6 grid grid-cols-3 bg-#e0e2e6 ">
        <div className="bg-gray-100">
          <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <img
              className="h-32 mx-auto"
              src={nodelogo}
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-semibold mt-3">NodeJS</h2>
            <div className="mt-5">
              <p className="text-gray-600 mt-2">
              Node.js is an open-source, cross-platform, JavaScript runtime
                environment that allows developers to execute JavaScript code
                outside of a web browser. It is built on the Chrome V8
                JavaScript engine, which provides high performance and fast
                execution of JavaScript code.
              </p>
            </div>
            <button className=" mt-3 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-800 text-lg font-bold text-white">
              Read More
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <img
              className="h-32 rounded-full mx-auto"
              src={redux}
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-semibold mt-3">Redux</h2>
            <div className="mt-5">
              <p className="text-gray-600 mt-2">
                Redux is an open-source JavaScript library used for managing the
                state of applications, particularly in front-end web
                development. It is commonly used with frameworks like React, but
                it can be employed with other view libraries or even in
                non-browser environments.
              </p>
            </div>
            <button className=" mt-3 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-800 text-lg font-bold text-white">
              Read More
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <img
              className=" h-32 rounded-full mx-auto"
              src={typescript}
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-semibold mt-3">
              TypeScript
            </h2>
            <div className="mt-5">
              <p className="text-gray-600 mt-2">
                TypeScript is an open-source programming language developed by
                Microsoft. It is a superset of JavaScript, meaning that it
                extends the capabilities of JavaScript by adding optional static
                typing and other features. TypeScript code can be compiled to
                standard JavaScript code.
              </p>
            </div>
            <button className=" mt-3 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-800 text-lg font-bold text-white">
              Read More
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <img
              className="h-32 rounded-full mx-auto"
              src={mongo}
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-semibold mt-3">MongoDB</h2>
            <div className="mt-5">
              <p className="text-gray-600 mt-2">
                MongoDB is an open-source, NoSQL database management system that
                falls under the category of document-oriented databases. It was
                developed by MongoDB Inc. and is designed to handle large
                amounts of unstructured or semi-structured data. MongoDB stores
                data in a format called BSON (Binary JSON)
              </p>
            </div>
            <button className=" mt-3 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-800 text-lg font-bold text-white">
              Read More
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <img
              className="h-32 rounded-full mx-auto"
              src={express}
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-semibold mt-3">Express</h2>
            <div className="mt-5">
              <p className="text-gray-600 mt-2">
                Express, commonly known as Express.js or simply Express, is a
                fast, minimalist, and flexible web application framework for
                Node.js. It is one of the most popular and widely used
                frameworks for building server-side applications and APIs in the
                Node.js ecosystem.
              </p>
            </div>
            <button className=" mt-3 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-800 text-lg font-bold text-white">
              Read More
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <img
              className="h-32 rounded-full mx-auto"
              src={node}
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-semibold mt-3">React</h2>
            <div className="mt-5">
              <p className="text-gray-600 mt-2">
                Node.js is an open-source, cross-platform, JavaScript runtime
                environment that allows developers to execute JavaScript code
                outside of a web browser. It is built on the Chrome V8
                JavaScript engine, which provides high performance and fast
                execution of JavaScript code.
              </p>
            </div>
            <button className=" mt-3 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-800 text-lg font-bold text-white">
              Read More
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
