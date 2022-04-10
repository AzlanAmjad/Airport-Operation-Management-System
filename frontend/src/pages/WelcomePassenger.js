
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { useState } from "react";


const WelcomePassenger = () => {

    const [passName, setPassName] = useState("Passenger")






    return (
        <Grid
            container
            justifyContent="center"

        >
            <Grid item xs={12}>
                <Typography variant="h1" component="div" gutterBottom>
                    Welcome {passName}!
                </Typography>
            </Grid>
        </Grid>
    );
}

export default WelcomePassenger;