

import Grid from "@mui/material/Grid";
import * as React from "react";
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import axiosInstance from "../components/Axios";






const AirlineComplaints = () => {

    const [adminAirline, setAdminAirline] = useState("Air Canada")
    const [adminID, setAdminID] = useState(1);




    const [rows, setRows] = useState([
        { pk: null, description: null, passenger_email: null, admin: null }
    ]);

    const resolveComplaint = async (pk, desc, email) => {
        try {
            const result = await axiosInstance.put(`airline-complaint/${pk}/`, {
                admin: adminID
            });

            console.log(result);

            this.forceUpdate();

        } catch (err) {

            console.log(err);

        }


    };



    useEffect(() => {

        async function fetchData() {
            try {


                const allComplaints = await axiosInstance.get(`/airline-complaints/${1}`, {

                })
                    .then((response) => {
                        setRows(response.data);
                    });



            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);



    return (
        <Grid
            container
            justifyContent="center"

        >
            <Grid item xs={12}>
                <Typography variant="h1" component="div" gutterBottom>
                    {adminAirline}: Complaints
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
                                <TableCell align="center">Resolve?</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.pk}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" >
                                        {row.pk}
                                    </TableCell>
                                    <TableCell align="left">{row.passenger_email}</TableCell>
                                    <TableCell align="left">{row.description}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" onClick={() => resolveComplaint(row.pk, row.description, row.passenger_email)} >Resolve</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid >

        </Grid >
    );
}

export default AirlineComplaints;