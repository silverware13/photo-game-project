/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import Card from "../../components/Card/Card";
import TextBlurb from "../../components/TextBlurb/TextBlurb";
import "./Error404Page.scss";

// Page for displaying 404 errors.
export default function Error404Page() {
  return (
    <div className="page-404 pt-5 mb-4">
      <Card title="Page Not Found">
        <div className="my-5">
          <TextBlurb
            title="404"
            paragraph="Sorry! The page you are looking for was not found."
            icon="exclamation-triangle"
          />
        </div>
      </Card>
    </div>
  );
}