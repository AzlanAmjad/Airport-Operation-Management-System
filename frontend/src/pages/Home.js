import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import Typography from "@mui/material/Typography";
import DatePicker from "@mui/lab/DatePicker";
import { styled } from "@mui/material/styles";

// state management
import { useState } from "react";

const Home = () => {
  // destinations from db
  const [destinations, setDestinations] = useState([
    {
      airport_code: "YVR",
      city: "Vancouver",
      country: "Canada",
    },
    {
      airport_code: "YYZ",
      city: "Toronto",
      country: "Canada",
    },
    {
      airport_code: "YEG",
      city: "Edmonton",
      country: "Canada",
    },
  ]);

  // input states
  const [destination, setDestination] = useState(null);
  const [departure, setDeparture] = useState(null);

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
        rowSpacing={5}
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
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={destinations.map((item) => {
                const dest = `${item.city} - ${item.airport_code}`;
                return dest;
              })}
              sx={{ width: 300 }}
              value={destination}
              onChange={(event, values) => {
                setDestination(values);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Destination"
                  sx={{
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
                  }}
                />
              )}
            />
          </Grid>
          <Grid item>
            <DatePicker
              inputFormat="MM/dd/yyyy"
              openTo="year"
              value={departure}
              onChange={(newDeparture) => {
                setDeparture(newDeparture);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "red",
                    },
                    "&.MuiOutlinedInput-notchedOutline.Mui-focused": {
                      borderColor: "red",
                    },
                    "& .MuiButtonBase-root.MuiIconButton-root": {
                      color: "white",
                    },
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" style={{ minWidth: "200px" }}>
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
