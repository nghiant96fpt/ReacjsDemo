import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import ApiRequest from "../../Services/Api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _onChange = (event: any) => {
    switch (event?.target?.name) {
      case "email":
        console.log("email === ", event?.target?.value);
        setEmail(event?.target?.value);
        break;
      case "password":
        console.log("password === ", event?.target?.value);
        setPassword(event?.target?.value);
        break;
    }
  };

  const _login = async () => {
    const result = await ApiRequest({
      method: "GET",
      path: "api/ntnghiait01/user-info",
    });

    console.log(result);
  };

  const _openRegister = () => {
    navigate("/register");
  };

  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={_onChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
              onChange={_onChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={_login}>
              Login
            </button>
          </div>
          <p
            className="forgot-password text-right mt-2"
            onClick={_openRegister}
          >
            Don't have an account? Register.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
