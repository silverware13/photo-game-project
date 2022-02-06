/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { useHistory } from "react-router-dom";
import "./SignOutButton.scss";

// A sign out button on the navbar.
export default function SignOutButton() {
  const history = useHistory();

  // Sign out the user and return to the login page.
  function signOut() {
    localStorage.setItem("idToken", "");
    history.push("/login");
  }

  return (
    <button
      type="button"
      className="sign-out-button btn btn-dark"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}