import { useState } from "react"
import { Button,Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";




const Cart = () => {
    const [cartt, setCartt] = useState([]);
    ;
    const [page, setPage] = useState('cartt');
    
    const [products,setProducts] = useState([
    {
      name: 'YYC-YYZ',
      cost: 32.99
    },
    {
      name: 'YYC-YOW',
      cost: 52.99
    }
    ,
    {
      name: 'YYC-YUL',
      cost : 25.49
    }
  ])

  const addToCart = (product) => {
    
    setCartt([...cartt,{...product}]);
  };

    const totalCost = () =>{
    
    return products.reduce((num,{ cost }) => num + cost, 0)
  
  }

  const removeFromCart = (productRemoval) =>{
    setProducts(
      products.filter((product) => product !==productRemoval))
  };
  
  const navigateTo =(newPage) => {
    setPage(newPage);
  }

  const renderProducts = () =>(
    <div>
      <h1>Fares</h1>
      <div className = "products">
      {products.map((product,idx) => (
          <div className = "product" key = {idx}>
            <h3>{product.name}</h3>
            <Typography>${product.cost}</Typography>
            <Button variant="contained" onClick={() => addToCart(product)}>Add to Cart</Button>
            <Button variant="contained" onClick={() => removeFromCart(product)}>remove</Button>
          </div>
          
      ))}
      </div>
    </div>
  )

  const renderCart = () =>(
    <div>
      <h1> Your Cart</h1>
      <div className = "products">
      {products.map((product,idx) => (
        <div className = "product" key = {idx}> 
          <Grid
          item
          container spacing={7}
          justifyContent="center">
          <Grid item >
            <h3>Flight :{product.name}</h3>
           
          </Grid>
          <Grid item>
            <h4>Price: $ {product.cost}</h4>
            
          </Grid>
        <Divider/>
        
        <Grid item>
        <Button variant="contained" sx ={{marginTop: 2.2}} onClick={() => removeFromCart(product)}>Remove</Button>
        </Grid>
        </Grid>
        </div>
        
      ))}
      <Divider></Divider>
      </div>
      <Grid 
      item 
      container spacing={12}
      justifyContent="flex-start">
        <Grid item xs = {5}>
         <h4>Total Cost: </h4>
         </Grid>
         <Grid item xs = {1}>
         <h4>${totalCost()} </h4>
         </Grid>
         <Grid item xs = {12}>
           <Link style = {{textDecoration: 'none'}} to = "/checkout">
         <Button sx variant = "contained"> Proceed to Checkout </Button>
         </Link>
         </Grid>
         </Grid>
      </div>
  )

  return (
    <div >
      
      {page ==='products' && renderProducts()}
      {page === 'cartt'&& renderCart()} 
      
      
      </div>
  );
}
export default Cart
