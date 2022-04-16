import Grid from "@mui/material/Grid";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { CardActionArea } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../components/Axios";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

const Company = () => {
  const { company } = useParams();

  const [hotels, setHotels] = useState([]);
  const [hotelName, setHotelName] = useState("");

  const { airport_admin } = useSelector((state) => state.user);

  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  const [addDialogForm, setAddDialogForm] = useState(false);
  const handleAddDialogFormOpen = () => {
    setAddDialogForm(true);
  };
  const handleAddDialogFormClose = () => {
    setAddDialogForm(false);
  };

  const handleAddHotel = async () => {
    try {
      const result = await axiosInstance.post("hotel/", {
        name: hotelName,
        location: location,
        company: company,
      });
      console.log(result.data);

      setAddDialogForm(false);
      if (reload) {
        setReload(false);
      } else {
        setReload(true);
      }
    } catch (err) {}
  };

  useEffect(async () => {
    try {
      const hotels = await axiosInstance
        .get(`/hotels/${company}`, {})
        .then((response) => {
          setHotels(response.data);
        });
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  }, [reload]);

  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <Grid container justifyContent="center">
          <Grid item>
            <ClipLoader loading={loading} size={70} />
          </Grid>
        </Grid>
      ) : (
        <Grid container justifyContent="center" spacing={5}>
          {airport_admin && (
            <Grid
              item
              container
              spacing={3}
              xs={6}
              justifyContent="space-around"
            >
              {hotels.length === 0 ? (
                <Grid item>
                  <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                    <CardActionArea onClick={handleAddDialogFormOpen}>
                      <CardContent sx={{ padding: 4.5 }}>
                        <AddIcon fontSize="large" />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Typography variant="h2" component="div" gutterBottom>
                    {hotels[0]["company_name"]}
                  </Typography>
                </Grid>
              )}

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
                      <CardActionArea
                        onClick={() =>
                          navigate(`/reservation/${company}/${hotel.pk}`)
                        }
                      >
                        <CardContent>
                          <Typography gutterBottom variant="h2">
                            {hotel.name}
                          </Typography>
                          <Typography gutterBottom variant="h6">
                            {hotel.location}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}

              {hotels.length > 0 && (
                <Grid item>
                  <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                    <CardActionArea onClick={handleAddDialogFormOpen}>
                      <CardContent sx={{ padding: 4.5 }}>
                        <AddIcon fontSize="large" />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )}
            </Grid>
          )}
          {!airport_admin && (
            <Grid
              item
              container
              spacing={3}
              xs={6}
              justifyContent="space-around"
            >
              {hotels.length === 0 ? (
                <Grid item xs={12}>
                  <Typography variant="h2" component="div" gutterBottom>
                    Uh Oh! No Hotels were found :(
                  </Typography>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Typography variant="h2" component="div" gutterBottom>
                    {hotels[0]["company_name"]}
                  </Typography>
                </Grid>
              )}

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
                      <CardActionArea
                        onClick={() =>
                          navigate(`/reservation/${company}/${hotel.pk}`)
                        }
                      >
                        <CardContent>
                          <Typography gutterBottom variant="h2">
                            {hotel.name}
                          </Typography>
                          <Typography gutterBottom variant="h6">
                            {hotel.location}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}

          <Grid item>
            <Dialog open={addDialogForm} onClose={handleAddDialogFormClose}>
              <DialogTitle>Add a Hotel</DialogTitle>
              <DialogContent>
                <DialogContentText sx={{ color: "text.primary" }}>
                  To add a Hotel, please add the following information
                </DialogContentText>
                <FormControl sx={{ maxWidth: 200, padding: "10px" }}>
                  <Input
                    inputProps={{ min: 0 }}
                    onChange={(event) => {
                      setHotelName(event.target.value);
                    }}
                  />
                  <FormHelperText sx={{ color: "text.primary" }}>
                    Hotel Name
                  </FormHelperText>
                </FormControl>
                <FormControl sx={{ maxWidth: 200, padding: "10px" }}>
                  <Input
                    inputProps={{ min: 0 }}
                    onChange={(event) => {
                      setLocation(event.target.value);
                    }}
                  />
                  <FormHelperText sx={{ color: "text.primary" }}>
                    Location
                  </FormHelperText>
                </FormControl>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleAddHotel}>Add</Button>
                <Button onClick={handleAddDialogFormClose}>Cancel</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Company;
