import { Link } from "react-router-dom";
import "./LeftNav.css";

function LeftNav({ setShow, show }) {
  const clickHandle = (title) => {
    setShow(title);
  };
  return (
    <div className="nav">
      <Link
        onClick={() => clickHandle("Profile")}
        className={show === "Profile" ? "active" : "link"}
      >
        Profile
      </Link>
      <hr />
      <Link
        onClick={() => clickHandle("Posts")}
        className={show === "Posts" ? "active" : "link"}
      >
        Posts
      </Link>
      <hr />
      <Link
        onClick={() => clickHandle("Galery")}
        className={show === "Galery" ? "active" : "link"}
      >
        Galery
      </Link>
      <hr />
      <Link
        onClick={() => clickHandle("ToDo")}
        className={show === "ToDo" ? "active" : "link"}
      >
        ToDo
      </Link>
    </div>
  );
}

export default LeftNav;
