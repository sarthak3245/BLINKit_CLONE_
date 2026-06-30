


//this page is common for productcard of all type/categories products 

import React from 'react'

const FruitsandVegitables = ({title,image,productname,time,quantity,amount}) => {
  return (
    <>
    <h2>{title}</h2>
    <div className="product-card">
      {/* Product Image */}
      <img
        src={image}
        alt={productname}
        className="product-img"
      />

      {/* Delivery Time */}
      <p className="delivery-time">⏱ {time}</p>

      {/* Product Name */}
      <h4 className="product-name">{productname}</h4>

      {/* Quantity */}
      <p className="product-qty">{quantity}</p>

      {/* Price & Add */}
      <div className="price-row">
        <span className="price">Rs.{amount}</span>
        <button className="add-btn">ADD</button>
      </div>
    </div>
    </>
  )
}

export default FruitsandVegitables