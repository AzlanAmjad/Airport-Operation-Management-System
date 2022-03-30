
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Flights = () => {

  const [flights, setFlights] = useState([
    { flight_num: '01', airline_name: 'Air_Canada', category: 'Passenger', dep_time: '01/01/2021', arrival_time: '01/01/2021', dest_code: 'YYZ', plane_id: '000' },
    { flight_num: '02', airline_name: 'Air_Canada', category: 'Passenger', dep_time: '01/01/2021', arrival_time: '01/01/2021', dest_code: 'YEG', plane_id: '111' },
    { flight_num: '03', airline_name: 'Air_Canada', category: 'Private', dep_time: '01/01/2021', arrival_time: '01/01/2021', dest_code: 'YYZ', plane_id: '222' },

  ]);

  const [category, setCategory] = useState('');
  const [destCode, setDestCode] = useState('');
  const [planeID, setPlaneID] = useState('');
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);

  const [dialogForm, setDialogForm] = useState(false);

  const [adminAirline, setAdminAirline] = useState("Air Canada")

  const handleCategory = (event) => {
  };
  const handleDestCode = (event) => {
  };
  const handlePlaneID = (event) => {
  };

  const handleDialogFormOpen = () => {
    setDialogForm(true);
  }
  const handleDialogFormClose = () => {
    setDialogForm(false);
  }


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
            <Card sx={{ minWidth: 80, backgroundColor: "background.paper" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                  {flight.flight_num}
                </Typography>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel sx={{ color: "text.primary" }}>{flight.category}</InputLabel>
                  <Select
                    value={category}
                    onChange={handleCategory}
                  >
                    <MenuItem value={"Private"}>Private</MenuItem>
                    <MenuItem value={"Business"}>Business</MenuItem>
                  </Select>
                  <FormHelperText sx={{ color: "text.primary" }}>Category</FormHelperText>
                </FormControl>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel sx={{ color: "text.primary" }}>{flight.dest_code}</InputLabel>
                  <Select
                    value={destCode}
                    onChange={handleDestCode}
                  >
                    <MenuItem value={"YYG"}>YYG</MenuItem>
                    <MenuItem value={"YXA"}>YXA</MenuItem>
                  </Select>
                  <FormHelperText sx={{ color: "text.primary" }}>Destination</FormHelperText>
                </FormControl>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel sx={{ color: "text.primary" }}>{flight.plane_id}</InputLabel>
                  <Select
                    value={planeID}
                    onChange={handlePlaneID}
                  >
                    <MenuItem value={"000"}>000</MenuItem>
                    <MenuItem value={"111"}>111</MenuItem>
                    <MenuItem value={"111"}>222</MenuItem>
                  </Select>
                  <FormHelperText sx={{ color: "text.primary" }}>Plane ID</FormHelperText>
                </FormControl>
                <FormControl sx={{ minWidth: 120 }}>
                  <DatePicker
                    inputFormat="MM/dd/yyyy"
                    openTo="day"
                    value={departure}
                    onChange={(newDeparture) => {
                      setDeparture(newDeparture);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Departure Date"
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "red",
                          },
                          "&.MuiOutlinedInput-notchedOutline.Mui-focused": {
                            borderColor: "red",
                          },
                          "& .MuiButtonBase-root.MuiIconButton-root": {
                            color: "white",
                          },
                        }}
                      />
                    )}
                  />
                  <FormHelperText sx={{ color: "text.primary" }}>Departure</FormHelperText>
                </FormControl>
                <FormControl sx={{ minWidth: 100 }}>
                  <DatePicker
                    inputFormat="MM/dd/yyyy"
                    openTo="day"
                    value={arrival}
                    onChange={(newArrival) => {
                      setArrival(newArrival);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Departure Date"
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "red",
                          },
                          "&.MuiOutlinedInput-notchedOutline.Mui-focused": {
                            borderColor: "red",
                          },
                          "& .MuiButtonBase-root.MuiIconButton-root": {
                            color: "white",
                          },
                        }}
                      />
                    )}
                  />
                  <FormHelperText sx={{ color: "text.primary" }}>Arrival</FormHelperText>
                </FormControl>
                <Button
                  variant="contained"
                  sx={{ minWidth: "100px" }}
                  onClick={() => {
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  sx={{ minWidth: "100px" }}
                  onClick={() => {
                  }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        )}
        <Grid item >
          <IconButton size="large" sx={{ color: "primary.main" }} onClick={handleDialogFormOpen}><AddIcon fontSize="inherit" /></IconButton>
        </Grid>
        <Dialog open={dialogForm} onClose={handleDialogFormClose}>
          <DialogTitle>Add a Flight</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ color: "text.primary" }}>
              To add flight, please add following information:
            </DialogContentText>
            <FormControl sx={{ minWidth: 100 }}>
              <DatePicker
                inputFormat="MM/dd/yyyy"
                openTo="day"
                value={arrival}
                onChange={(newArrival) => {
                  setArrival(newArrival);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Departure Date"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "red",
                      },
                      "&.MuiOutlinedInput-notchedOutline.Mui-focused": {
                        borderColor: "red",
                      },
                      "& .MuiButtonBase-root.MuiIconButton-root": {
                        color: "white",
                      },
                    }}
                  />
                )}
              />
              <FormHelperText sx={{ color: "text.primary" }}>Arrival</FormHelperText>
            </FormControl>
            <FormControl sx={{ minWidth: 100 }}>
              <DatePicker
                inputFormat="MM/dd/yyyy"
                openTo="day"
                value={departure}
                onChange={(newDeparture) => {
                  setArrival(departure);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Departure Date"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "red",
                      },
                      "&.MuiOutlinedInput-notchedOutline.Mui-focused": {
                        borderColor: "red",
                      },
                      "& .MuiButtonBase-root.MuiIconButton-root": {
                        color: "white",
                      },
                    }}
                  />
                )}
              />
              <FormHelperText sx={{ color: "text.primary" }}>Departure</FormHelperText>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel sx={{ color: "text.primary" }}>Category</InputLabel>
              <Select
                value={category}
                onChange={handleCategory}
              >
                <MenuItem value={"Private"}>Private</MenuItem>
                <MenuItem value={"Business"}>Business</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel sx={{ color: "text.primary" }}>Destination Code</InputLabel>
              <Select
                value={destCode}
                onChange={handleDestCode}
              >
                <MenuItem value={"YYG"}>YYG</MenuItem>
                <MenuItem value={"YXA"}>YXA</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel sx={{ color: "text.primary" }}>Plane ID</InputLabel>
              <Select
                value={planeID}
                onChange={handlePlaneID}
              >
                <MenuItem value={"000"}>000</MenuItem>
                <MenuItem value={"111"}>111</MenuItem>
                <MenuItem value={"111"}>222</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogFormClose}>Add</Button>
            <Button onClick={handleDialogFormClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid >
  )
}

export default Flights