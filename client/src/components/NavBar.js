import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link, Typography } from "@mui/material";
export default function NavBar(props) {
  const { loggedInUser } = props;
  const isAgent = loggedInUser?.isAgent;
  return (
    <AppBar position="static" style={{ background: "#013220" }}>
      <Toolbar>
        <Link component={RouterLink} color="white" underline="none" to="/">
          <Button color="inherit">Home</Button>
        </Link>
        {isAgent && (
          <Link component={RouterLink} color="white" underline="none" to="/add">
            <Button color="inherit">Create a FarmStand</Button>
          </Link>
        )}
        {!loggedInUser && (
          <Link
            component={RouterLink}
            color="white"
            underline="none"
            to="/login"
          >
            <Button color="inherit">Login</Button>
          </Link>
        )}
        {loggedInUser && (
          <Link
            component={RouterLink}
            color="white"
            underline="none"
            to="/logout"
          >
            <Button color="inherit">Logout</Button>
          </Link>
        )}
        <Typography align="right"> {loggedInUser?.username}</Typography>
      </Toolbar>
    </AppBar>
  );
}
