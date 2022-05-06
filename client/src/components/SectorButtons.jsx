import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const SectorButtons = () => {
  return (
    <div>
      <ButtonGroup variant="contained" color="success">
        <Button>
          <Link component={RouterLink} color="white" underline="none" to="/nw">
            NW
          </Link>
        </Button>

        <Button>
          <Link component={RouterLink} color="white" underline="none" to="/ne">
            NE
          </Link>
        </Button>

        <Button>
          <Link component={RouterLink} color="white" underline="none" to="/sw">
            SW
          </Link>
        </Button>

        <Button>
          <Link component={RouterLink} color="white" underline="none" to="/se">
            SE
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default SectorButtons;
