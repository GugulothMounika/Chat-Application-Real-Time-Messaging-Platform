import { useContext } from "react";
import "./ChatAreaBody.css";
import allChatContext from "../../context/allChatContext";
import loggedInUserContext from "../../context/loggedInUserContext";
function ChatAreaBody() {
  const { allChats } = useContext(allChatContext);
  const { loggedInUser } = useContext(loggedInUserContext);
  // console.log("chat-area-body", allChats);
  return (
    <div className="chat-area-body">
      {allChats &&
        allChats.map((singleChat) => {
          return (
            <div
              className={
                singleChat.userIds[0] === loggedInUser._id
                  ? "senderMessage message"
                  : "receiverMessage message"
              }
            >
              {singleChat.message}
            </div>
          );
        })}
    </div>
  );
}

export default ChatAreaBody;