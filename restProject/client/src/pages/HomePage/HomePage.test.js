/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import HomePage from "./HomePage";

it("Component renders without crashing", () => {
  shallow(<HomePage />);
});