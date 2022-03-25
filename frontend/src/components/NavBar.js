import { AppBar, Button, Toolbar, Grid } from "@mui/material";

const NavBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Grid
            container
            direction="row"
            align="center"
            justifyContent="space-between"
          >
            <Grid item>
              logo, text
            </Grid>

            <Grid item>
              menu
            </Grid>

            <Grid item>
              login, signup, user account
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
