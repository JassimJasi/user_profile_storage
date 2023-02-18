import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user_profile" exact element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
