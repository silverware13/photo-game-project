/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

it("Component renders without crashing - single tag", () => {
  shallow(
    <Card title="Example Title" />
  );
});

it("Component renders without crashing - two tags, empty", () => {
  shallow(
    <Card title="Example Title">
    </Card>
  );
});

it("Component renders without crashing - two tags, with content", () => {
  shallow(
    <Card title="Example Title">
      <p>Example Content</p>
    </Card>
  );
});