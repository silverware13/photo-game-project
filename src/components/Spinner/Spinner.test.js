/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";

it("Component renders without crashing", () => {
  shallow(<Spinner loading={true} />);
});