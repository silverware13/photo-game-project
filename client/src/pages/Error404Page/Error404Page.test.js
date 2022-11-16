/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Error404Page from "./Error404Page";

it("Component renders without crashing", () => {
  shallow(<Error404Page />);
});