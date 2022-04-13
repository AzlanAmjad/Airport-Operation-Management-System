import * as React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Tabs, Tab, Paper, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import WelcomePassenger from "./WelcomePassenger";
import FileComplaint from "./FileComplaint";
import MyComplaints from "./MyComplaints";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Grid
      item
      container
      direction="row"
      justifyContent="space-evenly"
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
            label="Welcome"
            icon={<HomeIcon />}
            onClick={() => navigate("welcome")}
          />
          <LinkTab
            label="My Complaints"
            icon={<ArticleIcon />}
            onClick={() => navigate("my-complaints")}
          />
          <LinkTab
            label="File Complaint"
            icon={<NoteAddIcon />}
            onClick={() => navigate("file-complaint")}
          />
        </Tabs>
      </Grid>
      <Grid item xs={10} container>
        <Paper elevation={12} sx={{ padding: "80px", margin: "60px", minHeight: "400px", minWidth: "80%"}}>
          <Routes>
            <Route path="welcome" element={<WelcomePassenger />} />
            <Route path="my-complaints" element={<MyComplaints />} />
            <Route path="file-complaint" element={<FileComplaint />} />
          </Routes>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PassengerDashboard;
