import {
    Paper,
    Grid,
    Button,
    Typography,
    IconButton,
    getListItemSecondaryActionClassesUtilityClass,
} from "@mui/material";
import * as React from "react";
// state management
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import axiosInstance from "../components/Axios";
import { useParams } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from "@mui/material/Input";



const Hotel = () => {

    const [stays, setStays] = useState([
        {
            id: null,
            name: null,
            price: null,
            description: null,
        }
    ]);

    const [isAdmin, setIsAdmin] = useState(true);

    const hotel = useParams();

    const [addDialogForm, setAddDialogForm] = useState(false);
    const handleAddDialogFormOpen = () => {
        setAddDialogForm(true);
    }
    const handleAddDialogFormClose = () => {
        setAddDialogForm(false);
    }

    const [stayName, setStayName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [hotelName, setHotelName] = useState('');




    useEffect(() => {

        async function fetchData() {
            try {
                const allComplaints = await axiosInstance.get(`/stays/${hotel.hotel}`, {

                })
                    .then((response) => {
                        setStays(response.data);
                    });



            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
        console.log(hotel);


    }, []);




    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Typography variant="h1" component="div" gutterBottom>
                    HotelName
                </Typography>
            </Grid>
            {isAdmin && <Grid container justifyContent="center">
                <Grid item container direction="column" spacing={2} xs={6}>
                    {stays.map((stay) => {
                        return (

                            <Grid
                                item
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
                                            <Grid item>
                                                <Typography variant="h2" >
                                                    {stay.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography>{stay.description}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography>{stay.price}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained">Reserve</Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        )
                    })}

                    <IconButton size="large" sx={{ color: "white" }} onClick={handleAddDialogFormOpen}><AddIcon fontSize="inherit" /></IconButton>

                </Grid>
            </Grid>
            }
            {!isAdmin &&
                <Grid item container direction="column" spacing={2} xs={6}>
                    {stays.map((stay) => {
                        return (

                            <Grid
                                item
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
                                            <Grid item>
                                                <Typography variant="h2">
                                                    {stay.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography>{stay.description}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography>{stay.price}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained">Reserve</Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            }




        </Grid >


    );
}

export default Hotel;