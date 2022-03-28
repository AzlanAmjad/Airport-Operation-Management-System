import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import Typography from "@mui/material/Typography";
import DatePicker from "@mui/lab/DatePicker";
import { styled } from "@mui/material/styles";
import { CardActionArea, Card, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import FlightIcon from '@mui/icons-material/Flight';
import ArticleIcon from '@mui/icons-material/Article';




const AirlineDashboard = () => {

    return (

        <Grid
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            rowSpacing={5}
            wrap="nowrap"
            height="400px"
        >
            <Grid
                item
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                rowSpacing={4}
                wrap="nowrap"
            >
                <Grid item>
                    <Typography variant="h1" component="div" gutterBottom>
                        Welcome,
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="center"
                    spacing={2}
                    rowSpacing={3}
                >

                    <Grid item>


                        <Card>
                            <CardActionArea component={RouterLink} to="/:airline/add-flight">
                                <CardContent>
                                    <FlightIcon />
                                    <Typography>Add Flight</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>

                    <Grid item>

                        <Card>
                            <CardActionArea component={RouterLink} to="/:airline/omplaints">
                                <CardContent>
                                    <ArticleIcon />
                                    <Typography>Complaints</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                </Grid>


            </Grid>
        </Grid>

    );
}

export default AirlineDashboard;