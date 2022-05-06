import { Container, Grid } from "@mui/material";
import React from "react";
import LandingCard from "./LandingCard";
import { Typography } from "@mui/material";

const LandingSectors = () => {
  return (
    <div>
      <Typography variant="h3">SEE FARM STANDS BY SECTOR:</Typography>
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
