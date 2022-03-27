import { AppBar, Button, Toolbar, Grid, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <FlightTakeoffIcon fontSize="large" />
            </Grid>

            <Grid item>menu</Grid>

            <Grid item>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
