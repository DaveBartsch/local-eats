import { Typography } from "@mui/material";
import React from "react";
import LandingSectors from "../components/landing-components/LandingSectors";
import MapComponent from "../components/MapComponent";
import FarmStandList from "../components/FarmStandsList";

const LandingPage = () => {
  return (
    <div>
      <h1> Calgary Farm Stands:</h1>
      <MapComponent />

      <h2>ALL CALGARY FARM STANDS:</h2>
      <FarmStandList />
      <LandingSectors />
      {/* <Link component={RouterLink} underline="none" to="/all">
        <Button variant="contained" color="success">
          SEE ALL CALGARY FARM STANDS
        </Button>
      </Link> */}
    </div>
  );
};

export default LandingPage;
