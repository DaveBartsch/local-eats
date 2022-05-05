import { Typography } from "@mui/material";
import React from "react";
import LandingInfo from "../components/landing-components/LandingInfo";
import LandingSectors from "../components/landing-components/LandingSectors";
import MapComponent from "../components/MapComponent";

const LandingPage = () => {
  return (
    <div>
      <img
        width="100%"
        src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2021/08/farmers-market-produce-0812211.jpg"
        alt="http://farmgrants.ca/wp-content/uploads/2018/04/vegetables-basket_fyE57FBd_L-1024x681.jpg"
      />
      <h1> Calgary Farm Stands:</h1>
      <MapComponent />
      <LandingSectors />
    </div>
  );
};

export default LandingPage;
