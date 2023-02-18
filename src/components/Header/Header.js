import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../helper/clickOutSide";
import { addUser } from "../../redux/action";
import "./Header.css";

function Header({ title, user }) {
  const popup = useRef(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allUser = useSelector((state) => state.user_list);
  //console.log(allUser);

  const handleClick1 = () => {
    setShow((prev) => !prev);
  };
  useClickOutside(popup, () => setShow(false));
  const handleClick = (data) => {
    //console.log("click");
    dispatch(addUser(data));
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
              <div className="profile1" onClick={() => handleClick(data)}>
                <img src={data?.profilepicture} alt="" srcset="" />
                <h5>{data?.name}</h5>
              </div>
            </>
          ))}

          {/* <div className="profile1">
            <img src={user.profilepicture} alt="" srcset="" />
            <h5>{user.name}</h5>
          </div> */}
          <button onClick={() => navigate("/")}>Sign out</button>
        </div>
      ) : null}

      <hr />
    </>
  );
}

export default Header;
