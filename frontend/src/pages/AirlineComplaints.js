import Grid from "@mui/material/Grid";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axiosInstance from "../components/Axios";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const AirportComplaints = () => {
  const { id } = useSelector((state) => state.user);
  const [admin, setAdmin] = useState([]);
  const [complaints, setComplaints] = useState([]);

  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);

  const resolveComplaint = async (pk, desc, pass, air) => {
    try {
      const result = await axiosInstance.put(`airline-complaint/${pk}/`, {
        description: desc,
        passenger: pass,
        admin: admin["id"],
        airline: air,
      });

      console.log(result);
      if (reload) {
        setReload(false);
      } else {
        setReload(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    try {
      const admin = await axiosInstance
        .get(`airline-admin/${id}/`)
        .then((response) => {
          setAdmin(response.data);
          axiosInstance
            .get(`airline-complaints/${response.data.airline}/`)
            .then((response) => {
              setComplaints(response.data);
            });
        });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }, [reload]);

  return (
    <>
      {loading ? (
        <Grid container justifyContent="center">
          <Grid item>
            <ClipLoader loading={loading} size={70} color={"#ffffff"} />
          </Grid>
        </Grid>
      ) : (
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h2" component="div" gutterBottom>
              {admin["airline_name"]} Complaints
            </Typography>
          </Grid>

          <Grid item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Complaint ID</TableCell>
                    <TableCell align="left">Passenger Email</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Resolve?</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {complaints.map((row) => (
                    <TableRow
                      key={row.pk}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{row.pk}</TableCell>
                      <TableCell align="left">{row.passenger_email}</TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="left">
                        {row.admin === null ? (
                          <Button
                            variant="contained"
                            onClick={() =>
                              resolveComplaint(
                                row.pk,
                                row.description,
                                row.passenger,
                                row.airline
                              )
                            }
                          >
                            Resolve
                          </Button>
                        ) : (
                          <Typography variant="h8">Resolved</Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default AirportComplaints;
