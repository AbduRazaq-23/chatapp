import React from "react";
import {
  BsFillCameraVideoFill,
  BsFillTelephoneFill,
  BsThreeDots,
} from "react-icons/bs";

const Chat = () => {
  return (
    <main className="bg-white h-full">
      <div className="flex justify-between items-center bg-slate-300 h-[60px] p-2">
        <h1>Amaad</h1>
        <div className="flex space-x-3">
          <BsFillCameraVideoFill />
          <BsFillTelephoneFill />
          <BsThreeDots />
        </div>
      </div>
    </main>
  );
};

export default Chat;
