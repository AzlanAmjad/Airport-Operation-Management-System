import {
  Paper,
  Grid,
  Button,
  TextField,
  Autocomplete,
  Typography,
} from "@mui/material";
import * as React from "react";
import DatePicker from "@mui/lab/DatePicker";
import { useSearchParams } from "react-router-dom";

// state management
import { useState, useEffect } from "react";

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

  // show flights boolean value
  const [showFlights, setShowFlights] = useState(false);
  // static searched flights data
  const [flights, setFlights] = useState([
    {
      flight_num: 0,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0,
    },
    {
      flight_num: 1,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0,
    },
    {
      flight_num: 2,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0,
    },
    {
      flight_num: 3,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0,
    },
    {
      flight_num: 4,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0,
    },
    {
      flight_num: 5,
      airline_name: "Air Canada",
      category: "Economy",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0,
    },
  ]);

  // input states
  const [destination, setDestination] = useState(null);
  const [departure, setDeparture] = useState(null);

  // search parameters
  const [searchParams, setSearchParams] = useSearchParams();

  // pull out the current search param
  const dest_param = searchParams.get("destination");
  const dep_param = searchParams.get("departure");

  // useEffect hook which will only run when search params change
  // will fetch from API here
  useEffect(() => {
    if (dest_param && dep_param) {
      setShowFlights(true);
    } else {
      setShowFlights(false);
    }
  }, [dest_param, dep_param]);

  // search
  const search = () => {
    if (destination && departure) {
      // date get ISO string
      const dep_string = departure.toISOString();

      // regex
      const dest_reg = /[A-Z]{3}/;
      const dep_reg = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;

      // regex result
      const dest = destination.match(dest_reg);
      const dep = dep_string.match(dep_reg);

      const params = {
        destination: dest[0],
        departure: dep[0],
      };

      setSearchParams(params);
    }
  };

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      rowSpacing={5}
      wrap="nowrap"
      minHeight="700px"
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
          <Button
            variant="contained"
            sx={{ minWidth: "200px" }}
            onClick={() => {
              search();
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      {showFlights && (
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <Paper>
              hello
            </Paper>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Home;
