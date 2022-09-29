import React from "react";

const RegisterHook = () => {
  return (
    <div className="max-w-[300px] mx-auto my-10">
      <div className="flex flex-col gap-3 ">
        <label htmlFor="userName" className="cursor-pointer">
          Username
        </label>
        <input
          id="userName"
          type="text"
          className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-500 transition-all"
          placeholder="Enter your user name"
        />
        <p className="text-red-500 text-sm">
          please enter at least one character
        </p>
      </div>
    </div>
  );
};

export default RegisterHook;
