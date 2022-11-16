/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import NavbarLink from "./NavbarLink";

it("Component renders without crashing", () => {
  shallow(
    <NavbarLink
      name="home"
      targetPage="/"
      currentPage="/"
    />
  );
});