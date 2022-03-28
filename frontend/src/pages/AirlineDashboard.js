import Grid from "@mui/material/Grid";
import * as React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import ArticleIcon from "@mui/icons-material/Article";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Flights from "../components/Flights";

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
  const location = useLocation();

  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      paddingLeft="40px"
      paddingTop="100px"
    >
      <Grid
        item
        container
        direction="row"
        height="1000px"
        alignItems="flex-start"
      >
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
        <Grid item>
          <Routes>
            <Route path="welcome" element={<p>test</p>} />
            <Route path="flights" element={<Flights />} />
            <Route path="complaints" />
          </Routes>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AirlineDashboard;
