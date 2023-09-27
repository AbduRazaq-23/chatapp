import React from "react";
import Sidebar from "../component/Sidebar";
import Chat from "../component/Chat";

const Home = () => {
  return (
    <div className="flex  m-auto my-10 w-[90%] h-[90vh] border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="basis-1/4">
        <Sidebar />
      </div>
      <div className="grow">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
