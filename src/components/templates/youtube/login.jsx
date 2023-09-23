import React from "react";
import { logo } from "./data";

const Login = () => {
  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">
        <div className="mx-auto inline-block w-16">{logo}</div>
        <div className="mb-6 w-full text-center text-2xl font-semibold uppercase">
          Play
        </div>

        <label htmlFor="email" className="mb-1 inline-block text-gray-300">
          Email*
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="mb-4 rounded-lg border bg-transparent px-3 py-2"
        />
        <button className="bg-[#ae7aff] px-4 py-3 text-black">
          Sign in with Email
        </button>
      </div>
    </div>
  );
};

export default Login;
