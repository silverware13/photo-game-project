/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import ModalHeader from "./ModalHeader";

it("Component renders without crashing", () => {
  shallow(
    <ModalHeader
      className="test"
    />
  );
});