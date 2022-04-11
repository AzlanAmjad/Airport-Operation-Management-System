import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import { Link } from "@mui/material";
import { Paper } from "@mui/material";
import { orange } from "@mui/material/colors";
import { styled } from "@mui/system";



const Signup = () => {
  
  const stylePaper = {
    marginBottom: 5,
    padding: 15,
    height: "80vh",
    maxWidth: 450,
    margin: "60px",
  };
  const hStyle = { "& .MuiInputBase-root": {
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

const btnstyle = { margin: "20px 0", height: "5vh" };
return (
  <Grid>
    <Paper elevation={12} style={stylePaper}>
      <Grid 
      container
      direction= "column" 
      alignItems="center"
      >
        <Avatar src="/Signup.png" />
        <h2 >Sign Up</h2>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs = {6}>
          <TextField
          sx={{...hStyle}}
          label="First Name"
          placeholder="Fname"
          fullWidth
          required
          />
        </Grid>
        <Grid item xs = {6}>
          <TextField
          sx={{...hStyle}}
          label="Last Name"
          placeholder="Lname"
          fullWidth
          required
          />
          
        </Grid>
        <Grid item xs = {6}>
          <TextField
          sx={{...hStyle}}
          label="SSN"
          placeholder="Enter SSN"
          type="number"
          fullWidth
          required
          />
        </Grid>
        <Grid item xs = {6}>
          <TextField
          sx={{...hStyle}}
          label="Address"
          placeholder="Enter address"
          fullWidth
          required
          />
          
        </Grid>
        <Grid item xs={12}>
        <TextField
            sx={{...hStyle}}
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            sx={{...hStyle}}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        style={btnstyle}
      >
        Create Account
      </Button>

      <Grid 
        container
        spacing={2}
        direction = "column"
        alignItems = "center"
      >
        
        <Grid  item xs={12} md={6}>
        <Typography >
        {" "}
        Have an account already?
        <Link href="#">Log in</Link>
      </Typography>
        </Grid>
       
      </Grid>
    </Paper>
  </Grid>
);
};

export default Signup;
