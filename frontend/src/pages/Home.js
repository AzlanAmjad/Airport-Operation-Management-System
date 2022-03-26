import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import Typography from "@mui/material/Typography";
import DatePicker from "@mui/lab/DatePicker";
import { styled } from "@mui/material/styles";

const Home = () => {
  const cities = ["Edmonton", "Calgary", "Toronto"];

  const departure = []; // Departure date -> turn to useState hook
  const setDeparture = () => {};

  // styled autocomplete
  const StyledAutocomplete = styled(Autocomplete)({
    "& .MuiAutocomplete-inputRoot": {
      color: "white",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "& .MuiButtonBase-root.MuiAutocomplete-clearIndicator": {
        color: "red",
      },
      "& .MuiButtonBase-root.MuiAutocomplete-popupIndicator": {
        color: "white",
      },
    },
  });

  // styled date picker
  const StyledDatePicker = styled(DatePicker)({

  });

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      rowSpacing={5}
      wrap="nowrap"
      height="400px"
    >
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        rowSpacing={3}
        wrap="nowrap"
      >
        <Grid item>
          <Typography variant="h2" component="div" gutterBottom>
            Find a Flight
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <StyledAutocomplete
              disablePortal
              id="combo-box-demo"
              options={cities /* Add full cities*/}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Destination"
                />
              )}
            />
          </Grid>
          <Grid item>
            <StyledDatePicker
              inputFormat="mm/dd/yyyy"
              value={departure}
              onChange={setDeparture}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" style={{ minWidth: "200px" }}>
            {" "}
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <p>Search results go here</p>
      </Grid>
    </Grid>
  );
};

export default Home;
