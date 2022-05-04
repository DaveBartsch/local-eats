import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LoginForm from "../components/LogInForm";

const LoginPage = () => {
  return (
    <Box mt={3}>
      <Typography variant="h2">Login</Typography>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;