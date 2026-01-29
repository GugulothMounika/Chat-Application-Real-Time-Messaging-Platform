import React from "react";
import "./ChatArea.css";
import ChatAreaHeader from "../chat-area-header/ChatAreaHeader";
import ChatAreaBody from "../chat-area-body/ChatAreaBody";
import ChatAreaFooter from "../chat-area-footer/ChatAreaFooter";
function ChatArea({ socket }) {
  return (
    <div className="chat-area">
      <ChatAreaHeader />
      <ChatAreaBody />
      <ChatAreaFooter socket={socket} />
    </div>
  );
}

export default ChatArea;