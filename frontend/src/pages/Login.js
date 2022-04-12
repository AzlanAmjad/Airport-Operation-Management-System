import { Button, Typography, TextField, Grid, Paper } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const hStyle = {
    svg: "white",
    input: "white",
    label: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
    "&.MuiOutlinedInput-notchedOutline.Mui-focused": {
      borderColor: "red",
    },
    "& .MuiButtonBase-root.MuiAutocomplete-clearIndicator": {
      color: "red",
    },
    "& .MuiButtonBase-root.MuiAutocomplete-popupIndicator": {
      color: "white",
    },
    "& input[type=number]": {
      MozAppearance: "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  };

  // input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // on click log in
  const log_in = async () => {

    navigate("/")
  };

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      py="20px"
      width="400px"
    >
      <Paper elevation={12} style={{ width: "100%" }}>
        <Grid item container direction="column" rowSpacing={4} padding="35px">
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <PersonIcon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography variant="h3">Log In</Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column" rowSpacing={3}>
            <Grid item>
              <TextField
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                sx={{ ...hStyle }}
                placeholder="Email"
                fullWidth
                required
              />
            </Grid>
            <Grid item>
              <TextField
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                sx={{ ...hStyle }}
                placeholder="Password"
                type="password"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{ minWidth: "150px" }}
              onClick={() => {
                log_in();
              }}
            >
              Log In
            </Button>
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography>Don't have an account yet?</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <Link to="/signup" style={{ color: "white" }}>
                  Sign Up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
