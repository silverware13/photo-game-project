/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";

it("Component renders without crashing", () => {
  shallow(
    <Modal
      dialogClassName={"test"}
      show={true}
      onHide={() => { }}
      size="xl"
      animation
      centered
    />
  );
});