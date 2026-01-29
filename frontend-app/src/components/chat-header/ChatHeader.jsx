import { useContext } from "react";
import "./ChatHeader.css";
import authContext from "../../context/authContext";
import loggedInUserContext from "../../context/loggedInUserContext";
import { Link } from "react-router-dom";
function ChatHeader() {
  const { logout } = useContext(authContext);
  const { loggedInUser } = useContext(loggedInUserContext);
  return (
    <div className="header">
      <div className="header-logo">
        <h1>
          <i className="bi bi-chat-fill"></i> Dude'Chat
        </h1>
      </div>
      <div className="header-profile">
        <h3>{loggedInUser.username.toUpperCase()}</h3>
        <Link to="/profile">
          <img
            src="https://i.pinimg.com/originals/f1/b4/f3/f1b4f35c609fd65e1012fe5c1e81ba9b.jpg"
            alt=""
            width={40}
            height={40}
            style={{ borderRadius: "50%", boxShadow: "0 0 10px black" }}
          />
        </Link>
        <button onClick={logout}>Logout</button>
        {/* <i className="bi bi-power" onClick={logout}></i> */}
      </div>
    </div>
  );
}

export default ChatHeader;