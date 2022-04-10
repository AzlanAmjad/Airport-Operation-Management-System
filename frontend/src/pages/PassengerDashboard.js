import Grid from "@mui/material/Grid";
import * as React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import WelcomePassenger from "./WelcomePassenger";
import Typography from '@mui/material/Typography';
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
            container
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Grid
                item
                container
                xs={1}
                paddingLeft="40px"
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
                        label="File Complaint"
                        onClick={() => navigate("file-complaint")}
                        icon={<NoteAddIcon />}
                    />
                    <LinkTab
                        label="My Complaints"
                        icon={<ArticleIcon />}
                        onClick={() => navigate("my-complaints")}
                    />
                </Tabs>
            </Grid>
            <Grid item xs={10} container>
                <Routes>
                    <Route path="welcome" element={<WelcomePassenger />} />
                    <Route path="file-complaint" element={<FileComplaint />} />
                    <Route path="my-complaints" element={<MyComplaints />} />
                </Routes>
            </Grid>

            <Grid
                item
                container
                xs={1}
            ></Grid>
        </Grid >
    );
};

export default PassengerDashboard;
