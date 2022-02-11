/*
Author:      Zachary Thomas
Created:     2/11/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Album from "./Album";

it("Component renders without crashing", () => {
  shallow(
    <Album
      albumId={1}
      name={"dogs"}
      personalHighScore={10}
      globalHighScore={25}
      globalUser={"Test User"}
    />
  );
});