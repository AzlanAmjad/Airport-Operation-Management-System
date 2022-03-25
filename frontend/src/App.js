import { Route, Routes } from "react-router-dom";

// import components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// material UI
import Grid from "@mui/material/Grid";

// material UI theming
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ad0000",
    },
    secondary: {
      main: "#ad0000",
    },
    background: {
      default: "#000000",
      paper: "#181818",
    },
    text: {
      primary: "#ffffff",
    },
    divider: "rgba(255,255,255,0.7)",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        className="App"
        direction="column"
        align="center"
        justifyContent="space-between"
        wrap="nowrap"
      >
        <Grid item>
          <NavBar />
        </Grid>

        <Grid item>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </Grid>

        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
