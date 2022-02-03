/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import TitleBar from "./TitleBar";

it("Component renders without crashing", () => {
  shallow(
    <TitleBar
      size={1}
      title="test"
    />
  );
});