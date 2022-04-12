import Grid from "@mui/material/Grid";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { CardActionArea } from "@mui/material";
import { Route, Routes, useNavigate, useLocation, useParams } from "react-router-dom";
import axiosInstance from "../components/Axios";
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from "@mui/material/Input";
import IconButton from '@mui/material/IconButton';



const Company = () => {
  const [companyName, setCompanyName] = useState('');

  const { company } = useParams();

  const [hotels, setHotels] = useState([
    {
      id: null,
      name: null,
      location: null,
      company_name: null
    }
  ]);
  const [hotelName, setHotelName] = useState('');
  const [admin, setAdmin] = useState('yeye@hotmail.com');
  const [location, setLocation] = useState('');

  const [addDialogForm, setAddDialogForm] = useState(false);
  const handleAddDialogFormOpen = () => {
    setAddDialogForm(true);
  }
  const handleAddDialogFormClose = () => {
    setAddDialogForm(false);
  }


  const handleAddHotel = async () => {
    try {


      const result = await axiosInstance.post("hotel/", {

        name: hotelName,
        location: location,
        company: company

      });
      console.log(result.data);


      setAddDialogForm(false);
      this.forceUpdate();
    } catch (err) {

    }


  };




  useEffect(() => {

    async function fetchData() {
      try {
        const allComplaints = await axiosInstance.get(`/hotels/${company}`, {

        })
          .then((response) => {
            setHotels(response.data);
          });



      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
    setCompanyName(hotels[0]['company_name']);


  }, []);


  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>

        <Typography variant="h1" component="div" gutterBottom>
          {hotels[0]['company_name']}
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
                <CardActionArea onClick={() => navigate(`/reservation/${company}/${hotel.name}`)}>
                  <CardContent>
                    <Typography gutterBottom variant="h2">{hotel.name}</Typography>
                    <Typography gutterBottom variant="h6">{hotel.location}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
        <Grid item>
          <Card sx={{ maxWidth: 300, minWidth: 300 }}>
            <CardActionArea onClick={handleAddDialogFormOpen}>
              <CardContent sx={{ padding: 4.5 }}>
                <AddIcon fontSize="large" />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid item>
        <Dialog open={addDialogForm} onClose={handleAddDialogFormClose}>
          <DialogTitle>Add a Flight</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ color: "text.primary" }}>
              To add a Company, please add the following information
            </DialogContentText>
            <FormControl sx={{ maxWidth: 200, padding: "10px" }}>
              <Input inputProps={{ min: 0 }} onChange={(event) => { setHotelName(event.target.value) }} />
              <FormHelperText sx={{ color: "text.primary" }}>Hotel Name</FormHelperText>
            </FormControl>
            <FormControl sx={{ maxWidth: 200, padding: "10px" }}>
              <Input inputProps={{ min: 0 }} onChange={(event) => { setLocation(event.target.value) }} />
              <FormHelperText sx={{ color: "text.primary" }}>Location</FormHelperText>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddHotel}>Add</Button>
            <Button onClick={handleAddDialogFormClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid >
  );
};

export default Company;
