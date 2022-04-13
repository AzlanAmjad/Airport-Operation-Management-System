import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const WelcomePassenger = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h1" component="div" gutterBottom>
          Welcome Passenger!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WelcomePassenger;
