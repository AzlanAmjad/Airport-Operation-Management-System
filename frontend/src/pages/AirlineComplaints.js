

import Grid from "@mui/material/Grid";
import * as React from "react";
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

function createData(id, email, description) {
    return { id, email, description };
}

const rows = [
    createData(0, 'passenger1@email.com', 'worst experience in my life'),
    createData(1, 'passenger1@email.com', 'worst experience in my life'),
    createData(2, 'passenger1@email.com', 'worst experience in my life'),
    createData(3, 'passenger1@email.com', 'worst experience in my life'),
    createData(4, 'passenger1@email.com', 'worst experience in my life'),
];

const AirlineComplaints = () => {

    const [adminAirline, setAdminAirline] = useState("Air Canada")


    const resolveButton = (

        <Button variant="contained">Resolve</Button>

    );


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
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell >
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.description}</TableCell>
                                    <TableCell align="right">{resolveButton}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid >
    );
}

export default AirlineComplaints;