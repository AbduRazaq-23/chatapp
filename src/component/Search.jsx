import React from "react";

const Search = () => {
  return (
    <main className="p-2 space-y-1 text-gray-300">
      <div>
        <input
          className="w-full p-1 rounded-lg outline-none bg-slate-300 text-gray-700"
          type="text"
          placeholder="search for user"
        />
      </div>
      <div className="flex items-center space-x-2 p-1 hover:bg-gray-800 rounded-lg">
        <img
          className="h-12 w-12 rounded-full"
          src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.webp?s=1024x1024&w=is&k=20&c=VQ_i-ojGNiLSNYrco2c2xM0iUjsZKLF7zRJ4PSMpmEI="
          alt="profile"
        />
        <span className="font-semibold">Amaad</span>
      </div>
    </main>
  );
};

export default Search;
