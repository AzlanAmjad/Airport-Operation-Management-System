import {
  Button,
  Typography,
  TextField,
  Grid,
  Paper,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

const Login = () => {
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
      "MozAppearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "WebkitAppearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "WebkitAppearance": "none",
      margin: 0,
    },
  };

  <Grid item>
    <FormControl>
      <RadioGroup row>
        <FormControlLabel
          value="passenger"
          control={<Radio size="small" />}
          label="Passenger"
        />
        <FormControlLabel
          value="airport admin"
          control={<Radio size="small" />}
          label="Airport Admin"
        />
        <FormControlLabel
          value="airline admin"
          control={<Radio size="small" />}
          label="Airline Admin"
        />
      </RadioGroup>
    </FormControl>
  </Grid>;

  return (
    <Grid item container direction="column" alignItems="center" py="20px" width="400px">
      <Paper elevation={12} style={{width: "100%"}}>
        <Grid item container direction="column" rowSpacing={4} padding="35px" >
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
                sx={{ ...hStyle }}
                placeholder="Email"
                fullWidth
                required
              />
            </Grid>
            <Grid item>
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
            <Button variant="contained" sx={{ minWidth: "150px" }}>
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
