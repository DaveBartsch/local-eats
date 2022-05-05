import { Typography } from "@mui/material";
import React from "react";
import LandingInfo from "../components/landing-components/LandingInfo";
import LandingSectors from "../components/landing-components/LandingSectors";
import MapComponent from "../components/MapComponent";

const LandingPage = () => {
  return (
    <div>
      <h1> Calgary Farm Stands:</h1>
      <MapComponent />
      <LandingSectors />
    </div>
  );
};

export default LandingPage;
