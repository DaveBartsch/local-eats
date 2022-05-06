import { Typography } from "@mui/material";
import React from "react";
import LandingSectors from "../components/landing-components/LandingSectors";
import MapComponent from "../components/MapComponent";
import FarmStandList from "../components/FarmStandsList";
import SectorButtons from "../components/SectorButtons";

const LandingPage = () => {
  return (
    <div>
      <h1> Calgary Farm Stands:</h1>
      <SectorButtons />
      <MapComponent />

      <h2>ALL CALGARY FARM STANDS:</h2>
      <FarmStandList />
    </div>
  );
};

export default LandingPage;
