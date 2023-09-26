import React from "react";

const Registration = () => {
  return (
    <div className="bg-gray-600 flex align-middle justify-center text-center min-h-screen px-1">
      <div className="bg-white my-20 w-full md:w-[30%] p-10 space-y-10 rounded-md shadow-lg">
        <h1 className="text-2xl font-bold text-gray-700">Registration</h1>
        <form action="submit" className="flex flex-col space-y-4 ">
          <input
            className=" border-b border-gray-300  p-2"
            type="text"
            placeholder="name"
          />
          <input
            className="border-b border-gray-300  p-2"
            type="email"
            placeholder="email"
          />
          <input
            className="border-b border-gray-300  p-2"
            type="password"
            placeholder="password"
          />
          <input type="file" className="text-gray-600 cursor-pointer" />
          <button className="border-none bg-slate-600 text-white p-2 rounded-2xl ">
            SignIn
          </button>
        </form>
        <p className="text-gray-600">
          if already have an account!{" "}
          <span className="text-blue-600 cursor-pointer">LogIn</span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
