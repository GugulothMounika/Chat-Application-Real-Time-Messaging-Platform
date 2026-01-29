import "./Home.css";
import { useEffect, useContext } from "react";
import ChatHeader from "../../components/chat-header/ChatHeader";
import ChatMain from "../../components/chat-main/ChatMain";
import { io } from "socket.io-client";
import loggedInUserContext from "../../context/loggedInUserContext";

const socket = io("http://localhost:3000");
function Home() {
  const { loggedInUser } = useContext(loggedInUserContext);
  useEffect(() => {
    socket.emit("join-room", loggedInUser._id);
  }, []);

  return (
    <div className="home">
      <ChatHeader />

      <ChatMain socket={socket} />
    </div>
  );
}

export default Home;