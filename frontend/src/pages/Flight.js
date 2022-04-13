import { Grid, Typography, Paper, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Flight = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  // fetch flight from API
  const [flight, setFlight] = useState({
    flight_num: 3,
    airline_name: "WestJet",
    dep_time: "1997-12-17 07:37:16-08",
    arrival_time: "1997-12-17 07:37:16-08",
    dest_code: "YYZ",
    plane_id: 0,
  });

  // fetch fares for this flight from API
  const [fares, setFare] = useState([
    {
      fare_id: 1,
      price: "600",
      cabin: "First",
      tickets: 150,
    },
    {
      fare_id: 2,
      price: "500",
      cabin: "Business",
      tickets: 200,
    },
    {
      fare_id: 3,
      price: "400",
      cabin: "Premium Economy",
      tickets: 300,
    },
    {
      fare_id: 4,
      price: "300",
      cabin: "Economy",
      tickets: 600,
    },
  ]);

  useEffect(async () => {
    try {
      // get flight

    }
    catch (err) {

    }
  }, [id])

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
          <Typography variant="h4">Calgary to </Typography>
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
        alignItems="center"
        justifyContent="space-evenly"
        rowSpacing={3}
        my="50px"
      >
        <Grid item>
          <Typography variant="h6">
            Select Fare to 
          </Typography>
        </Grid>

        {fares.map((fare) => {
          return (
            <Grid item key={`${fare.fare_id}`} sx={{ width: "inherit" }}>
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
                    <Grid item variant="h5" fontWeight="bold">
                      CA ${fare.price}
                    </Grid>
                    <Grid item>
                      <Typography>{fare.cabin} Class</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{fare.tickets} Tickets Left</Typography>
                    </Grid>
                  </Grid>
                  <Grid item mr={2}>
                    <IconButton color="inherit" onClick={() => {}}>
                      <AddShoppingCartIcon fontSize="large" />
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
