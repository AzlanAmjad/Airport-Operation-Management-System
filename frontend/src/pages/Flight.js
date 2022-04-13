import { Grid, Typography, Paper, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/cart/cartSlice";
import axiosInstance from "../components/Axios";
import moment from "moment";

const Flight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { passenger } = useSelector((state) => state.user);
  const { airport_admin } = useSelector((state) => state.user);
  const { airline_admin } = useSelector((state) => state.user);
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
      setFlight(flight.data);
    } catch (err) {
      console.log(err);
    }

    try {
      // get fares
      const fares = await axiosInstance.get(`fares/${id}`);
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
          <ClipLoader loading={loading} size={70} color={"#ffffff"} />
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
              <Typography variant="h4">
                Calgary to {flight.destination_city}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                {flight.airline_name} -{" "}
                {moment(flight.dep_time).utc().format("MMMM DD, YYYY")}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>
              {moment(flight.dep_time).utc().format("HH:mm UTC")} -{" "}
              {moment(flight.arrival_time).utc().format("HH:mm UTC")}
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
            {fares.length === 0 ? (
              <Grid item>
                <Typography variant="h6">
                  No Available Fare to {flight.destination_city}
                </Typography>
              </Grid>
            ) : (
              <Grid item>
                <Typography variant="h6">
                  Select Fare to {flight.destination_city}
                </Typography>
              </Grid>
            )}

            {fares.map((fare) => {
              return (
                <Grid item key={`${fare.id}`} sx={{ width: "inherit" }}>
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
                          <Typography>
                            {fare.tickets_quantity} Tickets Left
                          </Typography>
                        </Grid>
                      </Grid>
                      {!airport_admin && !airline_admin && (
                        <Grid item mr={2}>
                          <IconButton
                            color="inherit"
                            onClick={() => {
                              if (passenger) {
                                dispatch(add({ ...fare, type: "fare" }));
                              } else {
                                navigate("/login");
                              }
                            }}
                          >
                            <AddShoppingCartIcon fontSize="large" />
                          </IconButton>
                        </Grid>
                      )}
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
