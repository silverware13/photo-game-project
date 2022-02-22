/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import ConfirmModal from "./ConfirmModal";

test("Component renders without crashing", () => {
  shallow(
    <ConfirmModal
      showModal={true}
      title="Delete object?"
      content="Are you sure that you want to delete this object?"
      yesText="Delete object"
      noText="Cancel"
      danger={true}
      onClose={() => { }}
      onYes={() => { }}
      onNo={() => { }}
    />
  );
});