/*
Author:      Zachary Thomas
Created:     2/21/2022
Modified:    2/21/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import AlbumModal from "./AlbumModal";

test("Component renders without crashing", () => {
  shallow(
    <AlbumModal
      mode="edit"
      showModal={true}
      album={{
        albumId: 1,
        name: "Dogs"
      }}
      onClose={() => { }}
      onChange={() => { }}
      onDelete={() => { }}
    />
  );
});