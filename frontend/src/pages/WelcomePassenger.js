import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axiosInstance from "../components/Axios";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const WelcomePassenger = () => {
  const { id } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(async () => {
    try {
      const user = await axiosInstance.get(`user/${id}/`);
      console.log(user.data);
      setUser(user.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }, [id]);

  return (
    <>
      {loading ? (
        <Grid item>
          <ClipLoader loading={loading} size={70} color={"#ffffff"} />
        </Grid>
      ) : (
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          rowSpacing={4}
        >
          <Grid item>
            <Typography variant="h5" fontWeight="bold">
              Welcome to your account {user.first_name}!
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            rowSpacing={2}
          >
            <Grid item>
              <Typography variant="h6">Your account information</Typography>
            </Grid>
            <Grid item>
              <Typography>Email: {user.email}</Typography>
            </Grid>
            <Grid item>
              <Typography>First Name: {user.first_name}</Typography>
            </Grid>
            <Grid item>
              <Typography>Last Name: {user.last_name}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default WelcomePassenger;
