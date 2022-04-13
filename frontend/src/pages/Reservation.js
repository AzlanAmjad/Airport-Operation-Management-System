import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Icon } from "@mui/material";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Button from "@mui/material/Button";
import { ClipLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";

const Reservation = () => {

  const [companies, setCompanies] = useState([
    {
      id: null,
      name: null,
      admin: null
    }
  ]);


  const { airport_admin } = useSelector((state) => state.user);

  const [companyName, setCompanyName] = useState('');
  const [admin, setAdmin] = useState('yeye@hotmail.com');

  const [addDialogForm, setAddDialogForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const handleAddDialogFormOpen = () => {
    setAddDialogForm(true);
  }
  const handleAddDialogFormClose = () => {
    setAddDialogForm(false);
  }


  const handleAddCompany = async () => {
    try {

      console.log(companyName);
      const result = await axiosInstance.post("company/", {

        name: companyName

      });
      console.log(result.data);

      setAddDialogForm(false);
      if (reload) {
        setReload(false);
      }
      else {
        setReload(true);
      }
    } catch (err) {

    }


  };




  useEffect(async () => {


    try {


      const allComplaints = await axiosInstance.get(`/companies/`, {

      })
        .then((response) => {
          setCompanies(response.data);
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
        <Grid item>
          <ClipLoader loading={loading} size={70} />
        </Grid>
      ) : (
        <Grid container justifyContent="center" spacing={5}>

          {airport_admin &&
            <Grid item container spacing={3} xs={6} justifyContent="space-around">
              {companies.length === 0 ? (

                <Grid item xs={5}>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea onClick={handleAddDialogFormOpen}>
                      <CardContent>
                        <AddIcon />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Typography variant="h1" component="div" gutterBottom>
                    Reserve a hotel with...
                  </Typography>
                </Grid>
              )}

              {companies.map((company) => (

                <Grid item xs={5}>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea onClick={() => navigate(`/reservation/${company.id}`)}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {company.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}

              {companies.length > 0 && airport_admin &&

                <Grid item xs={5}>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea onClick={handleAddDialogFormOpen}>
                      <CardContent>
                        <AddIcon />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>

              }
            </Grid>


          }


          {!airport_admin &&
            <Grid item container spacing={3} xs={6} justifyContent="space-around">
              {companies.length === 0 ? (

                <Grid item xs={5}>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea onClick={handleAddDialogFormOpen}>
                      <CardContent>
                        <AddIcon />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Typography variant="h1" component="div" gutterBottom>
                    Reserve a hotel with...
                  </Typography>
                </Grid>
              )}

              {companies.map((company) => (

                <Grid item xs={5}>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea onClick={() => navigate(`/reservation/${company.id}`)}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {company.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}


            </Grid>


          }

          <Grid item>
            <Dialog open={addDialogForm} onClose={handleAddDialogFormClose}>
              <DialogTitle>Add a Company</DialogTitle>
              <DialogContent>
                <DialogContentText sx={{ color: "text.primary" }}>
                  To add a Company, please add the following information
                </DialogContentText>
                <FormControl sx={{ maxWidth: 200, padding: "10px" }}>
                  <Input inputProps={{ min: 0 }} onChange={(event) => { setCompanyName(event.target.value) }} />
                  <FormHelperText sx={{ color: "text.primary" }}>Name</FormHelperText>
                </FormControl>


              </DialogContent>
              <DialogActions>
                <Button onClick={handleAddCompany}>Add</Button>
                <Button onClick={handleAddDialogFormClose}>Cancel</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid >

      )
      }
    </>
  );
};

export default Reservation;
