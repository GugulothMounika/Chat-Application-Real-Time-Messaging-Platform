import { useRef, use, useEffect, useState } from "react";
import "./ChatAreaFooter.css";
import axios from "axios";
import { toast } from "react-toastify";
import allChatContext from "../../context/allChatContext";
import loggedInUserContext from "../../context/loggedInUserContext";
import startChatContext from "../../context/startChatContext";
import EmojiPicker from "emoji-picker-react";
function ChatAreaFooter({ socket }) {
  const messageRef = useRef(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const { loggedInUser } = use(loggedInUserContext);
  const { startChatUserData } = use(startChatContext);
  const { setAllChats } = use(allChatContext);

  useEffect(() => {
    socket.on("received-message", (data) => {
      setAllChats((prevAllMessages) => {
        if (prevAllMessages) {
          return [...prevAllMessages, data];
        } else {
          return [data];
        }
      });
    });
  }, []);

  const sendMessage = () => {
    //Trigger the event using Socket.io-client
    if (messageRef.current.value === "") {
      toast.error("Please Enter the Message", { autoClose: 1500 });
    } else {
      socket.emit("send-message", {
        userIds: [loggedInUser._id, startChatUserData.id],
        message: messageRef.current.value,
      });

      //sending the http request using axios
      axios
        .post("http://localhost:3000/api/chats/new-message", {
          userIds: [loggedInUser._id, startChatUserData.id],
          message: messageRef.current.value,
        })
        .then((res) => {
          if (res.data.ok) {
            messageRef.current.value = "";
            setShowEmoji(false);
            toast.success("Message Sent", { autoClose: 1500 });
          } else {
            throw Error(res.data.error);
          }
        })
        .catch((error) => {
          toast.error(error.message, { autoClose: 1500 });
        });
    }
  };

  return (
    <div className="chat-area-footer">
      <div className="emoji">
        <EmojiPicker
          onEmojiClick={(event) => {
            messageRef.current.value = messageRef.current.value + event.emoji;
          }}
          open={showEmoji}
          width={800}
          style={{
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
            padding: "8px",
            margin: "auto",
          }}
        />
      </div>
      <input ref={messageRef} type="text" placeholder="enter message" />
      <div className="chat-area-footer-icons">
        <i class="bi bi-image-fill"></i>
        <i
          class="bi bi-emoji-heart-eyes-fill"
          onClick={() => {
            setShowEmoji(!showEmoji);
          }}
        ></i>
        <i class="bi bi-send-check" onClick={sendMessage}></i>
      </div>
    </div>
  );
}

export default ChatAreaFooter;