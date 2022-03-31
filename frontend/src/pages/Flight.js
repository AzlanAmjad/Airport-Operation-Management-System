import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Flight = () => {
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
            {flight.airline_name} - {flight.dep_time.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography>
          {flight.dep_time.match(/[0-9]{2}:[0-9]{2}/)} - {flight.arrival_time.match(/[0-9]{2}:[0-9]{2}/)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Flight;
