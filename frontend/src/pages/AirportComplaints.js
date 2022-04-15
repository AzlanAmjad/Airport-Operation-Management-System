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
  const [adminData, setAdminData] = useState([]);
  const [rows, setRows] = useState([]);

  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

  const resolveComplaint = async (pk, desc, pass) => {
    console.log(adminData);
    try {
      const result = await axiosInstance.put(`airport-complaint/${pk}/`, {
        description: desc,
        passenger: pass,
        admin: adminData["admin_id"],
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
      const allComplaints = await axiosInstance
        .get(`airport-complaints/`, {})
        .then((response) => {
          setRows(response.data);
        });
      const adminID = await axiosInstance
        .get(`airport-admin/${id}/`)
        .then((response) => {
          setAdminData(response.data);
        });
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  }, [reload]);

  return (
    <>
      {loading ? (
        <Grid item>
          <ClipLoader loading={loading} size={70} />
        </Grid>
      ) : (
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h1" component="div" gutterBottom>
              YYC Internation Airport: Complaints
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
                  {rows.map((row) => (
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
                                row.passenger
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
