import React, { Component } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
//UserContext
import { useContext } from "react";
import { UserContext } from "../../../context/user";
//Snack
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SignIn = (props) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { setIsSignIn } = useContext(UserContext);

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const change = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const key = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (user.password != user.repassword) {
      setMessage("2 pass ijil biah ystoi");
      handleOpen();
      return;
    }
    if (!user.name || !user.email || !user.password) {
      setMessage("Bugdiig buglunu uu");
      handleOpen();
      return;
    }
    if (user.password.length < 6) {
      setMessage("Pass zaaval 6aas deesh orontoi baih ystoi");
      handleOpen();
      return;
    }
    try {
      const res = await axios.post("http://localhost:8000/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
        role: "user",
        // ...user,
      });
      // props.handleClose();
      setIsSignIn(true);
      console.log("RES", res);
    } catch (err) {
      console.log("err", err);
      setMessage(err.response.data.message);
      handleOpen();
    }
  };

  // const handleClick = () => {
  //   setOpen(true);
  //   props.handleClose();
  //   props.setIsLogged("true");
  //   localStorage.setItem("isLogged", true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main" }}
            src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4000&q=80"
          >
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 0 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="UserName"
              name="name"
              label="User Name"
              onChange={change}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={change}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              onChange={change}
              InputLabelProps={{
                style: {
                  color: "green",
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="repassword"
              label="repeat password"
              type="password"
              onChange={change}
              id="repeat-password"
              autoComplete="repassword"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    setIsSignIn(true);
                  }}
                  variant="text"
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
