import React from "react";
import { AiOutlineLink, AiOutlinePicture, AiOutlineSend } from "react-icons/ai";

const Input = () => {
  return (
    <div className="bg-white h-[60px] p-2  flex justify-center items-center">
      <input
        type="text"
        className="w-full p-2 outline-none"
        placeholder="type messag ..."
      />
      <div className="flex space-x-3 text-gray-700">
        <label htmlFor="file">
          <AiOutlineLink size={28} className="cursor-pointer" />
        </label>
        <input type="file" id="file" name="file" className="hidden" />
        <AiOutlinePicture size={28} className="cursor-pointer" />
        <AiOutlineSend size={28} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Input;
