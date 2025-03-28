import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await axios.post("localhost:6000/api/user/login", {
        email,
        password,
      });
      console.log("login successful", data);
      setTimeout(() => navigate("/home"), 2000);
    } catch (err) {
      console.log("error", err);
      setError(err?.response.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f9",
        padding: 2,
      }}
      style={{ marginTop: "60px" }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        <Typography>
          {error && (
            <Typography
              color="error"
              variant="body2"
              align="center"
              gutterBottom
            >
              {error}
            </Typography>
          )}
        </Typography>
        <form onSubmit={handleLoginSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Box sx={{ mt: 3 }}>
            <Button type="submit" color="primary" fullWidth variant="contained">
              {loading ? <ClipLoader /> : "Login"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
