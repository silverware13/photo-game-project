/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import SignOutButton from "./SignOutButton";

it("Component renders without crashing", () => {
  shallow(
    <SignOutButton />
  );
});