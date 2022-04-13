import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ClipLoader } from "react-spinners";

const MyComplaints = () => {
  const [loading, setLoading] = useState(false);
  const [airportComplaints, setAirportComplaints] = useState([]);
  const [airlineComplaints, setAirlineComplaints] = useState([]);

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
