import React, { useEffect, useState } from "react";
import ComingSoon from "../components/Coming_soon";
import Header from "../components/Header/Header";
import LeftNav from "../components/LeftNav/LeftNav";
import ProfileBody from "../components/ProfileBody/ProfileBody";

function UserProfile() {
  const [show, setShow] = useState("Profile");
  const [user, setUser] = useState({});
  const [click, setClick] = useState(false);

  useEffect(() => {
    const getUserLocalStorage = localStorage.getItem("user_data");
    if (getUserLocalStorage) {
      setUser(JSON.parse(getUserLocalStorage));
    }
  }, [click]);
  return (
    <div className="pro_container">
      <div className="left_nav">
        <LeftNav setShow={setShow} show={show} />
      </div>
      <div className="profile_container">
        <Header title={show} user={user} setClick={setClick} />
        {show === "Profile" ? <ProfileBody user={user} /> : <ComingSoon />}
      </div>
    </div>
  );
}

export default UserProfile;
