import { Grid, Typography, Paper, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../components/Axios";

const Flight = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  // state letting us know we are still loading data
  const [loading, setLoading] = useState(true);

  // fetch flight from API
  const [flight, setFlight] = useState({});

  // fetch fares for this flight from API
  const [fares, setFare] = useState([]);

  useEffect(async () => {
    try {
      // get flight
      const flight = await axiosInstance.get(`flight/${id}`);
      console.log(flight.data);
      setFlight(flight.data);
    } catch (err) {
      console.log(err);
    }

    try {
      // get fares
      const fares = await axiosInstance.get(`fares/${id}`);
      console.log(fares.data);
      setFare(fares.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }, [id]);

  return (
    <>
      {loading ? (
        <Grid item>
          <ClipLoader loading={loading} size={70} />
        </Grid>
      ) : (
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
              <Typography variant="h6">Select Fare to</Typography>
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
      )}
    </>
  );
};

export default Flight;
