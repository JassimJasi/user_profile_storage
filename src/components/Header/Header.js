import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../helper/clickOutSide";
import "./Header.css";

function Header({ title, user, setClick }) {
  const popup = useRef(null);
  const [show, setShow] = useState(false);
  const [allUser, setAllUser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getAllUserLocalStorage = localStorage.getItem("all_user_data");
    if (getAllUserLocalStorage) {
      setAllUser(JSON.parse(getAllUserLocalStorage));
    }
  }, []);
  //console.log(allUser);

  const handleClick1 = () => {
    setShow((prev) => !prev);
  };
  useClickOutside(popup, () => setShow(false));
  const handleClick = (data) => {
    //console.log("click");
    // dispatch(addUser(data));
    localStorage.setItem("user_data", JSON.stringify(data));
    setClick((prev) => !prev);
    navigate("/user_profile");
  };

  return (
    <>
      <div className="header">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="profile" onClick={handleClick1}>
          <img src={user?.profilepicture} alt="" srcset="" />
          <p>{user?.name}</p>
        </div>
      </div>
      {show ? (
        <div className="popup" ref={popup}>
          <img
            className="popup_img"
            src={user?.profilepicture}
            alt=""
            srcset=""
          />
          <p>{user?.name}</p>
          <span>{user?.email}</span>
          {allUser?.slice(user.id, user.id + 2).map((data) => (
            <>
              <hr />
              <div
                className="profile1"
                onClick={() => handleClick(data)}
                key={data.id}
              >
                <img src={data?.profilepicture} alt="" srcset="" />
                <h5>{data?.name}</h5>
              </div>
            </>
          ))}
          <button onClick={() => navigate("/")}>Sign out</button>
        </div>
      ) : null}

      <hr />
    </>
  );
}

export default Header;
