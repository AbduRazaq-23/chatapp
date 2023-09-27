import React from "react";

const Message = () => {
  return (
    <div className="p-4 flex items-center">
      <div className="flex flex-col text-gray-500">
        <img
          className="h-12 w-12 rounded-full"
          src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.webp?s=1024x1024&w=is&k=20&c=VQ_i-ojGNiLSNYrco2c2xM0iUjsZKLF7zRJ4PSMpmEI="
          alt="profile"
        />
        <span>just now</span>
      </div>

      <h1 className="ml-12 bg-white px-3 py-1 rounded-r-lg rounded-bl-lg">
        hello
      </h1>
    </div>
  );
};

export default Message;
