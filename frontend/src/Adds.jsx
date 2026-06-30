import React from "react";
import "./Adds.css";
import {Link} from 'react-router-dom'
// import FruitsandVegitablesmain from "./FruitsandVegitablesmain";

const Adds = () => {
  return (
    <>
    {/* <FruitsandVegitablesmain /> */}
    <div className="adds-wrapper">

      {/* TOP BANNER */}
      <div className="big-banner veg">
        <div className="banner-text">
          <h2>Fresh Fruits & Vegetables</h2>
          <p>Farm-picked freshness</p>
          <p>Delivered in minutes</p>
          <Link to= "/fruitsandvegitablesmain">
          <button>Shop Now</button>
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e"
          alt="Fruits and Vegetables"
        />
      </div>

      {/* BOTTOM ROW */}
      <div className="bottom-row">

        <div className="small-banner dairy">
          <div className="banner-text">
            <h3>Dairy & Breakfast</h3>
            <p>Milk & essentials</p>
            <Link to="/dairy"><button>Shop Now</button></Link>
          </div>
          <img
            src="https://www.prabhatdairy.in/assets/webp/home-product.webp"
            alt="Dairy products"
          />
        </div>

        <div className="small-banner pet">
          <div className="banner-text">
            <h3>Pet Care</h3>
            <p>Food & accessories</p>
            <Link to="/petcare"><button>Shop Now</button></Link>
          </div>
          <img
            src="https://hvhct.com/wp-content/uploads/2024/02/Top-10-Pet-Care-Tips-A-Guide-to-Happy-Healthy-Pets.jpg" alt="Pet care"/>
        </div>

        <div className="small-banner medical">
          <div className="banner-text">
            <h3>Medicines</h3>
            <p>Health essentials</p>
            <Link to="/medicine"><button>Shop Now</button></Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae"
            alt="Medicines"
          />
        </div>

      </div>
    </div>
    </>
  );
};

export default Adds;
