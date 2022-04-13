import { useState, useEffect } from "react"
import { Button, Divider, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Paper, IconButton } from "@mui/material";
import { remove } from "../features/cart/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);


  return (

    <Grid
      container
      justifyContent="center"

    >

      <Grid item container direction="column" spacing={2} xs={6}>

        {items.map((item) => (

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
                  {!!item.name ? (
                    <Grid item >
                      <Typography variant="h2">{item.name}</Typography>
                    </Grid>
                  ) : (
                    <Grid item >
                      <Typography variant="h2">{item.cabin}</Typography>
                    </Grid>
                  )}
                  <Grid item>
                    {
                      <Typography variant="h7">Price :{item.price}</Typography>

                    }

                  </Grid>

                </Grid>
                {item.type === "stay" ? (
                  <Grid item >
                    <Button variant="contained" sx={{ marginTop: 2.2 }} onClick={() => {
                      dispatch(remove({ ...item, type: "stay" }));
                    }}>Remove</Button>
                  </Grid>
                ) : (

                  <Grid item >
                    <Button variant="contained" sx={{ marginTop: 2.2 }} onClick={() => {
                      dispatch(remove({ ...item, type: "fare" }));
                    }}>Remove</Button>
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        ))}
        <Grid item>
          <Divider></Divider>
        </Grid>





      </Grid>



    </Grid>



  );
}
export default Cart
