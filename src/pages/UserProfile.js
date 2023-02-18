import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ComingSoon from "../components/Coming_soon";
import Header from "../components/Header/Header";
import LeftNav from "../components/LeftNav/LeftNav";
import ProfileBody from "../components/ProfileBody/ProfileBody";

function UserProfile() {
  const [show, setShow] = useState("Profile");
  const [user, setUser] = useState({});

  console.log(show);
  const data = useSelector((state) => state.user_selected);
  useEffect(() => {
    setUser(data);
  }, [data]);
  console.log("user", data);
  return (
    <div className="pro_container">
      <div className="left_nav">
        <LeftNav setShow={setShow} show={show} />
      </div>
      <div className="profile_container">
        <Header title={show} user={user} />
        {show == "Profile" ? <ProfileBody user={user} /> : <ComingSoon />}
      </div>
    </div>
  );
}

export default UserProfile;
