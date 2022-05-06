import { Typography } from "@mui/material";
import React from "react";
import LandingSectors from "../components/landing-components/LandingSectors";
import MapComponent from "../components/MapComponent";
import FarmStandList from "../components/FarmStandsList";
import SectorButtons from "../components/SectorButtons";

const LandingPage = () => {
  return (
    <div>
      <h1> Locally Grown Food in Calgary:</h1>
      <MapComponent />
      <br />

      <SectorButtons />
      <br />

      <FarmStandList />
    </div>
  );
};

export default LandingPage;
