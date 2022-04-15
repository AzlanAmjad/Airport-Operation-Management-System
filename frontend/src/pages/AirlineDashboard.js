import Grid from "@mui/material/Grid";
import FlightIcon from "@mui/icons-material/Flight";
import ArticleIcon from "@mui/icons-material/Article";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Flights from "./Flights";
import AirlineComplaints from "./AirlineComplaints";
import HomeAirline from "./HomeAirline";

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

const AirlineDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathToTab = {
    "/airline-dashboard/home": 0,
    "/airline-dashboard/flights": 1,
    "/airline-dashboard/complaints": 2,
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
            onClick={() => navigate(`home`)}
            icon={<HomeIcon />}
          />
          <LinkTab
            label="Flights"
            onClick={() => navigate("flights")}
            icon={<FlightIcon />}
          />
          <LinkTab
            label="Complaints"
            icon={<ArticleIcon />}
            onClick={() => navigate("complaints")}
          />
        </Tabs>
      </Grid>
      <Grid item xs={8} container>
        <Routes>
          <Route path="home" element={<HomeAirline />} />
          <Route path="flights" element={<Flights />} />
          <Route path="complaints" element={<AirlineComplaints />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default AirlineDashboard;
