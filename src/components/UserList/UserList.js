import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action";
import "./Style.css";

function UserList(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    // console.log();
    dispatch(addUser(props.userDetails));
    navigate("/user_profile");
  };
  return (
    <div className="userList">
      <div className="single_profile" key={props?.index} onClick={handleClick}>
        <img src={props?.userDetails.profilepicture} alt="" srcset="" />
        <p>{props?.userDetails.name}</p>
      </div>
      <hr />
    </div>
  );
}

export default UserList;
