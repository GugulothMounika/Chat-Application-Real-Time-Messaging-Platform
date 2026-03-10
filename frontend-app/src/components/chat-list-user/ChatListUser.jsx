import { useRef, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import startChatContext from "../../context/startChatContext";
import "./ChatListUser.css";
import loggedInUserContext from "../../context/loggedInUserContext";
import allChatContext from "../../context/allChatContext";
import onlineUsersContext from "../../context/OnlineUsersContext";
function ChatListUser({
  // isOnline,
  username,
  email,
  id,
  index,
  selectChatListComp,
  selectedChatListComp,
}) {
  const { onlineusers } = useContext(onlineUsersContext);
  const chatListContainerRef = useRef(null);
  const profileRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const { setStartChatUserData } = useContext(startChatContext);
  const { loggedInUser } = useContext(loggedInUserContext);
  const { setAllChats } = useContext(allChatContext);

  const startChat = () => {
    selectChatListComp(index);
    setStartChatUserData({ username: username, email: email, id: id });
    getAllChats();
  };

  const getAllChats = () => {
    axios
      .get(
        `http://localhost:3000/api/chats/get-all-messages/${loggedInUser._id}/${id}`,
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.ok) {
          setAllChats(res.data.result);
        } else {
          setAllChats(null);
          throw Error(res.data.error);
        }
      })
      .catch((error) => {
        toast.error(error, { autoClose: 2000 });
      });
  };

  return (
    <div
      onClick={startChat}
      className="chat-list-user-container "
      ref={chatListContainerRef}
      style={{
        backgroundColor: selectedChatListComp === index ? "green" : "white",
      }}
    >
      <div className="chat-list-user-image">
        <div
          ref={profileRef}
          id="profile"
          style={{
            // backgroundColor: selectedChatListComp === index ? "white" : "green",
            color: selectedChatListComp === index ? "green" : "white",
            fontWeight: "bold",
          }}
        >
          <div
            id="mode"
            style={{
              backgroundColor: onlineusers.includes(id) ? "green" : "red",
            }}
          ></div>
          <img
            src="https://img.freepik.com/premium-photo/professional-males-colleagues-hd-8k-wallpaper-stock-photographic-image_1033957-29162.jpg"
            alt=""
            width="50"
            height={"50"}
            // width={"100%"}
            // height={"100%"}
          />
          {/* {username.slice(0, 2)} */}
        </div>
      </div>
      <div className="chat-list-user-details">
        <div>
          <h3
            style={{
              color: selectedChatListComp === index ? "white" : "green",
            }}
            ref={usernameRef}
          >
            {username}
          </h3>
        </div>
        <div>
          <p
            style={{
              color:
                selectedChatListComp === index
                  ? "white"
                  : " rgba(116, 110, 110, 1)",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
            ref={emailRef}
          >
            {email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatListUser;