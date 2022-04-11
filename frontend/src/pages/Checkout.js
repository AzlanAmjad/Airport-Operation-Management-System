import React from "react";
import { Button, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Stack } from "@mui/material";
import {FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from "@mui/material";


const Checkout = () => {
  const textStyle = { "& .MuiInputBase-root": {
    color: "black"
  },
        backgroundColor : "whitesmoke",

        "& label.Mui-focused":{
          color: "black"
        }, 
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "black"
          }
        }
};

  const stylePaper = {
    
    padding: 20,
    height: "80vh",
    maxWidth: 450,
    margin: "60px",
  };
  const btnstyle = { marginTop: 100 };
  const tStyle = { color: "rgb(11 0 249)" };
  const hStyle = { color: "black" };
  return (
    <Grid container justifyContent= "center" direction="row" >
      <Grid item xs = {6}>
      <Paper elevation={12} style={stylePaper}>
        <Grid align="center">
          <Avatar src="/checkout.jpg" />
          <h2 >Payment</h2>
        </Grid>
       

        <Typography  variant="h6" gutterBottom>
          Payment Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField sx={{...textStyle}} required id="cardName" label="Name on card" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField sx={{...textStyle}} required id="cardNumber" label="Card number" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField sx={{...textStyle}} required id="expDate" label="Expiry date" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              sx={{...textStyle}}
              required
              id="cvv"
              label="CVV"
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
              
            />
          </Grid>
        </Grid>
      </Paper>
      </Grid>
      <Grid item xs = {4}>
      <Paper elevation={12} style={stylePaper}>
        
          
          <h2 >Price Summary</h2>
        
       

       
        <Grid container  spacing={1}>
          <Grid item xs={6} md={6}>
            <Typography style = {{marginLeft: 10 }}>Prices in Cad</Typography>
          </Grid>
          <Grid item xs ={7} style = {{ flexGrow : "1" }}>
            <Typography>Fare</Typography>
            <Typography>Luggage Fees</Typography>
            <Typography>Taxes</Typography>
            <Divider/>
            <Typography style = {{marginTop: 20 }}>Total Cost</Typography>
          </Grid>
          <Grid xs ={true}>
            <Typography style = {{marginTop: 8 }}>123</Typography>
            <Typography>15.99</Typography>
            <Typography>49.99</Typography>
            <Divider/>
            <Typography style = {{marginTop: 20 }}>188.98</Typography>
          </Grid>
          
          </Grid>
          <Button type="submit"
            color="primary"
            variant="contained"
            style =  {btnstyle}
         >
           Confirm Payment
           </Button>
          
          

          
          
          
        
      </Paper>
      </Grid>
    </Grid>
  );
};
export default Checkout;
