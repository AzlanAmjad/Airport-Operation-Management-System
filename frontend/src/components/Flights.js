
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useState } from "react";
import { getAccordionDetailsUtilityClass } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Flights = () => {

  const [flights, setFlights] = useState([
    { flight_num: '01', airline_name: 'Air_Canada', category: 'Passenger', dep_time: '01/01/2021', arrival_time: '01/01/2021', dest_code: 'YYZ', plane_id: '000' },
    { flight_num: '02', airline_name: 'Air_Canada', category: 'Passenger', dep_time: '01/01/2021', arrival_time: '01/01/2021', dest_code: 'YEG', plane_id: '111' },
    { flight_num: '03', airline_name: 'Air_Canada', category: 'Private', dep_time: '01/01/2021', arrival_time: '01/01/2021', dest_code: 'YYZ', plane_id: '222' },

  ]);

  const [adminAirline, setAdminAirline] = useState("Air Canada")


  return (

    <Grid
      container
      justifyContent="center"

    >
      <Grid item xs={12}>
        <Typography variant="h1" component="div" gutterBottom>
          {adminAirline} Flights
        </Typography>
      </Grid>

      <Grid item container direction="column" spacing={2} xs={6}>
        {flights.map((flight) =>
          <Grid item>
            <Card sx={{ minWidth: 100, backgroundColor: "background.paper" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" >
                    {flight.flight_num}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Airline: {flight.airline_name} Category: {flight.category}
                    Departure: {flight.dep_time} Destination: {flight.dest_code}  Plane ID: {flight.plane_id}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Departure: {flight.dep_time} Arrival: {flight.arrival_time}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )}
      </Grid>
    </Grid >
  )
}

export default Flights