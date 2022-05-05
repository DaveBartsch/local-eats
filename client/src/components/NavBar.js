import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
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
        <Link component={RouterLink} color="white" underline="none" to="/">
          <Button variant="contained" padding="1rem" color="success">
            Home
          </Button>
        </Link>
        {isAgent && (
          <Link component={RouterLink} color="white" underline="none" to="/add">
            <Button variant="contained" padding="1rem" color="success">
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
            <Button variant="contained" padding="1rem" color="success">
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
          >
            <Button variant="contained" padding="1rem" color="success">
              Logout
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
