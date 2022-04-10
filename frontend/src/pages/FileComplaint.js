
import * as React from "react";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


const FileComplaint = () => {

    const [complaint, setComplaint] = useState("");
    const [entities, setEntities] = useState([

        { id: '0', name: 'YYC International Airport' },
        { id: '1', name: 'Air Canada' },
        { id: '2', name: 'WestJet' },
    ]);

    const [selectedEntity, setSelectedEntity] = useState("");

    const handleEntity = (event) => {
        setSelectedEntity(event.target.value);
    };

    const handleComplaint = (event) => {
        setComplaint(event.target.value);
    };


    return (

        <Grid
            container
            justifyContent="center"
            spacing={5}

        >
            <Grid item xs={12}>
                <Typography variant="h2" component="div" gutterBottom>
                    File A Complaint
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControl sx={{ minWidth: 250 }}>
                    <InputLabel sx={{ color: "text.primary" }}>File Against</InputLabel>
                    <Select
                        value={selectedEntity}
                        onChange={handleEntity}
                    >

                        {entities.map((entity) => (
                            <MenuItem value={entity.name}>{entity.name}</MenuItem>

                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12}>

                <TextField
                    label="Complaint"
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
                        minWidth: 300
                    }
                    }
                    rows={4}
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    onChange={handleComplaint}
                />
            </Grid>

            <Grid item><Button variant="contained">Submit</Button></Grid>

        </Grid>



    );
}

export default FileComplaint;