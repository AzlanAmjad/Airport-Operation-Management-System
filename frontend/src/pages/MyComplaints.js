import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ClipLoader } from "react-spinners";
import axiosInstance from "../components/Axios";

const MyComplaints = () => {
  const [loading, setLoading] = useState(true);
  const [passenger, setPassenger] = useState({});
  const [airportComplaints, setAirportComplaints] = useState([]);
  const [airlineComplaints, setAirlineComplaints] = useState([]);

  const { id } = useSelector((state) => state.user);

  useEffect(async () => {
    try {
      const passenger = await axiosInstance.get(`passenger/${id}`);
      console.log(passenger.data)
      setPassenger(passenger.data)
    } catch (err) {
      console.log(err);
    }

    setLoading(false)
  }, [id]);

  return (
    <>
      {loading ? (
        <Grid item>
          <ClipLoader loading={loading} size={70} color={"#ffffff"} />
        </Grid>
      ) : (
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          rowSpacing={5}
        >
          <Grid item>
            <Typography variant="h5" fontWeight="bold">
              Your complaints
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="flex-start"
            rowSpacing={2}
          >
            <Grid item>
              <Typography variant="h6">Airport Complaints</Typography>
            </Grid>
            {airportComplaints.length === 0 ? (
              <Grid item ml="20px">
                <Typography>No airport complaints</Typography>
              </Grid>
            ) : (
              <Grid item container ml="20px">
                map complaints here
              </Grid>
            )}
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="flex-start"
            rowSpacing={2}
          >
            <Grid item>
              <Typography variant="h6">Airline Complaints</Typography>
            </Grid>
            {airlineComplaints.length === 0 ? (
              <Grid item ml="20px">
                <Typography>No airline complaints</Typography>
              </Grid>
            ) : (
              <Grid item container ml="20px">
                map complaints here
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MyComplaints;
