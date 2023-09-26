import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[60px] w-full bg-green-400 p-2 text-gray-800 font-semibold">
      <h1>AR</h1>
      <div className="flex items-center space-x-1">
        <img
          className="h-12 w-12 rounded-full"
          src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.webp?s=1024x1024&w=is&k=20&c=VQ_i-ojGNiLSNYrco2c2xM0iUjsZKLF7zRJ4PSMpmEI="
          alt="profile"
        />
        <span>Abdu Razaq</span>
      </div>

      <button>LogIn</button>
    </div>
  );
};

export default Navbar;
