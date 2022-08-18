import React from "react";
import {useNavigate }  from "react-router-dom";
import { Link } from "react-router-dom";
import { getToken } from "../utiels/helper";

const NaveBar = () => {
const navigator= useNavigate();

  const logoutUser=()=>{
       localStorage.removeItem("testToken");
       navigator("/login")
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "18px" }}>
      {getToken() ? (
        <p style={{ margin: "0 8px",cursor:"pointer" }} onClick={logoutUser}>
          Logout
        </p>
      ) : (
        <p style={{ margin: "0 8px",cursor:"pointer"}}>
          <Link to="/login">Login</Link>
        </p>
      )}
      <p style={{ margin: "0 8px",cursor:"pointer" }}>
        <Link to="/">Dashboard</Link>
      </p>
      {/* <p style={{ margin: "0 8px",cursor:"pointer" }}>
        <Link to="/related">related</Link>
      </p> */}
    </div>
  );
};

export default NaveBar;
