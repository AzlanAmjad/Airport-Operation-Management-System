
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
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <Grid item>
        <Typography variant="h1" component="div" gutterBottom>
          {adminAirline} Flights
        </Typography>
      </Grid>

      <Grid item
        container
        direction="row"
        justifyContent="space-evenly"
      >
        {flights.map((flight) =>
          <Card sx={{ minWidth: 400, backgroundColor: "#ad0000" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                  {flight.flight_num}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Airline: {flight.airline_name}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Category: {flight.category}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Departure: {flight.dep_time}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Arrival: {flight.arrival_time}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Destination: {flight.dest_code}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Plane ID: {flight.plane_id}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}

      </Grid>
    </Grid >
  )
}

export default Flights