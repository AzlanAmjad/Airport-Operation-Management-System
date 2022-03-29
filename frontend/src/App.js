import { Route, Routes } from "react-router-dom";

// import components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Flight from "./pages/Flight";
import Store from "./pages/Store";
import Shop from "./pages/Shop";

// material UI
import Grid from "@mui/material/Grid";

// material UI theming
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Date picker
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AirlineDashboard from "./pages/AirlineDashboard";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ad0000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#707070",
      contrastText: "#ffffff",
    },
    background: {
      default: "#181818",
      paper: "#404040",
    },
    text: {
      primary: "#ffffff",
    },
    divider: "rgba(255,255,255,0.7)",
    error: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Raleway", "Roboto"].join(","),
    h1: {
      fontSize: 60,
    },
    h2: {
      fontSize: 25,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 25,
      fontWeight: "bold",
    },
  },
});

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          height="100vh"
          width="100%"
          direction="column"
          align="center"
          justifyContent="space-between"
          wrap="nowrap"
          overflow="auto"
        >
          <Grid item container>
            <NavBar />
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            mt="100px"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/flight-details/:airline/:flight"
                element={<Flight />}
              />

              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:store" element={<Store />} />

              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/airline-dashboard/*"
                element={<AirlineDashboard />}
              />
            </Routes>
          </Grid>

          <Grid item container mt="50px">
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
