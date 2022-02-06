/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Error500Page from "./Error500Page";

it("Component renders without crashing", () => {
  shallow(<Error500Page />);
});