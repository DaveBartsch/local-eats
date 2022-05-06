import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";

export default function NavBar(props) {
  const { loggedInUser } = props;
  const isAgent = loggedInUser?.isAgent;
  return (
    <AppBar
      position="static"
      style={{
        backgroundImage: `url("https://cdn.w600.comps.canstockphoto.ca/seamless-pattern-with-different-fresh-clip-art-vector_csp36423268.jpg")`,
      }}
    >
      <Toolbar>
        <Link
          component={RouterLink}
          color="white"
          underline="none"
          to="/"
          padding="1rem"
        >
          <Button variant="contained" color="success">
            Home
          </Button>
        </Link>

        <Link
          component={RouterLink}
          color="white"
          underline="none"
          to="/info"
          padding="1rem"
        >
          <Button variant="contained" color="success">
            Info
          </Button>
        </Link>

        <Link
          component={RouterLink}
          color="white"
          underline="none"
          to="/recipes"
          padding="1rem"
        >
          <Button variant="contained" color="success">
            Free Recipes
          </Button>
        </Link>

        {isAgent && (
          <Link
            component={RouterLink}
            color="white"
            underline="none"
            to="/add"
            padding="1rem"
          >
            <Button variant="contained" color="success">
              Create a FarmStand
            </Button>
          </Link>
        )}

        {!loggedInUser && (
          <Link
            component={RouterLink}
            color="white"
            underline="none"
            to="/login"
            padding="1rem"
          >
            <Button variant="contained" color="success">
              Login
            </Button>
          </Link>
        )}

        {loggedInUser && (
          <Link
            component={RouterLink}
            color="white"
            underline="none"
            to="/logout"
            padding="1rem"
          >
            <Button variant="contained" color="success">
              Logout
            </Button>
          </Link>
        )}
        <Typography align="center"> {loggedInUser?.username}</Typography>
      </Toolbar>
    </AppBar>
  );
}
