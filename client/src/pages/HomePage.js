import { Typography } from "@mui/material";
import React from "react";
import FarmStandsList from "../components/FarmStandsList";
import LandingSectors from "../components/landing-components/LandingSectors";
const HomePage = () => {
  return (
    <div>
      <LandingSectors />
      <Typography variant="h3">Calgary FarmStands List</Typography>
      <FarmStandsList />
    </div>
  );
};

export default HomePage;
