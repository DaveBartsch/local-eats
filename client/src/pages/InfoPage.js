import React from "react";
import LandingInfo from "../components/landing-components/LandingInfo";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const InfoPage = () => {
  return (
    <div>
      <LandingInfo />
      <Link component={RouterLink} color="white" underline="none" to="/">
        <Button variant="contained" color="success">
          GO BACK HOME
        </Button>
      </Link>
    </div>
  );
};

export default InfoPage;
