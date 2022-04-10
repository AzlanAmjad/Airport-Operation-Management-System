import * as React from "react";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'





const MyComplaints = () => {

    const [user, setUser] = useState("Passenger1");
    const [complaints, setComplaints] = useState([

        { id: 0, against: 'YYC International Airport', description: 'This place trash', resolved: 'email' },
        { id: 0, against: 'YYC International Airport', description: 'This place trash', resolved: 'email' },
        { id: 0, against: 'YYC International Airport', description: 'This place trash', resolved: null },
        { id: 0, against: 'YYC International Airport', description: 'This place trash', resolved: null },
        { id: 0, against: 'YYC International Airport', description: 'This place trash', resolved: null },

    ]);




    return (

        <Grid
            container
            justifyContent="center"
            spacing={5}

        >
            <Grid item xs={12}>
                <Typography variant="h2" component="div" gutterBottom>
                    {user}'s Complaints
                </Typography>
            </Grid>

            <Grid item>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Complaint ID</TableCell>
                                <TableCell align="left">Against</TableCell>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="left">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {complaints.map((complaint) => (
                                <TableRow
                                    key={complaint.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell >
                                        {complaint.id}
                                    </TableCell>
                                    <TableCell align="left">{complaint.against}</TableCell>
                                    <TableCell align="left">{complaint.description}</TableCell>
                                    <TableCell align="left">{!complaint.resolved ? (<Typography variant="h8" color="red">Not Resolved</Typography>)
                                        : (<Typography variant="h8" color="green">Resolved</Typography>)}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>


        </Grid>



    );
}

export default MyComplaints;