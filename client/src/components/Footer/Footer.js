/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

import React from "react";
import "./Footer.scss";

// General footer.
export default function Footer() {
  const date = new Date();

  return (
    <footer className="general-footer py-1 px-3">
      &#xA9; {date.getYear() + 1900}, Created by Zachary Thomas. All rights reserved.
    </footer>
  );
}