import React, { useEffect, useState } from 'react'
// import FruitsandVegitables from './FruitsandVegitables'
import Productcard from './Productcard'
import Navbar from './Navbar'

const PersonalCare = () => {
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
                const response = await fetch("http://localhost:5000/products/category/personalcare")
                const data = await response.json();
                setProducts(data);
                console.log(data)
              } catch (error) {
                alert("Error fetching products : " + error.message);
              }
            }
    
            

            const pcare = products.filter(
              (item) => item.category === "personalCare"
            );
    
    
    
            useEffect(() => {
              fetchProducts();
              fetchCartProducts();
            } , [])
    
  return (
    <>
          <Navbar cartCounter={cartCounter} />

      <div className="section-header">
        <h2>Dairy, Bread & Eggs</h2>
        
      </div>
<h2 align="center">Personal Care</h2>



{/* {products.map(product => {
        return <PersonalCare
        key = {product._id}
        id = {product._id}
        image = {product.image}
        productname={product.productname} 
        time={product.time}
        quantity={product.quantity}
        amount={product.amount}
        cartCounter={cartCounter}
        setCartCounter={setCartCounter}
        />
      })} */}
<div className="product-container">
      {pcare.map(product => {
  return (
    <Productcard
      key={product._id}
      id={product._id}
      image={product.image}
      productname={product.productname}
      time={product.time}
      quantity={product.quantity}
      amount={product.amount}
      // category={product.category}
      cartCounter={cartCounter}
      setCartCounter={setCartCounter}
    />
  );
})}
</div>

     </>
  )
}

export default PersonalCare