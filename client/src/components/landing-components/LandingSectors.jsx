import { Container, Grid } from "@mui/material";
import React from "react";
import LandingCard from "./LandingCard";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const LandingSectors = () => {
  return (
    <div>
      <h2>SEE FARM STANDS BY SECTOR:</h2>
      <Container>
        <Grid container>
          <LandingCard name="NW" />
          <LandingCard name="NE" />
          <LandingCard name="SW" />
          <LandingCard name="SE" />
        </Grid>
      </Container>
    </div>
  );
};

export default LandingSectors;
