import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import { Link } from "@mui/material";
import {FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from "@mui/material";

const Login = () => {
  const hStyle = { color: "#f50057" };
  const lStyle = { color: "#000000" };
  const tStyle = { color: "rgb(11 0 249)" };
  const btnstyle = { margin: "20px 0", height: "5vh" };
  return (
    <Grid>
      <Box p={1} bgcolor="white" width={350} height={500} marginTop={2}>
        <Grid align="center">
          <Avatar src="/Login logo.png" />
          <h2 style={hStyle}>Login</h2>
        </Grid>
        <Grid container spacing={5}>
          <Grid item>
            <TextField
              label="Email"
              placeholder="Enter email"
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
        >
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography style={tStyle}>
          {" "}
          Don't have an account?
          <Link href="#">Create account</Link>
        </Typography>
        <FormControl>
          <RadioGroup>
            <FormControlLabel
              style={lStyle}
              value="passenger"
              control={<Radio />}
              label="Passenger"
            />
            <FormControlLabel
              style={lStyle}
              value="port admin"
              control={<Radio />}
              label="Airport Admin"
            />
            <FormControlLabel
              style={lStyle}
              value="line admin"
              control={<Radio />}
              label="Airline Admin"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Grid>
  );
};

export default Login;
