import Grid from "@mui/material/Grid";
import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import CardMedia from '@mui/material/CardMedia';


const Store = () => {

  const [storeName, setStoreName] = useState("Store Name");

  const [items, setItems] = useState([

    { id: 0, name: 'Doritos', price: '$22.99', type: 'Chips' },
    { id: 1, name: 'Coffee Crisp', price: '$33.99', type: 'Candy' },
    { id: 2, name: 'PC Cola', price: '$47.99', type: 'Drink' },
    { id: 3, name: 'Hella Cute Bear', price: '$449.97', type: 'Toy' },


  ]);

  return (

    <Grid
      container
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography variant="h1" component="div" gutterBottom>
          {storeName}
        </Typography>
      </Grid>


      <Grid item container direction="row" spacing={3} xs={6}>

        {items.map((item) => {

          if (!item.type.localeCompare("Chips"))
            return <Grid item>
              <Card sx={{ minWidth: 300, maxWidth: 300, backgroundColor: "background.paper" }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="200"
                    width="100"
                    image="/chips.webp"
                  />
                  <Typography gutterBottom variant="h2">
                    {item.name}
                  </Typography>
                  <Typography gutterBottom variant="h6">{item.price}</Typography>
                  <Typography> </Typography>
                  <Button variant="contained">Add</Button>


                </CardContent>
              </Card>
            </Grid>

          if (!item.type.localeCompare("Candy"))
            return <Grid item>
              <Card sx={{ minWidth: 300, maxWidth: 300, backgroundColor: "background.paper" }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="200"
                    width="100"
                    image="/candy.png"
                  />
                  <Typography gutterBottom variant="h2">
                    {item.name}
                  </Typography>
                  <Typography gutterBottom variant="h6">{item.price}</Typography>
                  <Typography> </Typography>
                  <Button variant="contained">Add</Button>


                </CardContent>
              </Card>
            </Grid>

          if (!item.type.localeCompare("Drink"))
            return <Grid item>
              <Card sx={{ minWidth: 300, maxWidth: 300, backgroundColor: "background.paper" }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="200"
                    width="100"
                    image="/drink.jpg"
                  />
                  <Typography gutterBottom variant="h2">
                    {item.name}
                  </Typography>
                  <Typography gutterBottom variant="h6">{item.price}</Typography>
                  <Typography> </Typography>
                  <Button variant="contained">Add</Button>


                </CardContent>
              </Card>
            </Grid>

          if (!item.type.localeCompare("Toy"))
            return <Grid item>
              <Card sx={{ minWidth: 300, maxWidth: 300, backgroundColor: "background.paper" }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="200"
                    width="100"
                    image="/toy.jpg"
                  />
                  <Typography gutterBottom variant="h2">
                    {item.name}
                  </Typography>
                  <Typography gutterBottom variant="h6">{item.price}</Typography>
                  <Typography> </Typography>
                  <Button variant="contained">Add</Button>


                </CardContent>
              </Card>
            </Grid>

        })}

      </Grid>
    </Grid>

  )
}

export default Store