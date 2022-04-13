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
          rowSpacing={4}
        >
          <Grid item>
            <Typography variant="h5" fontWeight="bold">
              Your complaints
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MyComplaints;
