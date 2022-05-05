import { Grid, Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LandingCard = (props) => {
  const name = props.name;
  return (
    <Grid item xs={6} height="10rem" width="20rem">
      <Button color="success">
        <Container>
          <Button height="10rem" width="15rem">
            <h1>
              <Link to={`/${name}/`}>{name}</Link>
            </h1>
          </Button>
        </Container>
      </Button>
    </Grid>
  );
};

export default LandingCard;
