import { useState, useEffect } from "react";
import { Button, Divider, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Paper } from "@mui/material";
import { remove } from "../features/cart/cartSlice";
import axiosInstance from "../components/Axios";

const Cart = () => {
  const dispatch = useDispatch();

  const [passenger, setPassenger] = useState({});
  const { items } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const { id } = useSelector((state) => state.user);

  useEffect(async () => {
    try {
      const passenger = await axiosInstance.get(`passenger/${id}/`);
      console.log(passenger.data);
      setPassenger(passenger.data);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const handleCheckout = async () => {
    // post books for fare
    const books = [];
    items.map((item) => {
      if (item.type === "fare") {
        books.push({
          fare: item.id,
          passenger: passenger.id,
        });
      }
    });
  };

  return (
    <>
      {items.length === 0 ? (
        <Typography variant="h2">Your cart is empty</Typography>
      ) : (
        <Grid item container justifyContent="center">
          <Grid item container direction="column" spacing={2} xs={6}>
            {items.map((item) => (
              <Grid item sx={{ width: "100%" }}>
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
                        <Grid item>
                          <Typography variant="h2">{item.name}</Typography>
                        </Grid>
                      ) : (
                        <Grid item>
                          <Typography variant="h2">
                            {item.cabin} Class
                          </Typography>
                        </Grid>
                      )}
                      <Grid item>
                        {<Typography>CA ${item.price}</Typography>}
                      </Grid>
                    </Grid>
                    {item.type === "stay" ? (
                      <Grid
                        item
                        container
                        justifyContent="space-evenly"
                        direction="column"
                        alignItems="flex-end"
                      >
                        <Grid item>
                          <Button
                            variant="contained"
                            sx={{ marginTop: 2.2 }}
                            onClick={() => {
                              dispatch(remove({ ...item, type: "stay" }));
                            }}
                          >
                            Remove
                          </Button>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid item>
                        <Button
                          variant="contained"
                          sx={{ marginTop: 2.2 }}
                          onClick={() => {
                            dispatch(remove({ ...item, type: "fare" }));
                          }}
                        >
                          Remove
                        </Button>
                      </Grid>
                    )}
                  </Grid>
                </Paper>
              </Grid>
            ))}
            <Grid item>
              <Divider></Divider>
            </Grid>

            <Grid
              item
              container
              direction="column"
              alignItems="flex-end"
              justifyContent="space-evenly"
            >
              <Grid item>
                <Typography variant="h2">Total: ${total}.00</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ marginTop: 2.2 }}
                  onClick={() => {
                    handleCheckout();
                  }}
                >
                  Checkout
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default Cart;
