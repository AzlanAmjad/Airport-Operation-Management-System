import { Route, Routes } from "react-router-dom";

// import components
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// material UI
import Grid from "@mui/material/Grid";

// material UI theming
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: red[400],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justify-content="space-between"
        align-items="center"
      >
        <Grid item>
          <div>Header</div>
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
          <div>Footer</div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
