import { Button, Typography, Grid, TextField, Paper } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../components/Axios";

const Signup = () => {
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [SSN, setSSN] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // on click sign up
  const sign_up = async () => {
    
  };

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      py="20px"
      width="500px"
    >
      <Paper elevation={12} style={{ width: "100%" }}>
        <Grid item container direction="column" rowSpacing={4} padding="35px">
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <PersonAddIcon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography variant="h3">Sign Up</Typography>
            </Grid>
          </Grid>
          <Grid item container direction="row" spacing={3}>
            <Grid item xs={6}>
              <TextField
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                sx={{ ...hStyle }}
                placeholder="First Name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                sx={{ ...hStyle }}
                placeholder="Last Name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={SSN}
                onChange={(event) => {
                  setSSN(event.target.value);
                }}
                sx={{ ...hStyle }}
                placeholder="SSN"
                type="number"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
                sx={{ ...hStyle }}
                placeholder="Address"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
                sign_up();
              }}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography>Have an account already?</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <Link to="/login" style={{ color: "white" }}>
                  Log In
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Signup;
