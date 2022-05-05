import { Container, Grid } from "@mui/material";
import React from "react";
import LandingCard from "./LandingCard";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const LandingSectors = () => {
  return (
    <div>
      <h1>SEE FARM STANDS BY SECTOR:</h1>
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
