import React from "react";

import "fontsource-roboto";
import Topography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import HeadBar from "./HeadBar";

function HeaderSection() {
  return (
    <div className="HeaderSection">
      <div>
        <Navbar />
      </div>
      <div className="header_info">
        <Topography variant="h2">DATA IS POWERFUL</Topography>
        <Topography variant="body1">
          find all the countries' info you need...
        </Topography>
      </div>
      <div>
        <HeadBar />
      </div>
    </div>
  );
}

export default HeaderSection;
