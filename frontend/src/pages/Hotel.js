import {
    Paper,
    Grid,
    Button,
    Typography,
    IconButton,
    formControlLabelClasses,
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
import TextField from '@mui/material/TextField';
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

const Hotel = () => {

    const [stays, setStays] = useState([
        {
            id: null,
            name: null,
            price: null,
            description: null,
            hotel_name: null
        }
    ]);

    const { airport_admin } = useSelector((state) => state.user);

    const { hotel } = useParams();

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
    const [reload, setReload] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAddStay = async () => {
        try {

            const result = await axiosInstance.post("stay/", {

                name: stayName,
                price: price,
                description: description,
                hotel: hotel,

            });
            console.log(result.data);
            setAddDialogForm(false);
            setReload(true);
        } catch (err) {

        }


    };


    useEffect(async () => {


        try {
            const allComplaints = await axiosInstance.get(`/stays/${hotel}`, {

            })
                .then((response) => {
                    setStays(response.data);
                });



        } catch (e) {
            console.error(e);
        }

        setLoading(false);
    }, [reload]);




    return (
        <>

            {loading ? (
                <Grid item>
                    <ClipLoader loading={loading} size={70} />
                </Grid>
            ) : (
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h1" component="div" gutterBottom>
                            {stays[0]['hotel_name']}
                        </Typography>
                    </Grid>
                    {airport_admin && <Grid container justifyContent="center">
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
                    {!airport_admin &&
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

                    <Grid itemx xs={12}>
                        <Dialog open={addDialogForm} onClose={handleAddDialogFormClose}>
                            <DialogTitle>Add a Stay</DialogTitle>
                            <DialogContent>
                                <DialogContentText sx={{ color: "text.primary" }}>
                                    To add a Stay, please add the following information
                                </DialogContentText>
                                <FormControl sx={{ maxWidth: 200, padding: "10px" }}>
                                    <Input inputProps={{ min: 0 }} onChange={(event) => { setStayName(event.target.value) }} />
                                    <FormHelperText sx={{ color: "text.primary" }}>Stay Name</FormHelperText>
                                </FormControl>
                                <FormControl sx={{ maxWidth: 100, padding: "10px" }}>
                                    <Input type="number" inputProps={{ min: 0 }} onChange={(event) => { setPrice(event.target.value) }} />
                                    <FormHelperText sx={{ color: "text.primary" }}>Price ($)</FormHelperText>
                                </FormControl>

                                <FormControl>
                                    <TextField
                                        label="Description"
                                        multiline
                                        variant="outlined"
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
                                            minWidth: 550
                                        }
                                        }
                                        rows={4}
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                        }}
                                        onChange={(event) => { setDescription(event.target.value) }}
                                    />
                                </FormControl>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleAddStay}>Add</Button>
                                <Button onClick={handleAddDialogFormClose}>Cancel</Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>


                </Grid >

            )}
        </>


    );
}

export default Hotel;