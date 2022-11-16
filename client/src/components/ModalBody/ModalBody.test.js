/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import ModalBody from "./ModalBody";

it("Component renders without crashing", () => {
  shallow(
    <ModalBody
      className="test"
    />
  );
});