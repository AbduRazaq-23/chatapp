import React from "react";

const Chats = () => {
  return (
    <main>
      <div className="flex items-center space-x-2 p-1 hover:bg-gray-800 rounded-lg text-gray-200">
        <img
          className="h-12 w-12 rounded-full"
          src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.webp?s=1024x1024&w=is&k=20&c=VQ_i-ojGNiLSNYrco2c2xM0iUjsZKLF7zRJ4PSMpmEI="
          alt="profile"
        />
        <div>
          <span className="font-semibold">Amaad</span>
          <p className="text-[12px] text-gray-400">hello</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 p-1 hover:bg-gray-800 rounded-lg text-gray-200">
        <img
          className="h-12 w-12 rounded-full"
          src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.webp?s=1024x1024&w=is&k=20&c=VQ_i-ojGNiLSNYrco2c2xM0iUjsZKLF7zRJ4PSMpmEI="
          alt="profile"
        />
        <div>
          <span className="font-semibold">Amaad</span>
          <p className="text-[12px] text-gray-400">hello</p>
        </div>
      </div>
    </main>
  );
};

export default Chats;
