import { Button, Typography, Grid, TextField, Paper } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";

const Signup = () => {
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
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  };

  return (
    <Grid item container direction="column" alignItems="center" py="20px" width="500px">
      <Paper elevation={12} style={{width: "100%"}}>
        <Grid item container direction="column" rowSpacing={4} padding="35px" >
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
                sx={{ ...hStyle }}
                placeholder="First Name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ ...hStyle }}
                placeholder="Last Name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ ...hStyle }}
                placeholder="SSN"
                type="number"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ ...hStyle }}
                placeholder="Address"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ ...hStyle }}
                placeholder="Email"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ ...hStyle }}
                placeholder="Password"
                type="password"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ minWidth: "200px" }}>
              Create Account
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
