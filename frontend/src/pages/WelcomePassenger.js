import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axiosInstance from "../components/Axios";
import { useSelector } from "react-redux";

const WelcomePassenger = () => {
  const { id } = useSelector((state) => state.user)

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
    <Grid container justifyContent="flex-start">
      <Grid item>
        <Typography variant="h5">Welcome to your dashboard Azlan!</Typography>
      </Grid>
    </Grid>
  );
};

export default WelcomePassenger;
