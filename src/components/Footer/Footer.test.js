/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

it("Component renders without crashing", () => {
  shallow(<Footer />);
});