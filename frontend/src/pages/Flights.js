
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useState } from "react";
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
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Input from "@mui/material/Input";


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

  const [addDialogForm, setAddDialogForm] = useState(false);
  const [editDialogForm, setEditDialogForm] = useState(false);

  const [adminAirline, setAdminAirline] = useState("Air Canada")

  const [editFlight, setEditFlight] = useState('');

  const handleCategory = (event) => {
  };
  const handleDestCode = (event) => {
  };
  const handlePlaneID = (event) => {
  };

  const handleAddDialogFormOpen = () => {
    setAddDialogForm(true);
  }
  const handleAddDialogFormClose = () => {
    setAddDialogForm(false);
  }

  const handleEditDialogFormOpen = (flightNum) => {
    setEditFlight(flightNum);
    setEditDialogForm(true);
  }

  const handleEditDialogFormClose = () => {
    setEditDialogForm(false);
  }


  return (

    <Grid
      container
      justifyContent="center"

    >
      <Grid item xs={12}>
        <Typography variant="h2" component="div" gutterBottom>
          {adminAirline} Flights
        </Typography>
      </Grid>

      {/*Displaying Flights*/}
      <Grid item container direction="column" spacing={2} xs={6}>
        {flights.map((flight) =>
          <Grid
            item
            key={`${flight.airline_name} - ${flight.flight_num}`}
            sx={{ width: "100%" }}
          >
            <Paper elevation={12} sx={{ padding: "30px" }}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                wrap="nowrap"
              >
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="flex-start"
                  justifyContent="space-evenly"
                  rowSpacing={1}
                >
                  <Grid item xs={12}>
                    <Typography variant="h6" align="center">Flight Number: {flight.flight_num}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      {flight.dep_time} - {flight.arrival_time}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Route: YYC - {flight.dest_code}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Plane ID: {flight.plane_id}</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton
                    color="inherit"
                    onClick={() => handleEditDialogFormOpen(flight.flight_num)}
                  >
                    <EditIcon fontSize="medium" />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )}

        {/*Add Form */}
        <Grid item >
          <IconButton size="large" sx={{ color: "white" }} onClick={handleAddDialogFormOpen}><AddIcon fontSize="inherit" /></IconButton>
        </Grid>
        <Dialog open={addDialogForm} onClose={handleAddDialogFormClose}>
          <DialogTitle>Add a Flight</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ color: "text.primary" }}>
              To add flight, please add following information:
            </DialogContentText>
            <FormControl sx={{ minWidth: 100, padding: "5px" }}>
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
            <FormControl sx={{ minWidth: 100, padding: "5px" }}>
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
            <FormControl sx={{ minWidth: 120, padding: "5px" }}>
              <InputLabel sx={{ color: "text.primary" }}>Destination Code</InputLabel>
              <Select
                value={destCode}
                onChange={handleDestCode}
              >
                <MenuItem value={"YYG"}>YYG</MenuItem>
                <MenuItem value={"YXA"}>YXA</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120, padding: "5px" }}>
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
            <FormControl sx={{ maxWidth: 120, padding: "10px" }}>
              <Input type="number" inputProps={{ min: 0 }} />
              <FormHelperText sx={{ color: "text.primary" }}>Business</FormHelperText>
            </FormControl>
            <FormControl sx={{ maxWidth: 120, padding: "10px" }}>
              <Input type="number" inputProps={{ min: 0 }} />
              <FormHelperText sx={{ color: "text.primary" }}>First Class</FormHelperText>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddDialogFormClose}>Add</Button>
            <Button onClick={handleAddDialogFormClose}>Cancel</Button>
          </DialogActions>
        </Dialog>

        {/*For editing a flight*/}
        <Dialog open={editDialogForm} onClose={handleEditDialogFormClose}>
          <DialogTitle>Edit a Flight</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ color: "text.primary" }}>
              To edit flight timings, please update following information:
            </DialogContentText>
            <FormControl sx={{ minWidth: 100, padding: "5px" }}>
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
            <FormControl sx={{ minWidth: 100, padding: "5px" }}>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditDialogFormClose}>Save</Button>
            <Button onClick={handleEditDialogFormClose}>Cancel</Button>
          </DialogActions>
        </Dialog>


      </Grid>
    </Grid >
  )
}

export default Flights