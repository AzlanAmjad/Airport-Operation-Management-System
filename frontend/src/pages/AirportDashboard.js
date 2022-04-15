import Grid from "@mui/material/Grid";
import ArticleIcon from "@mui/icons-material/Article";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import AirportComplaints from "./AirportComplaints";
import HomeAirport from "./HomeAirport";
import Reservation from "./Reservation";
import HotelIcon from "@mui/icons-material/Hotel";

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
    "/airport-dashboard/home": 0,
    "/airport-dashboard/reservation": 1,
    "/airport-dashboard/complaints": 2,
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
            label="Companies"
            onClick={() => navigate("reservation")}
            icon={<HotelIcon />}
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
          <Route path="home" element={<HomeAirport />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="complaints" element={<AirportComplaints />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default AirlineDashboard;
