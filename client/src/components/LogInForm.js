import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = async () => {
    const user = { username: username, password: password };
    const data = JSON.stringify(user);
    const response = await fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Box
        display="flex"
        flexDirection="column"
        mb={3}
        sx={{ width: "50%", margin: "auto" }}
      >
        <TextField
          label="Username"
          variant="standard"
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <TextField
          label="Password"
          variant="standard"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button variant="contained" onClick={() => onFormSubmit()}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;