import { Box, Grid } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Grid container direction='row'>
            <Grid item>
                Logo
            </Grid>
            <Grid item container direction='column'>
                <Grid item>
                    Developers
                </Grid>
                <Grid item>
                    Azlan
                </Grid>
                <Grid item>
                    Saud
                </Grid>
                <Grid item>
                    Faiz
                </Grid>
            </Grid>
        </Grid>
      </Box>
    </footer>
  );
};
export default Footer;
