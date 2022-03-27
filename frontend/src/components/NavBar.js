import { AppBar, Button, Toolbar, Grid, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Store</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Signup</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
