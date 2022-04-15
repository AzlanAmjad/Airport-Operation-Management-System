import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import { Tabs, Tab, Grid } from "@mui/material";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import HomePassenger from "./HomePassenger";
import Complaints from "./Complaints";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const PassengerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathToTab = {
    "/passenger-dashboard/home": 0,
    "/passenger-dashboard/complaints": 1,
  };

  const [value, setValue] = useState(pathToTab[location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      item
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={1} ml="100px">
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          textColor="inherit"
        >
          <LinkTab
            label="Home"
            icon={<HomeIcon />}
            onClick={() => navigate("home")}
          />
          <LinkTab
            label="Complaints"
            icon={<ArticleIcon />}
            onClick={() => navigate("complaints")}
          />
        </Tabs>
      </Grid>
      <Grid item container xs={8} py="30px">
        <Routes>
          <Route path="home" element={<HomePassenger />} />
          <Route path="complaints" element={<Complaints />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default PassengerDashboard;
