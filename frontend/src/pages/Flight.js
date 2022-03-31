import { Grid, Typography, Paper, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Flight = () => {
  const navigate = useNavigate();

  const { airline, flight_num } = useParams();
  const airline_name = airline.replace(/\++/g, " ");

  // fetch flight from API
  const [flight, setFlight] = useState({
    flight_num: flight_num,
    airline_name: airline_name,
    dep_time: "1997-12-17 07:37:16-08",
    arrival_time: "1997-12-17 07:37:16-08",
    dest_code: "YYZ",
    plane_id: 0,
  });

  // fetch destination from API
  const [destination, setDestination] = useState({
    airport_code: "YYZ",
    city: "Toronto",
    country: "Canada",
  });

  // tickets aggregated based on their type for this flight
  const [fares, setFare] = useState([
    {
      cabin: "First",
      tickets: 150,
    },
    {
      cabin: "Business",
      tickets: 200,
    },
    {
      cabin: "Premium Economy",
      tickets: 300,
    },
    {
      cabin: "Economy",
      tickets: 600,
    },
  ]);

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      wrap="nowrap"
      width="70%"
      paddingY="50px"
      rowSpacing={4}
    >
      <Grid
        item
        container
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        rowSpacing={1}
      >
        <Grid item>
          <Typography variant="h4">Calgary to {destination.city}</Typography>
        </Grid>
        <Grid item>
          <Typography>
            {flight.airline_name} -{" "}
            {flight.dep_time.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography>
          {flight.dep_time.match(/[0-9]{2}:[0-9]{2}/)} -{" "}
          {flight.arrival_time.match(/[0-9]{2}:[0-9]{2}/)}
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItem="center"
        justifyContent="space-evenly"
        rowSpacing={3}
        my="50px"
      >
        <Grid item>
          <Typography variant="h6">
            Select Fare to {destination.city}
          </Typography>
        </Grid>

        {fares.map((fare) => {
          return (
            <Grid item key={`${fare.cabin}`} sx={{ width: "inherit" }}>
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
                      <Typography fontWeight="bold">{fare.cabin}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{fare.tickets} Tickets Left</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <IconButton color="inherit" onClick={() => {}}>
                      <ChevronRightIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Flight;
