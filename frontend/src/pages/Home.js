import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import Typography from "@mui/material/Typography";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const Home = () => {
  const cities = ["Edmonton", "Calgary", "Toronto"];

  const departure = []; // Departure date -> turn to useState hook
  const setDeparture = () => {};

  return (
    <Grid container alignItems="baseline" rowSpacing={3}>
      <Grid item container justifyContent="center">
        <Typography variant="h2" component="div" gutterBottom>
          Find a Flight
        </Typography>
      </Grid>
      <Grid item container justifyContent="center" spacing={2}>
        <Grid item>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cities /* Add full cities*/}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Destination" />
            )}
          />
        </Grid>
        <Grid item>
          <DesktopDatePicker
            label="Departure Date"
            inputFormat="MM/dd/yyyy"
            value={departure}
            onChange={setDeparture}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <Button variant="contained" style={{ minWidth: "200px" }}>
          {" "}
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
