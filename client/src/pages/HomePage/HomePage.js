/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./HomePage.scss";

// Home page.
export default function HomePage() {
  return (
    <div className="page-home mb-4">
      <PageTitle title="Welcome to the Photo Game!" />
    </div>
  );
}