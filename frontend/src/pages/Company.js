import Grid from "@mui/material/Grid";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";

const Company = () => {
  const [companyName, setCompanyName] = useState("Company Name");

  const [hotels, setHotels] = useState([
    {
      id: 0,
      name: "hotel0",
      location: "location0",
      company: ""
    },
    {
      id: 1,
      name: "hotel1",
      location: "location1",
      company: ""
    },
    {
      id: 2,
      name: "hotel2",
      location: "location2",
      company: ""
    },
    {
      id: 3,
      name: "hotel3",
      location: "location3",
      company: ""
    },
  ]);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h1" component="div" gutterBottom>
          {companyName}
        </Typography>
      </Grid>

      <Grid item container direction="row" spacing={3} xs={6}>
        {hotels.map((hotel) => {
          return (
            <Grid item>
              <Card
                sx={{
                  minWidth: 300,
                  maxWidth: 300,
                  backgroundColor: "background.paper",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h2">{hotel.name}</Typography>
                  <Typography gutterBottom variant="h6">{hotel.location}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Company;
