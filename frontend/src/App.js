import { Route, Routes } from "react-router-dom";

// import components
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";

// material UI
import Grid from "@mui/material/Grid";
import Explore from '@mui/icons-material'

function App() {
  return (
    <Grid
      container
      direction="column"
      justify-content="space-between"
      align-items="center"
    >
      <Grid item>
        <Explore />
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
  );
}

export default App;
