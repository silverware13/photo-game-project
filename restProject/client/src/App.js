/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React, { useEffect, Fragment } from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Error404Page from "./pages/Error404Page/Error404Page";
import Error500Page from "./pages/Error500Page/Error500Page";
import "./App.css";

// Handles page routing and getting theme data.
export default function App() {
  const currentPage = useLocation().pathname;
  const history = useHistory();

  // If the user is not logged in, bring them to the login page.
  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    if (!idToken || idToken.length === 0) {
      history.push("/login");
    }
  }, []);

  return (
    <Fragment>
      <Navbar title={"Photo Game Project"} currentPage={currentPage} />

      <main>
        <div className="app container">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/error-500">
              <Error500Page />
            </Route>

            <Route path="*">
              <Error404Page />
            </Route>
          </Switch>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
