import React from "react";
import {
  BsFillCameraVideoFill,
  BsFillTelephoneFill,
  BsThreeDots,
} from "react-icons/bs";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <main className="bg-gray-200 h-full">
      <div className="flex justify-between items-center text-gray-100 bg-slate-400 h-[60px] p-2">
        <h1>Amaad</h1>
        <div className="flex space-x-3">
          <BsFillCameraVideoFill className="cursor-pointer" />
          <BsFillTelephoneFill className="cursor-pointer" />
          <BsThreeDots className="cursor-pointer" />
        </div>
      </div>
      <Messages />
      <Input />
    </main>
  );
};

export default Chat;
