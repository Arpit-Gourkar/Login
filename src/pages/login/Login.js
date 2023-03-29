import React, { useState } from "react";
import style from "./style.css";
import { useNavigate } from "react-router-dom";
import web1 from "../../Components/images/runner.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log("userName", userName);
  console.log("password", password);
  // const handlelogin = () => {
  //   const data = { uid: userName, password: password, blocked: 0 };
  //   axios
  //     .post("https://myphysio.digitaldarwin.in/api/login_v1", data)
  //     .then((res) => {
  //       console.log("res", res);
  //     })
  //     .catch((err) => {
  //       console.log("not working", err);
  //     });
  // };

  const handlelogin = async () => {
    navigate("/dashboard");
    await fetch("https://myphysio.digitaldarwin.in/api/login_v1", {
      method: "POST",
      body: JSON.stringify({
        uid: userName,
        password: password,
        blocked: 0,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 img-box">
            <img src={web1} class="img-fluid" id="runner" alt="..." />
          </div>
          <div class="col-md-6 form-box">
            <form method="POST" class="login-form">
              <h1>SAI</h1>
              <h4>NCSSR</h4>
              <h5>Welcome Back</h5>
              <p>Build date 28-03-2023</p>
              <label id="Username">Username</label>

              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label for="Password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button onClick={handlelogin} class="btn" id="submit">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
