import { AppBar, Button, Toolbar, Grid, Typography, Link } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  // anchor for mobile menu
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

  // functions to handle mobile menu
  const handleMobileMenu = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClick = (path) => {
    setMobileAnchorEl(null);
    navigate(path);
  };

  // anchor for menu
  const [anchorEl, setAnchorEl] = useState(null);

  // functions to handle menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClick = (path) => {
    setAnchorEl(null);

    if (path == "/logout") {
      dispatch(logout());
      navigate("/");
    } else {
      navigate(path);
    }
  };

  // state for menu
  const [menu, setMenu] = useState([
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Reservation",
      path: "/reservation",
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

  // state for menu
  const [passengerMenu, setPassengerMenu] = useState([
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Reservation",
      path: "/reservation",
    },
    {
      title: "About",
      path: "/about",
    },
  ]);

  // state for menu
  const [airportAdminMenu, setAirportAdminMenu] = useState([
    {
      title: "About",
      path: "/about",
    },
  ]);

  // state for menu
  const [airlineAdminMenu, setAirlineAdminMenu] = useState([
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Reservation",
      path: "/reservation",
    },
    {
      title: "About",
      path: "/about",
    },
  ]);

  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { passenger } = useSelector((state) => state.user);
  const { airport_admin } = useSelector((state) => state.user);
  const { airline_admin } = useSelector((state) => state.user);

  return (
    <nav>
      <AppBar>
        <Toolbar>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <IconButton color="inherit" onClick={() => navigate("/")}>
                <FlightTakeoffIcon fontSize="large" />
              </IconButton>
            </Grid>

            <Grid item>
              <Box sx={{ display: { xs: "none", lg: "flex" } }}>
                <Typography variant="h2">YYC International Airport</Typography>
              </Box>
            </Grid>

            <Grid item>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleMobileMenu}
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={mobileAnchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(mobileAnchorEl)}
                  onClose={() => setMobileAnchorEl(null)}
                >
                  {menu.map((menu) => {
                    return (
                      <MenuItem
                        key={menu.title}
                        onClick={() => handleMobileMenuClick(`${menu.path}`)}
                      >
                        {menu.title}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </Box>
              {!isLoggedIn && (
                <Grid
                  container
                  sx={{ display: { xs: "none", md: "flex" }, width: "600px" }}
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={2}
                >
                  {menu.map((menu) => {
                    return (
                      <Grid item key={menu.title}>
                        <Button
                          variant="contained"
                          onClick={() => navigate(`${menu.path}`)}
                        >
                          {menu.title}
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
              {isLoggedIn && passenger && (
                <Grid
                  container
                  sx={{ display: { xs: "none", md: "flex" }, width: "600px" }}
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={2}
                >
                  {passengerMenu.map((menu) => {
                    return (
                      <Grid item key={menu.title}>
                        <Button
                          variant="contained"
                          onClick={() => navigate(`${menu.path}`)}
                        >
                          {menu.title}
                        </Button>
                      </Grid>
                    );
                  })}
                  <Grid item>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2, ml: 0.5 }}
                      onClick={handleMenu}
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                    >
                      <AccountCircle sx={{ fontSize: 30 }} />
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
                      <MenuItem
                        onClick={() =>
                          handleMenuClick(`/passenger-dashboard/welcome`)
                        }
                      >
                        Account
                      </MenuItem>
                      <MenuItem onClick={() => handleMenuClick(`/logout`)}>
                        Logout
                      </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              )}
              {isLoggedIn && airport_admin && (
                <Grid
                  container
                  sx={{ display: { xs: "none", md: "flex" }, width: "600px" }}
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={2}
                >
                  {airportAdminMenu.map((menu) => {
                    return (
                      <Grid item key={menu.title}>
                        <Button
                          variant="contained"
                          onClick={() => navigate(`${menu.path}`)}
                        >
                          {menu.title}
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
              {isLoggedIn && airline_admin && (
                <Grid
                  container
                  sx={{ display: { xs: "none", md: "flex" }, width: "600px" }}
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={2}
                >
                  {airlineAdminMenu.map((menu) => {
                    return (
                      <Grid item key={menu.title}>
                        <Button
                          variant="contained"
                          onClick={() => navigate(`${menu.path}`)}
                        >
                          {menu.title}
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;
