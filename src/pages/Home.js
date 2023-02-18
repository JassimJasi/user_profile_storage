import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import UserList from "../components/UserList/UserList";
import GetWaves from "../svgs/GetWaves";
import { UserDetails } from "../redux/action";
import { useDispatch } from "react-redux";

function Home() {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://panorbit.in/api/users.json").then((res) => {
      setData(res.data.users);
      dispatch(UserDetails(res.data.users));
      localStorage.setItem("all_user_data", JSON.stringify(res.data.users));
    });
    // eslint-disable-next-line
  }, []);
  //console.log(data);
  return (
    <div className="home">
      <div className="curv">
        <GetWaves color="#6600FF" />
        <GetWaves color="#4990ca" />
      </div>

      <div className="profile_card">
        <div className="profile_Head">
          <h2>Select an account</h2>
        </div>
        <div className="userCard">
          {data?.map((userDetails, key) => (
            <UserList userDetails={userDetails} index={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
