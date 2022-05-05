import { Grid, Button, Container, ButtonGroup } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LandingCard = (props) => {
  const name = props.name;
  return (
    <Grid item xs={6} height="10rem" width="20rem">
      <Container>
        <Button height="10rem" width="50">
          <h1>
            <Link to={`/${name}/`}>{name}</Link>
          </h1>
        </Button>
      </Container>
    </Grid>
  );
};

export default LandingCard;
