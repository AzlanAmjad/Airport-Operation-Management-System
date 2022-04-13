import { useState } from "react"
import { Button } from "@mui/material";




const Cart = () => {
  const [cartt, setCartt] = useState([]);
  const [page, setPage] = useState('products');

  const [products] = useState([
    {
      name: 'AA Battery',
      cost: '$2.99'
    },
    {
      name: 'Blanket',
      cost: '$2.99'
    }

  ])

  const addToCart = (product) => {

    setCartt([...cartt, { ...product }]);
  };

  const removeFromCart = (productRemoval) => {
    setCartt(
      cartt.filter((product) => product !== productRemoval))
  };

  const navigateTo = (newPage) => {
    setPage(newPage);
  }

  const renderProducts = () => (
    <>
      <h1>Fares</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </div>

        ))}
      </div>
    </>
  )

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cartt.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            <Button onClick={() => removeFromCart(product)}>Remove</Button>
          </div>

        ))}
      </div>
    </>
  )

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo('cartt')} sx={{ marginLeft: 100 }}>Go to cart({cartt.length})</button>
        <button onClick={() => navigateTo('products')} sx={{ marginLeft: 100 }}>View Products</button>
      </header>
      {page === 'products' && renderProducts()}
      {page === 'cartt' && renderCart()}


    </div>
  );
}
export default Cart