/*
Author:      Zachary Thomas
Created:     2/11/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Photo from "./Photo";

it("Component renders without crashing", () => {
  shallow(
    <Photo
      photoId={1}
      answer="Affenpinscher"
      imageUrl="/photos/dog1.jpg"
    />
  );
});