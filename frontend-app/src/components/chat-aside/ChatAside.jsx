import { useEffect, useContext, useState, useRef } from "react";
import "./ChatAside.css";
import ChatSearch from "../chat-search/ChatSearch.jsx";
import ChatListUser from "../chat-list-user/ChatListUser.jsx";
import { getAllUsers } from "./ChatAside.js";
import loggedInUserContext from "../../context/loggedInUserContext.js";
function ChatAside() {
  const [allUsers, setAllUsers] = useState([]);
  const [selectedChatListComp, setSelectedChatListComp] = useState(null);
  const { loggedInUser } = useContext(loggedInUserContext);
  useEffect(() => {
    getAllUsers(loggedInUser._id, setAllUsers);
  }, []);
  return (
    <div className="aside">
      <ChatSearch />
      <section className="chat-list">
        {allUsers.length > 0 &&
          allUsers.map(function ({ username, email, _id }, index) {
            return (
              <ChatListUser
                index={index}
                id={_id}
                key={email}
                username={username}
                email={email}
                selectChatListComp={setSelectedChatListComp}
                selectedChatListComp={selectedChatListComp}
              />
            );
          })}
      </section>
    </div>
  );
}

export default ChatAside;