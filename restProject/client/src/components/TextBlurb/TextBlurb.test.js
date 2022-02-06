/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import TextBlurb from "./TextBlurb";

it("Component renders without crashing", () => {
  shallow(
    <TextBlurb
      title="Title"
      paragraph="This is example text."
      icon="exclamation-triangle"
    />
  );
});