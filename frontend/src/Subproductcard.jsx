import React from "react";
import "./Subproductcard.css";

const Subproductcard = ({ image, title }) => {
  return (
    <div className="subproduct-card">
      <img src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default Subproductcard;
