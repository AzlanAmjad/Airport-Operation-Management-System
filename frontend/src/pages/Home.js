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
import axiosInstance from "../components/Axios";

// state management
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  // fetch all destinations from API
  const [destinations, setDestinations] = useState([]);

  // show flights boolean value
  const [showFlights, setShowFlights] = useState(false);

  // fetch searched flights from API
  const [flights, setFlights] = useState([]);

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
  useEffect(async () => {
    try {
      // get destinations
      const destinations = await axiosInstance.get("destinations/");
      setDestinations(destinations.data);
    } catch (err) {
      console.log(err);
    }

    if (dest_param && dep_param) {
      // search flights
      try {
        const flights = await axiosInstance.get(
          `flights/${dest_param}/${dep_param}/`
        );
        setFlights(flights.data);
      } catch (err) {
        console.log(err);
      }

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
          {flights.length === 0 ? (
            <Grid item>
              <Typography variant="h6">No Results</Typography>
            </Grid>
          ) : (
            <Grid item>
              <Typography variant="h6">Search Results</Typography>
            </Grid>
          )}

          {flights.map((flight) => {
            return (
              <Grid item key={flight.id} sx={{ width: "80%" }}>
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
                        <Typography fontWeight="bold">
                          {moment(flight.dep_time)
                            .utc()
                            .format("( MMMM DD, YYYY | HH:MM UTC )")}{" "}
                          -{" "}
                          {moment(flight.arrival_time)
                            .utc()
                            .format("( MMMM DD, YYYY | HH:MM UTC )")}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>
                          Calgary (YYC) - {flight.destination_city} (
                          {flight.destination})
                        </Typography>
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
