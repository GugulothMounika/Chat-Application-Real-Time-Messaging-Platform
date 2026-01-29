import { useContext } from "react";
import startChatContext from "../../context/startChatContext";
import "./ChatAreaHeader.css";
function ChatAreaHeader() {
  const { startChatUserData } = useContext(startChatContext);
  return (
    <div className="chat-area-header">
      <div className="leftHeaderPart">
        <img
          src="https://img.freepik.com/premium-photo/professional-males-colleagues-hd-8k-wallpaper-stock-photographic-image_1033957-29162.jpg"
          alt=""
          width={50}
          height={50}
        />
        <h2>{startChatUserData && startChatUserData.username}</h2>
      </div>
      <div className="rightHeaderPart">
        <i class="bi bi-telephone-inbound-fill"></i>
        <i class="bi bi-camera-video-fill"></i>
      </div>
    </div>
  );
}

export default ChatAreaHeader;