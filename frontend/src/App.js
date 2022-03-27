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

// material UI
import Grid from "@mui/material/Grid";

// material UI theming
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Date picker
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

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
    fontFamily: ["Raleway"].join(","),
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
        >
          <Grid item container>
            <NavBar />
          </Grid>

          <Grid
            item
            container
            height="100vh"
            justifyContent="center"
            alignItems="center"
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route
                path="/flight-details/:airline/:flight"
                element={<Flight />}
              ></Route>
              <Route path="/store" element={<Store />}></Route>
            </Routes>
          </Grid>

          <Grid item container>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
