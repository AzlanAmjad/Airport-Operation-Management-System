import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

const Reservation = () => {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center" spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h1" component="div" gutterBottom>
          Reserve a hotel with...
        </Typography>
      </Grid>

      <Grid item container spacing={3} xs={6} justifyContent="space-around">
        <Grid item xs={5}>
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea onClick={() => navigate(`/reservation/marriott`)}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Marriott International Inc.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea onClick={() => navigate(`/reservation/hilton`)}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hilton Worldwide Holdings Inc.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Reservation;
