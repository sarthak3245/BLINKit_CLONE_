import React, { useState } from 'react'
import Navbar from './Navbar'
import "./Productcard.css";
import Productcard from './Productcard';

const Cart = () => {
      const [cartCounter, setCartCounter] = useState(localStorage.getItem("cartProArrObj") ? JSON.parse(localStorage.getItem("cartProArrObj")) : [0]);
      console.log(cartCounter);
  return (
    <>
    <Navbar />
    {cartCounter.map((product, index) => (
      <Productcard
          image={product.image}
          productname={product.productname}
          time={product.time}
          quantity={product.quantity}
          amount={product.amount} 
          category={product.category}
          setCartCounter={setCartCounter}
          cartCounter={cartCounter}
          />
    ))}

    
    
    </>
  )
}

export default Cart