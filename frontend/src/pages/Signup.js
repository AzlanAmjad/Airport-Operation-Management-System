import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import { Link } from "@mui/material";

const Signup = () => {
  const hStyle = { color: "#f50057" };
  const tStyle = { color: "rgb(11 0 249)" };
  const btnstyle = { margin: "20px 0", height: "5vh" };
  return (
    <Grid>
      <Box p={1} bgcolor="white" width={450} height={550} marginTop={2}>
        <Grid align="center">
          <Avatar src="/Signup.png" />
          <h2 style={hStyle}>Sign Up</h2>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              placeholder="Enter first name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              placeholder="Enter last name"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField label="SSN" placeholder="Enter SSN" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Address"
              placeholder="Enter address"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <TextField label="Email" placeholder="Enter email" fullWidth required />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
        >
          Create an Account
        </Button>
        <Typography style={tStyle}>
          Have an account already?
          <Link style={hStyle} href="#">
            Log in
          </Link>
        </Typography>
      </Box>
    </Grid>
  );
};

export default Signup;
