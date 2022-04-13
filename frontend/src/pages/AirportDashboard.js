import Grid from "@mui/material/Grid";
import * as React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import AirportComplaints from "./AirportComplaints";
import WelcomeAirport from "./WelcomeAirport";
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="space-evenly" alignItems="center">
      <Grid item container xs={1} paddingLeft="40px">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          orientation="vertical"
          textColor="white"
        >
          <LinkTab
            label="Welcome"
            onClick={() => navigate(`welcome`)}
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
      <Grid item xs={10} container>
        <Routes>
          <Route path="welcome" element={<WelcomeAirport />} />
          <Route path="reserve" element={<Reservation />} />
          <Route path="complaints" element={<AirportComplaints />} />
        </Routes>
      </Grid>

      <Grid item container xs={1}></Grid>
    </Grid>
  );
};

export default AirlineDashboard;
