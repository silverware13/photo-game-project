/*
Author:      Zachary Thomas
Created:     2/11/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import BrowsePage from "./BrowsePage";

it("Component renders without crashing", () => {
  shallow(<BrowsePage />);
});