import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
// import FruitsandVegitables from './FruitsandVegitables'
import Productcard from './Productcard'


const Colddrinksjuices = () => {
                const [cartCounter, setCartCounter] = useState(0);
                const [products, setProducts] = useState([]);

                const fetchCartProducts = async () => {
                    try {
                      const response = await fetch("http://localhost:5000/products/cart")
                      const data = await response.json();
                      console.log("length check ", data.length)
                      setCartCounter(data.length);
                    } catch (error) {
                      alert("Error fetching cart : " + error.message);
                    }
                  }

                  const fetchProducts = async () => {
                    try {
                      const response = await fetch("http://localhost:5000/products/category/colddrinksjuices")
                      const data = await response.json();
                      setProducts(data);
                      console.log(data)
                    } catch (error) {
                      alert("Error fetching products : " + error.message);
                    }
                  }
          
                  
          

          
          
                  useEffect(() => {
                    fetchProducts();
                    fetchCartProducts();
                  } , [])

                  const colddrinks = products.filter(
                    (item) => item.category === "colddrinksjuices"
                  );

return (
    <>
        <Navbar cartCounter={cartCounter} />

      <div className="section-header">
        
        
      </div>
<h2 align="center">Snacks & Munchies</h2>

<div className="product-container">
{colddrinks.map(product => {
        return <Productcard
        key = {product._id}
        id = {product._id}
        image = {product.image}
        productname={product.productname} 
        time={product.time}
        quantity={product.quantity}
        amount={product.amount}
        // category={product.category}
        cartCounter={cartCounter}
        setCartCounter={setCartCounter}
        />
      })}
      </div>

</>
)
}

export default Colddrinksjuices
