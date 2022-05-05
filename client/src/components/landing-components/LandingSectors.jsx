import { Container, Grid } from "@mui/material";
import React from "react";
import LandingCard from "./LandingCard";

const LandingSectors = () => {
  return (
    <div>
      <h2> FIND LOCAL PRODUCE IN CALGARY:</h2>
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
