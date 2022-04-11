import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import { Link } from "@mui/material";
import { Paper } from "@mui/material";
import { Checkbox } from "@mui/material";
import { pink } from '@mui/material/colors';
import {FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from "@mui/material";

const Login = () => {
  const tStyle = { MuiRadio:{
    root:{
        padding: 8
    }
  } };
 
    const stylePaper = {
      padding: 20,
      height: "70vh",
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
  const lStyle = { color: "#000000" };
  const rBStyle = { 
    color: pink[800] 
    
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
        <Avatar src="/login.png" />
        <h2>Login</h2>
      </Grid>
        <Grid container spacing={2}>
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
              sx={{...hStyle,
              "& .MuiOutlinedInput-root:focus":{
                  "& > fieldset":{
                    borderColor: "black"
                  }
                }
              }}
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
          Sign In
        </Button>

        <Grid 
        container 
        spacing={2}
        direction = "column"
        alignItems = "center"
        >
          
          <Grid item xs={12} md={6}>
          <Typography >
          
          Don't have an account?
          
        </Typography>
        <Link href="#">Create account</Link>
          </Grid>
          <Grid container direction="column" alignItems = "center">
            <Grid item >
          <FormControl >
          <RadioGroup 
           row>
            <FormControlLabel 
              sx = {{...rBStyle}}
              value="passenger"
              control={<Radio  style={rBStyle} size ="small"  />}
              label="Passenger"
            />
            <FormControlLabel
              style={rBStyle}
              value="port admin"
              control={<Radio style={rBStyle} size ="small" />}
              label="Airport Admin"
            />
            <FormControlLabel
              style={rBStyle}
              value="line admin"
              control={<Radio style={rBStyle} size ="small" />}
              label="Airline Admin"
            />
          </RadioGroup>
        </FormControl>
        </Grid>
        </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};


export default Login;
