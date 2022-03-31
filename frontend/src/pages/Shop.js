import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";


const Shop = () => {


  const navigate = useNavigate();

  return (
    <Grid
      container
      justifyContent="center"
      spacing={5}

    >
      <Grid item xs={12}>
        <Typography variant="h1" component="div" gutterBottom>
          Select a Store
        </Typography>
      </Grid>

      <Grid item container spacing={3} xs={6} justifyContent="space-around">
        <Grid item xs={5}>
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea onClick={() => navigate(`/shop/crispers`)}>
              <CardMedia
                component="img"
                height="300"
                width="200"
                image="/snack-store.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Crispers Snacks
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea onClick={() => navigate(`/shop/sodies`)}>
              <CardMedia
                component="img"
                height="300"
                image="/soda-store.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sodie's Drinks
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

    </Grid >

  )
}

export default Shop