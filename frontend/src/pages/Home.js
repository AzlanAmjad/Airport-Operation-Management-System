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
  // static destinations
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

  // static searched flights data
  const [flights, setFlights] = useState([
    {
      flight_num: 0,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0
    },
    {
      flight_num: 1,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0
    },
    {
      flight_num: 2,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0
    },
    {
      flight_num: 3,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0
    },
    {
      flight_num: 4,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0
    },
    {
      flight_num: 5,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0
    },
  ])

  // input states
  const [destination, setDestination] = useState(null);
  const [departure, setDeparture] = useState(null);

  // search
  const search = () => {

  }
  
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      rowSpacing={5}
      wrap="nowrap"
      height="700px"
    >
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        rowSpacing={4}
        wrap="nowrap"
      >
        <Grid item>
          <Typography variant="h1" component="div" gutterBottom>
            Find a Flight
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          spacing={2}
          rowSpacing={3}
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
                  placeholder="Departure Date"
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
          <Button variant="contained" sx={{ minWidth: "200px" }} onClick={search}>
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
