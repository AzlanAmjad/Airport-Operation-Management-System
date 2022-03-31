import React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Checkbox } from "@mui/material";
import {FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from "@mui/material";


const Checkout = () => {
  const stylePaper = {
    backgroundColor: "White",
    padding: 20,
    height: "70vh",
    maxWidth: 400,
    margin: "60px",
  };
  const btnstyle = { margin: "20px 0", maxHeight: "10vh" };
  const tStyle = { color: "rgb(11 0 249)" };
  const hStyle = { color: "black" };
  return (
    <Grid>
      <Paper elevation={10} style={stylePaper}>
        <Grid align="center">
          <Avatar src="/checkout.jpg" />
          <h2 style={tStyle}>Checkout</h2>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={1}>
            <Avatar src="/clock.png" sx={{ width: 18, height: 18 }}></Avatar>
          </Grid>
          <Grid item xs={6}>
            <Typography style={tStyle}>Ready for Pickup in</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography style={tStyle}>45-50 mins</Typography>
          </Grid>
        </Grid>

        <Typography style={hStyle} variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="Name on card" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="cardNumber" label="Card number" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="Expiry date" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
              style={hStyle}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Checkout;
