
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { useState } from "react";


const Welcome = () => {

    const [adminAirline, setAdminAirline] = useState("Air Canada")


    return (
        <Grid
            container
            justifyContent="center"

        >
            <Grid item xs={12}>
                <Typography variant="h1" component="div" gutterBottom>
                    Welcome to {adminAirline}'s Dashboard
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Welcome;