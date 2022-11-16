/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React, { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import LoginForm from "./LoginForm/LoginForm";
import Spinner from "../../components/Spinner/Spinner";
import apiRequest from "../../utilities/apiRequest";
import { useHistory } from "react-router-dom";
import { API } from "../../utilities/constants";
import "./LoginPage.scss";

// Page for users to login to their account.
export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // Attempts to login a user using the API.
  async function submit(email, password) {
    if (!email.length) {
      setErrorMessage("Please enter an email.");

    } else if (!password.length) {
      setErrorMessage("Please enter a password.");

    } else {
      const requestBody = {
        email: email,
        password: password
      }

      setLoading(true);
      const [response, responseBody] = await apiRequest(
        `${API}/user/login`,
        "POST",
        requestBody
      );
      setLoading(false);

      if (response.ok) {
        setErrorMessage("");
        history.push("/");

      } else {
        if (response.status < 500 && responseBody.error) {
          setErrorMessage(responseBody.error);
        } else {
          setErrorMessage("Internal server error. Unable to login.");
        }
      }
    }
  }

  return (
    <div className="page-login mb-4">
      <Spinner loading={loading} />

      <PageTitle title={`User Login`} />

      <LoginForm
        errorMessage={errorMessage}
        onSubmit={(email, password) => submit(email, password)}
      />
    </div>
  );
}