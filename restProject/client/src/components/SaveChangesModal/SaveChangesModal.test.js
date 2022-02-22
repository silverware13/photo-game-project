/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import SaveChangesModal from "./SaveChangesModal";

test("Component renders without crashing", () => {
  shallow(
    <SaveChangesModal
      showModal={true}
      title="Delete object?"
      content="Are you sure that you want to delete this object?"
      onClose={() => { }}
      onSave={() => { }}
      onNoSave={() => { }}
    />
  );
});