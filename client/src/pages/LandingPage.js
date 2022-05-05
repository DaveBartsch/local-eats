import { Typography } from "@mui/material";
import React from "react";
import LandingInfo from "../components/landing-components/LandingInfo";
import LandingSectors from "../components/landing-components/LandingSectors";
import MapComponent from "../components/MapComponent";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const LandingPage = () => {
  return (
    <div>
      <h1> Calgary Farm Stands:</h1>
      <MapComponent />
      <Link component={RouterLink} underline="none" to="/all">
        <Button variant="contained" color="success">
          SEE ALL CALGARY FARM STANDS
        </Button>
      </Link>

      {/* <LandingSectors /> */}
    </div>
  );
};

export default LandingPage;
