import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="h-[calc(100%-120px)] overflow-scroll">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
