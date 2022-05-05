import { Typography } from "@mui/material";
import React from "react";
import FarmStandsList from "../components/FarmStandsList";
import LandingSectors from "../components/landing-components/LandingSectors";
const HomePage = () => {
  return (
    <div>
      <LandingSectors />
      <h1>SEE ALL FARM STANDS:</h1>
      <FarmStandsList />
    </div>
  );
};

export default HomePage;
