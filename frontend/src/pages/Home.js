import {
  Paper,
  Grid,
  Button,
  TextField,
  Autocomplete,
  Typography,
  IconButton,
} from "@mui/material";
import * as React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

// state management
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  // fetch all destinations from API
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

  // fetch searched flights from API
  const [flights, setFlights] = useState([
    {
      flight_num: 0,
      airline_name: "Air Canada",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0,
    },
    {
      flight_num: 1,
      airline_name: "Air Canada",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0,
    },
    {
      flight_num: 2,
      airline_name: "Air Canada",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0,
    },
    {
      flight_num: 3,
      airline_name: "Air Canada",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0,
    },
    {
      flight_num: 4,
      airline_name: "Air Canada",
      dep_time: "1997-12-17 07:37:16-08",
      arrival_time: "1997-12-17 07:37:16-08",
      dest_code: "YYZ",
      plane_id: 0,
    },
    {
      flight_num: 5,
      airline_name: "Air Canada",
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
      // dest regex
      const dest_reg = /[A-Z]{3}/;
      // dest regex result
      const dest = destination.match(dest_reg);

      // date formatting
      const dep = moment(departure).format("YYYY-MM-DD");

      const params = {
        destination: dest[0],
        departure: dep,
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
              openTo="day"
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
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
          rowSpacing={3}
          my="50px"
        >
          <Grid item>
            <Typography variant="h6">Search Results</Typography>
          </Grid>

          {flights.map((flight) => {
            return (
              <Grid
                item
                key={`${flight.airline_name} - ${flight.flight_num}`}
                sx={{ width: "80%" }}
              >
                <Paper elevation={12} sx={{ padding: "30px" }}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    wrap="nowrap"
                  >
                    <Grid
                      item
                      container
                      direction="column"
                      alignItems="flex-start"
                      justifyContent="space-evenly"
                      rowSpacing={1}
                    >
                      <Grid item>
                        <Typography>
                          {flight.dep_time} - {flight.arrival_time}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>YYC - {flight.dest_code}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{flight.airline_name}</Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <IconButton
                        color="inherit"
                        onClick={() =>
                          navigate(
                            `/${flight.airline_name.replace(/\s+/g, "+")}/${
                              flight.flight_num
                            }/flight-details`
                          )
                        }
                      >
                        <ChevronRightIcon fontSize="large" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Grid>
  );
};

export default Home;
