import { AppBar, Button, Toolbar, Grid, Typography, Link } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const NavBar = () => {
  // anchor for menu
  const [anchorEl, setAnchorEl] = useState(null);
  // state for menu
  const [menu, setMenu] = useState([
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Store",
      path: "/store",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Login",
      path: "/login",
    },
    {
      title: "Signup",
      path: "/signup",
    },
  ]);

  const navigate = useNavigate();

  // functions to handle menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClick = (path) => {
    setAnchorEl(null);
    navigate(path);
  };

  return (
    <Grid item container>
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

            <Grid item>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Typography variant="h2">YYC International Airport</Typography>
              </Box>
            </Grid>

            <Grid item>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>Menu</Box>
            </Grid>

            <Grid item>
              <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleMenu}
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  {menu.map((menu) => {
                    return (
                      <MenuItem key={menu.title} onClick={() => handleMenuClick(`${menu.path}`)}>
                        {menu.title}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </Box>
              <Box
                sx={{ display: { xs: "none", sm: "flex" }, width: "170px" }}
                direction="row"
                justifyContent="space-between"
              >
                <Button variant="contained" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button variant="contained" onClick={() => navigate("/signup")}>
                  Signup
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default NavBar;
