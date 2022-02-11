/*
Author:      Zachary Thomas
Created:     2/11/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../../../components/Card/Card";
import Error from "../../../components/Error/Error";
import "./LoginForm.scss";

// Login form for users.
export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if the user pressed enter, if they did we attempt to login.
  function checkLogin(event) {
    if (event.key === "Enter") {
      props.onSubmit(email, password);
    }
  }

  return (
    <div className="login-form-container w-75 mx-auto"
      onKeyPress={(e) => checkLogin(e)}
    >
      <Card title="Login">
        <div className="login-form-inner px-5 mb-4">
          <label className="login-label mt-4">
            Email
          </label>

          <input
            type="email"
            className="login-input form-control mt-2 mb-4"
            id="email-text"
            aria-describedby="Email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login-label mt-2">
            Password
          </label>

          <input
            type="password"
            className="login-input form-control my-2"
            id="password-text"
            aria-describedby="Password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-center my-4">
            <button type="submit" id="submit-login"
              className="login-btn btn btn-success w-25 mx-3"
              onClick={() => props.onSubmit(email, password)}
            >
              Login
            </button>
          </div>

          <Error message={props.errorMessage} />
        </div>
      </Card>
    </div>
  );
}

LoginForm.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};