import { useState } from "react";
import Chat from "../Chat/Chat";
import ChatBox from "../Chat/ChatBox";
import "./ProfileBody.css";

function ProfileBody(props) {
  const [singleChat, setSingleChat] = useState();
  // console.log(props.user);
  const {
    name,
    profilepicture,
    username,
    email,
    phone,
    website,
    company,
    address,
  } = props?.user;
  return (
    <div className="profile_body">
      {/* ---------- (left side)----------- */}
      <div className="leftSide">
        <img src={profilepicture} alt="profile img" />
        {/* ------------ (name) ----------- */}
        <p>{name}</p>
        <div className="userName">
          <div>
            <h2 style={{ marginTop: "0px" }}>Username :</h2>
            <h2>e-mail :</h2>
            <h2>Phone :</h2>
            <h2>Website :</h2>
          </div>
          <div>
            <h3 style={{ marginTop: "0px" }}>{username}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <h3>{website}</h3>
          </div>
        </div>
        <hr />
        {/* --------------- (company)--------- */}
        <h2>Company</h2>
        <div className="company">
          <div>
            <h2 style={{ marginTop: "0px" }}>Name :</h2>
            <h2>catchphrase :</h2>
            <h2>Bs :</h2>
          </div>
          <div>
            <h3 style={{ paddingTop: "3px" }}>{company?.name}</h3>
            <h3>{company?.catchPhrase}</h3>
            <h3>{company?.bs}</h3>
          </div>
        </div>
      </div>
      {/* -------- (vertical line) ------ */}
      <p className="verticalLine"></p>

      {/* -------- (right side)---------- */}
      <div className="rightSide">
        {/* -----------(address)------- */}
        <h2>Address:</h2>
        <div className="address">
          <div>
            <h2 style={{ marginTop: "0px" }}>Street :</h2>
            <h2>Suite :</h2>
            <h2>City :</h2>
            <h2>Zipcode :</h2>
          </div>
          <div>
            <h3 style={{ marginTop: "0px" }}>{address?.street}</h3>
            <h3>{address?.suite}</h3>
            <h3>{address?.city}</h3>
            <h3>{address?.zipcode}</h3>
          </div>
        </div>
        {/* ---------- (map)---------- */}
        <iframe
          title="Map"
          width="100%"
          height="350"
          className="map"
          src={`https://maps.google.com/maps?q=${address?.street},t=&z=13&ie=UTF8&iwloc=&output=embed`}
        ></iframe>
        {/* ---------- (geo)--------- */}
        <div className="geo">
          <p>
            Lat : <span>{address?.geo.lat}</span>
          </p>
          <p>
            Lng : <span>{address?.geo.lng}</span>
          </p>
        </div>
        {/* ------------- (chat) ---------- */}
        <div>
          <Chat setSingleChat={setSingleChat} />
          {singleChat ? (
            <ChatBox
              user={props.user}
              setSingleChat={setSingleChat}
              singleChat={singleChat}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileBody;
