import { useState, useEffect } from "react";
import { Button, Divider, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Paper } from "@mui/material";
import { empty, remove } from "../features/cart/cartSlice";
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
    if (books.length !== 0) {
      try {
        const result = await axiosInstance.post("multiple-books/", books);
      } catch (err) {
        console.log(err);
      }
    }

    // post transaction and put the stays

    // get all stays
    const stays = [];
    items.map((item) => {
      if (item.type === "stay") {
        stays.push(item);
      }
    });

    // group stays based off of company
    const company_groups = stays.reduce(
      (groups, item) => ({
        ...groups,
        [item.company]: [...(groups[item.company] || []), item],
      }),
      {}
    );
    console.log(company_groups);

    const transactions = [];
    for (const company in company_groups) {
      transactions.push({
        passenger: passenger.id,
        company: company,
        type: "reservation",
      });
    }
    console.log(transactions);

    // post transactions
    transactions.map(async (transaction) => {
      try {
        axiosInstance.post("transaction/", transaction).then((response) => {
          // put the stays for the company passenger is transacting with
          const company_stays = [];
          company_groups[transaction.company].map((stay) => {
            company_stays.push({
              name: stay.name,
              price: stay.price,
              description: stay.description,
              hotel: stay.hotel,
              transaction: response.data.id,
            });
          });
          // PUT COMPANY STAYS
          console.log(company_stays);
        });
      } catch (err) {
        console.log(err);
      }
    });

    //dispatch(empty());
  };

  return (
    <>
      {items.length === 0 ? (
        <Typography variant="h2">Your cart is empty</Typography>
      ) : (
        <Grid item container justifyContent="center">
          <Grid item container direction="column" spacing={2} xs={6}>
            {items.map((item) => (
              <Grid item sx={{ width: "100%" }} key={item.id}>
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
