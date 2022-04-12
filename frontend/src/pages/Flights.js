
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
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
import axiosInstance from "../components/Axios";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const Flights = () => {

  const [flights, setFlights] = useState([
    { id: null, arrival_time: null, dep_time: null, destination: null, plane: null, airline: null }
  ]);

  const [allDest, setAllDest] = useState([
    { airport_code: "", city: "", country: "" }
  ]);
  const [adminAirline, setAdminAirline] = useState(1);
  const [destCode, setDestCode] = useState('');
  const [planeID, setPlaneID] = useState('');
  const [allPlanes, setAllPlanes] = useState([
    {
      id: null,
      model: null,
      manufacturer: null,
      economy_seats: null,
      premium_economy_seats: null,
      business_seats: null,
      first_seats: null,
      airline: null
    }
  ]);
  const [departure, setDeparture] = useState(new Date());
  const [arrival, setArrival] = useState(new Date());
  const [econ, setEcon] = useState('');
  const [premEcon, setPremEcon] = useState('');
  const [business, setBusiness] = useState('');
  const [firstClass, setFirstClass] = useState('');

  const [addDialogForm, setAddDialogForm] = useState(false);
  const [editDialogForm, setEditDialogForm] = useState(false);



  const [editFlight, setEditFlight] = useState('');

  const handleAddDialogFormOpen = () => {
    setAddDialogForm(true);
  }
  const handleAddDialogFormClose = () => {
    setAddDialogForm(false);
  }

  const handleAddFlight = async () => {
    try {
      const result = await axiosInstance.post("flight/", {

        airline: adminAirline,
        dep_time: departure,
        arrival_time: arrival,
        destination_id: destCode,
        plane_id: planeID

      });
      console.log(destCode + " " + planeID);
      console.log(result.data);

      setAddDialogForm(false);
    } catch (err) {

    }


  };

  const handleEditSave = async () => {
    try {
      const result = await axiosInstance.put("flight/1/", {

        dep_time: departure,
        arrival_time: arrival,
        airline: adminAirline

      });
      console.log(result.data);

      setEditDialogForm(false);
    } catch (err) {

    }


  };

  const handleEditDialogFormOpen = (flightNum) => {
    setEditFlight(flightNum);
    setEditDialogForm(true);
  }

  const handleEditDialogFormClose = () => {
    setEditDialogForm(false);
  }

  useEffect(() => {

    async function fetchData() {
      try {

        const allFlights = await axiosInstance.get(`flights/${adminAirline}`)
          .then((response) => {
            setFlights(response.data);
          });

        const allDests = await axiosInstance.get("destinations/")
          .then((response) => {
            setAllDest(response.data);
          });

        const allPlanes = await axiosInstance.get(`airplanes/${adminAirline}`)
          .then((response) => {
            setAllPlanes(response.data);
          });




      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);


  return (

    <Grid
      container
      justifyContent="center"

    >
      <Grid item xs={12}>
        <Typography variant="h2" component="div" gutterBottom>
          All Flights
        </Typography>
      </Grid>


      {/*Displaying Flights*/}
      <Grid item container direction="column" spacing={2} xs={6}>
        {flights.map((flight) =>
          <Grid
            item
            key={`${flight.airline} - ${flight.id}`}
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
                    <Typography variant="h6" align="center">Flight Number: {flight.id}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      {flight.dep_time} - {flight.arrival_time}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Route: YYC - {flight.destination}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Plane ID: {flight.plane}</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton
                    color="inherit"
                    onClick={() => handleEditDialogFormOpen(flight.id)}
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
              <DateTimePicker
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
              <DateTimePicker
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
            <FormControl sx={{ minWidth: 120, padding: "5px" }}>
              <InputLabel sx={{ color: "text.primary" }}>Destination Code</InputLabel>
              <Select
                value={destCode}
                onChange={(event) => {
                  setDestCode(event.target.value);
                  console.log(event.target.value);

                }}
              >
                {allDest.map((dest) => (
                  <MenuItem value={dest.airport_code}>{dest.airport_code}</MenuItem>

                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120, padding: "5px" }}>
              <InputLabel sx={{ color: "text.primary" }}>Plane Model</InputLabel>
              <Select
                value={planeID}
                onChange={(event) => {
                  setPlaneID(event.target.value);
                }}
              >
                {allPlanes.map((plane) => (
                  <MenuItem value={plane.id}>{plane.model}</MenuItem>

                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ maxWidth: 120, padding: "10px" }}>
              <Input type="number" inputProps={{ min: 0 }} onChange={(event) => { setEcon(event.target.value) }} />
              <FormHelperText sx={{ color: "text.primary" }}>Economy Class</FormHelperText>
            </FormControl>
            <FormControl sx={{ maxWidth: 120, padding: "10px" }}>
              <Input type="number" inputProps={{ min: 0 }} onChange={(event) => { setPremEcon(event.target.value) }} />
              <FormHelperText sx={{ color: "text.primary" }}>Premium Economy Class</FormHelperText>
            </FormControl>
            <FormControl sx={{ maxWidth: 120, padding: "10px" }}>
              <Input type="number" inputProps={{ min: 0 }} onChange={(event) => { setBusiness(event.target.value) }} />
              <FormHelperText sx={{ color: "text.primary" }}>Business Class</FormHelperText>
            </FormControl>
            <FormControl sx={{ maxWidth: 120, padding: "10px" }}>
              <Input type="number" inputProps={{ min: 0 }} onChange={(event) => { setFirstClass(event.target.value) }} />
              <FormHelperText sx={{ color: "text.primary" }}>First Class</FormHelperText>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddFlight}>Add</Button>
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
              <DateTimePicker
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
              <DateTimePicker
                value={departure}
                onChange={(newDeparture) => {
                  setDeparture(newDeparture);
                  console.log(departure);
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
            <Button onClick={handleEditSave}>Save</Button>
            <Button onClick={handleEditDialogFormClose}>Cancel</Button>
          </DialogActions>
        </Dialog>


      </Grid>
    </Grid >
  )
}

export default Flights