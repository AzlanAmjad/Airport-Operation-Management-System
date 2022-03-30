import { Grid } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Flight = () => {
  const { airline_name, flight_num } = useParams();
  const airline = airline_name.replace(/\++/g, " ");

  console.log(airline);
  console.log(flight_num);

  // fetch flight from API
  const [flight, setFlight] = useState({
    flight_num: flight_num,
    airline_name: airline_name,
    dep_time: "1997-12-17 07:37:16-08",
    arrival_time: "1997-12-17 07:37:16-08",
    dest_code: "YYZ",
    plane_id: 0,
  });

  // fetch destination from API
  const [destination, setDestination] = useState({
    airport_code: "YYZ",
    city: "Toronto",
    country: "Canada",
  });

  return (
    <div>
      <Grid></Grid>
    </div>
  );
};

export default Flight;
