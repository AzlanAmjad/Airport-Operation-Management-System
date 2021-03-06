import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { Grid, Paper, Button, TextField, Autocomplete } from "@mui/material";
import { ClipLoader } from "react-spinners";
import axiosInstance from "../components/Axios";

const Complaints = () => {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [fileAirportComplaint, setFileAirportComplaint] = useState(false);
  const [fileAirlineComplaint, setFileAirlineComplaint] = useState(false);

  const [passenger, setPassenger] = useState({});
  const [airlines, setAirlines] = useState([]);
  const [airportComplaints, setAirportComplaints] = useState([]);
  const [airlineComplaints, setAirlineComplaints] = useState([]);

  const [description, setDescription] = useState(null);
  const [airline, setAirline] = useState(null);

  const { id } = useSelector((state) => state.user);

  useEffect(async () => {
    try {
      const passenger = await axiosInstance.get(`passenger/${id}/`);
      setPassenger(passenger.data);
    } catch (err) {
      console.log(err);
    }

    try {
      const airlines = await axiosInstance.get("airlines/");
      setAirlines(airlines.data);
    } catch (err) {
      console.log(err);
    }

    try {
      const airport_complaints = await axiosInstance.get(
        `passenger/airport-complaints/${id}/`
      );
      setAirportComplaints(airport_complaints.data);
    } catch (err) {
      console.log(err);
    }

    try {
      const airline_complaints = await axiosInstance.get(
        `passenger/airline-complaints/${id}/`
      );
      setAirlineComplaints(airline_complaints.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }, [id, submitting]);

  const submitAirportComplaint = async () => {
    setSubmitting(true);

    try {
      const ap_complaint = await axiosInstance.post("airport-complaint/", {
        description: description,
        passenger: passenger.id,
      });
      console.log(ap_complaint.data);
    } catch (err) {
      console.log(err);
    }

    setSubmitting(false);
  };

  const submitAirlineComplaint = async () => {
    setSubmitting(true);

    const al = airline.match(/\d+/);
    console.log(al);

    try {
      const al_complaint = await axiosInstance.post("airline-complaint/", {
        description: description,
        passenger: passenger.id,
        airline: al[0],
      });
      console.log(al_complaint.data);
    } catch (err) {
      console.log(err);
    }

    setSubmitting(false);
  };

  return (
    <Grid item container justifyContent="center" alignItems="center">
      {loading ? (
        <Grid item>
          <ClipLoader loading={loading} size={70} color={"#ffffff"} />
        </Grid>
      ) : (
        <Grid
          item
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          rowSpacing={5}
          mb="10px"
          px="70px"
        >
          <Grid item>
            <Typography variant="h2" fontWeight="bold">
              Your complaints
            </Typography>
          </Grid>
          {!fileAirportComplaint && !fileAirlineComplaint && (
            <Grid
              item
              container
              direction="row"
              justifyContent="flex-start"
              spacing={3}
            >
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ minWidth: "220px" }}
                  onClick={() => setFileAirportComplaint(true)}
                >
                  File Airport Complaint
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ minWidth: "220px" }}
                  onClick={() => setFileAirlineComplaint(true)}
                >
                  File Airline Complaint
                </Button>
              </Grid>
            </Grid>
          )}
          {fileAirportComplaint && (
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              rowSpacing={3}
            >
              <Grid item>
                <Typography variant="h6">Airport Complaint</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Complaint"
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
                    minWidth: 600,
                  }}
                  rows={4}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setFileAirportComplaint(false);
                      setDescription(null);
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={() => {
                      submitAirportComplaint();
                      setFileAirportComplaint(false);
                      setDescription(null);
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
          {fileAirlineComplaint && (
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              rowSpacing={3}
            >
              <Grid item>
                <Typography variant="h6">Airline Complaint</Typography>
              </Grid>
              <Grid item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={airlines.map((item) => {
                    const airline = `${item.id} - ${item.name}, ${item.location}`;
                    return airline;
                  })}
                  sx={{ width: 300 }}
                  value={airline}
                  onChange={(event, values) => {
                    setAirline(values);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Airline"
                      sx={{
                        svg: "white",
                        input: "white",
                        label: "white",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "white",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "red",
                        },
                        "&.MuiOutlinedInput-notchedOutline.Mui-focused": {
                          borderColor: "red",
                        },
                        "& .MuiButtonBase-root.MuiAutocomplete-clearIndicator":
                          {
                            color: "red",
                          },
                        "& .MuiButtonBase-root.MuiAutocomplete-popupIndicator":
                          {
                            color: "white",
                          },
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Complaint"
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
                    minWidth: 600,
                  }}
                  rows={4}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setFileAirlineComplaint(false);
                      setDescription(null);
                      setAirline(null);
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={() => {
                      submitAirlineComplaint();
                      setFileAirlineComplaint(false);
                      setDescription(null);
                      setAirline(null);
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid
            item
            container
            direction="column"
            alignItems="flex-start"
            rowSpacing={3}
          >
            <Grid item>
              <Typography variant="h6">Airport Complaints</Typography>
            </Grid>
            {airportComplaints.length === 0 ? (
              <Grid item>
                <Typography>No airport complaints</Typography>
              </Grid>
            ) : (
              <Grid item container direction="column" rowSpacing={3}>
                {airportComplaints.map((complaint) => {
                  return (
                    <Grid item key={complaint.pk} sx={{ width: "800px" }}>
                      <Paper elevation={12} sx={{ padding: "30px 50px" }}>
                        <Grid
                          container
                          direction="column"
                          alignItems="flex-start"
                          rowSpacing={1}
                        >
                          <Grid item>
                            {complaint.admin ? (
                              <Typography fontWeight="bold">
                                Resolved{" "}
                              </Typography>
                            ) : (
                              <Typography fontWeight="bold">
                                Not Resolved{" "}
                              </Typography>
                            )}
                          </Grid>
                          <Grid item>
                            <Typography>
                              Complaint: {complaint.description}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="flex-start"
            rowSpacing={3}
          >
            <Grid item>
              <Typography variant="h6">Airline Complaints</Typography>
            </Grid>
            {airlineComplaints.length === 0 ? (
              <Grid item>
                <Typography>No airline complaints</Typography>
              </Grid>
            ) : (
              <Grid item container direction="column" rowSpacing={3}>
                {airlineComplaints.map((complaint) => {
                  return (
                    <Grid item key={complaint.pk} sx={{ width: "800px" }}>
                      <Paper elevation={12} sx={{ padding: "30px 50px" }}>
                        <Grid
                          container
                          direction="column"
                          alignItems="flex-start"
                          rowSpacing={1}
                        >
                          <Grid item>
                            {complaint.admin ? (
                              <Typography fontWeight="bold">
                                Resolved{" "}
                              </Typography>
                            ) : (
                              <Typography fontWeight="bold">
                                Not Resolved{" "}
                              </Typography>
                            )}
                          </Grid>
                          <Grid item>
                            <Typography>
                              Against: {complaint.airline_name}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography>
                              Complaint: {complaint.description}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Complaints;
