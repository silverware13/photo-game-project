/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import LoginForm from "./LoginForm";

it("Component renders without crashing", () => {
  shallow(
    <LoginForm
      errorMessage="You must enter an email address."
      onSubmit={() => { }}
      onSkip={() => { }}
    />
  );
});