

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Productcard from "./Productcard";

const Mycart = () => {

  const [cartProducts, setCartProducts] = useState([]);

  const fetchCartProducts = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/products/cart"
      );

      const data = await response.json();

      setCartProducts(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  return (
    <>

      <Navbar cartCounter={cartProducts.length} />

      <div className="section-header">
        <h2>My Cart</h2>
      </div>

      <div className="product-row">

        {cartProducts.length > 0 ? (

          cartProducts.map(product => {

            return (
              <Productcard
                key={product._id}
                id={product._id}
                image={product.image}
                productname={product.productname}
                time={product.time}
                quantity={product.quantity}
                amount={product.amount}
                category={product.category}
                isCart={product.isCart}
                cartCounter={cartProducts.length}
                setCartCounter={() => {}}
                setCartProducts={setCartProducts}
              />
            );
          })

        ) : (

          <h3>Your cart is empty</h3>

        )}

      </div>

    </>
  );
};

export default Mycart;