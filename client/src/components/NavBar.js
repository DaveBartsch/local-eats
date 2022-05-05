import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link, Typography } from "@mui/material";
export default function NavBar(props) {
  const { loggedInUser } = props;
  const isAgent = loggedInUser?.isAgent;
  return (
<<<<<<< HEAD
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
=======
    <AppBar position="static" style={{ background: "#013220" }}>
      <Toolbar>
        <Link component={RouterLink} color="white" underline="none" to="/">
          <Button color="inherit">Home</Button>
        </Link>
        {isAgent && (
          <Link component={RouterLink} color="white" underline="none" to="/add">
            <Button color="inherit">Create a FarmStand</Button>
>>>>>>> 8ae7ac5635395f9b452b6ad1bd2ca959947e0c77
          </Link>
        )}
        {!loggedInUser && (
          <Link
            component={RouterLink}
            color="white"
            underline="none"
            to="/login"
<<<<<<< HEAD
            padding="1rem"
          >
            <Button variant="contained" padding="1rem" color="success">
              Login
            </Button>
=======
          >
            <Button color="inherit">Login</Button>
>>>>>>> 8ae7ac5635395f9b452b6ad1bd2ca959947e0c77
          </Link>
        )}
        {loggedInUser && (
          <Link
            component={RouterLink}
            color="white"
            underline="none"
            to="/logout"
          >
<<<<<<< HEAD
            <Button variant="contained" padding="1rem" color="success">
              Logout
            </Button>
          </Link>
        )}
=======
            <Button color="inherit">Logout</Button>
          </Link>
        )}
        <Typography align="center"> {loggedInUser?.username}</Typography>
>>>>>>> 8ae7ac5635395f9b452b6ad1bd2ca959947e0c77
      </Toolbar>
    </AppBar>
  );
}
