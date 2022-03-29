import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      rowSpacing={5}
      wrap="nowrap"
      width="70%"
      paddingY="50px"
    >
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        rowSpacing={3}
      >
        <Grid item>
          <Typography variant="h2">
            Airport Operation Management System
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        rowSpacing={3}
      >
        <Grid item>
          <Typography variant="h2">The Developers</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
