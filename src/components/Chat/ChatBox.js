import { useRef } from "react";
import "./Chat.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import useClickOutside from "../../helper/clickOutSide";

function ChatBox({ setSingleChat, singleChat }) {
  const mesPopup = useRef(null);
  useClickOutside(mesPopup, () => setSingleChat(""));
  return (
    <div
      className="mainDiv"
      style={{
        marginTop: "-265px",
        right: "350px",
        marginLeft: "378px",
      }}
      ref={mesPopup}
    >
      <div onClick={() => setSingleChat("")} className="chat">
        <div>
          <img src={singleChat.profilepicture} alt="" srcset="" />
          <p>{singleChat.name}</p>
        </div>
        {singleChat ? <FiChevronDown /> : <FiChevronUp />}
      </div>
      {singleChat ? <div className="profiles"></div> : ""}
    </div>
  );
}

export default ChatBox;
