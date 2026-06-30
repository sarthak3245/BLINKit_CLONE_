import React, { useState, useEffect } from "react";
import "./Productcard.css";

const Productcard = ({
  image,
  productname,
  time,
  quantity,
  amount,
  id,
  setCartCounter,
  isCart: initialIsCart,
  setCartProducts
}) => {

  const [isCart, setIsCart] = useState(false);

  useEffect(() => {
    setIsCart(initialIsCart);
  }, [initialIsCart]);

  const updateproduct = async (value) => {

  try {

    await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isCart: value
      })
    });

    setIsCart(value);

    setCartCounter(prev =>
      value ? prev + 1 : prev - 1
    );

    // instantly remove from cart page
    if (!value && setCartProducts) {

      setCartProducts(prev =>
        prev.filter(item => item._id !== id)
      );

    }

  } catch (error) {
    console.log(error);
  }
}
  return (
    <div className="product-card">

      <img
        src={image}
        alt={productname}
        className="product-img"
      />

      <p className="delivery-time">⏱ {time}</p>

      <h4 className="product-name">{productname}</h4>

      <p className="product-qty">{quantity}</p>

      <div className="price-row">

        <span className="price">Rs.{amount}</span>

        <button
          className="add-btn"
          onClick={() => updateproduct(!isCart)}
        >
          {isCart ? "REMOVE" : "ADD"}
        </button>

      </div>
    </div>
  );
};

export default Productcard;