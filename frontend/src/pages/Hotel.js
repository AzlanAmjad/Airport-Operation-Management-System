import {
    Paper,
    Grid,
    Button,
    Typography,
    IconButton,
} from "@mui/material";
import * as React from "react";
// state management
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';



const Hotel = () => {

    const [stays, setStays] = useState([
        {
            id: "0",
            name: "1 Day Stay",
            price: "$999.99",
            description: "Two Beds, 1 Bath, Small Kitchen",
        },
        {
            id: "1",
            name: "2 Day Stay",
            price: "$999.99",
            description: "Two Beds, 1 Bath, Small Kitchen",

        },
        {
            id: "2",
            name: "3 Day Stay",
            price: "$999.99",
            description: "Two Beds, 1 Bath, Small Kitchen",

        },
    ]);

    const [isAdmin, setIsAdmin] = useState(false);




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
                                                <Typography>
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

                    <IconButton size="large" sx={{ color: "white" }} onClick={null}><AddIcon fontSize="inherit" /></IconButton>

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
                                                <Typography>
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