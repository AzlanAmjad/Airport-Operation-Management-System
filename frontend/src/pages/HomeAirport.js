import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const HomeAirport = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h1" component="div" gutterBottom>
          Welcome to YYC International Airport's Dashboard
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomeAirport;