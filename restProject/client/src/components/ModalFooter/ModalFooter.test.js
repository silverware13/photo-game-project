/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import ModalFooter from "./ModalFooter";

it("Component renders without crashing", () => {
  shallow(
    <ModalFooter
      className="test"
    />
  );
});