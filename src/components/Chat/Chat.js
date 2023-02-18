import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import useClickOutside from "../../helper/clickOutSide";

function Chat({ setSingleChat }) {
  const [user, setUser] = useState();
  const [hide, setHide] = useState(false);
  const chatPopup = useRef(null);
  useClickOutside(chatPopup, () => setHide(false));
  useEffect(() => {
    const getAllUserLocalStorage = localStorage.getItem("all_user_data");
    if (getAllUserLocalStorage) {
      setUser(JSON.parse(getAllUserLocalStorage));
    }
  }, []);

  return (
    <div
      className="mainDiv"
      style={{ marginTop: hide ? "-326px" : "-72px", marginLeft: "378px" }}
    >
      <div onClick={() => setHide((prev) => !prev)} className="chat">
        <div>
          <BsChatRight />
          <p>Chat</p>
        </div>
        {hide ? <FiChevronDown /> : <FiChevronUp />}
      </div>
      {hide ? (
        <div className="profiles" ref={chatPopup}>
          {/* --------- Data maping ------ */}
          {user?.map((data) => (
            <div key={data.id} onClick={() => setSingleChat(data)}>
              <div className="maping_div">
                <div className="user">
                  <img src={data.profilepicture} alt="profileImg" />
                  <p>{data.name}</p>
                </div>
                <div className="online"> </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Chat;
