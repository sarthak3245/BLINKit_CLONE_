import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import "./Productcardmain.css";
import Navbar from "./Navbar";

const Productcardmain = () => {
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
            const response = await fetch("http://localhost:5000/products")
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

        
  return (
    <>
          <Navbar cartCounter={cartCounter} />

      {/* Title Row */}
      <div className="section-header">
        {/* <h2>Dairy, Bread & Eggs</h2> */}
        <button className="see-all-btn">See All</button>
      </div>
    <div className="product-row">
      {products.map(product => {
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
        isCart={product.isCart}
        />
      })}
      </div>










      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b1f58476-0f18-4d25-a523-d2f29ebcb2c7.png"
          productname="Chitale Pasteurized Cow Milk"
          time="11 min"
          quantity="500 ml"
          amount="29"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5734b087-3ad9-485f-bbe2-52079cd9e35d.png"
          productname="Amul Taaza Toned Milk"
          time="11 min"
          quantity="500 ml"
          amount="29"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3af56c86-9a93-4d0c-a8d5-cf38493e4120.png"
          productname="Amul Masti Pouch Curd"
          time="11 min"
          quantity="390 ml"
          amount="35"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/172ff149-60a1-4e57-968a-f252dc0ba6a6.png"
          productname="Chitale Full Cream Milk"
          time="11 min"
          quantity="500 ml"
          amount="37"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/613787ac-f983-4cfb-b534-e219c8d47b39.png"
          productname="Amul Salted Butter"
          time="11 min"
          quantity="100 g"
          amount="58"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div>





      <div className="section-header">
        <h2>Snacks & Munchies</h2>
        <button className="see-all-btn">See All</button>
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3eae3870-eb2a-43eb-ad30-967d17f7d691.png"
          productname="Protein Chef Baked Coated Peanuts (Masala Roasted Healthy Snacks)"
          time="11 min"
          quantity="50 g"
          amount="69"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/af0c0ce3-e062-4ea6-9a04-5097781adb9b.png"
          productname="Red Rock Deli kettle Chips (Basil Thai Sweet Chilli)"
          time="11 min"
          quantity="58 g"
          amount="51"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d86a2092-dbd1-4017-965e-dcefdb2cbcd2.png"
          productname="Red Rock Deli Cheddar & Parmesan Risotto Baked Potato Chips - Pack of 2"
          time="11 min"
          quantity="2 * 53 g"
          amount="101"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a2d5e14-4425-4d2d-8958-6d51c6fd73d9.png"
          productname="Lo! Foods Gluten Free Ragi Chips Roasted Healthy Snacks"
          time="11 min"
          quantity="75 g"
          amount="99"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2a55bb8b-bf09-454b-9233-cc00404c6a5c.png"
          productname="Beanly Choco Hazelnut Spread with Breadsticks"
          time="11 min"
          quantity="52 g"
          amount="99"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div>





      <div className="section-header">
        <h2>Mouth fresheners</h2>
        <button className="see-all-btn">See All</button>
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8a165649-9050-491d-b77f-2e652f5f47e4.png"
          productname="Rajnigandha Silver Pearl Silver Coated Elaichi Mouth Freshener"
          time="11 min"
          quantity="5.75 g"
          amount="60"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2f00f451-ec5a-40a3-b50a-47289a493ccd.png"
          productname="Mr. Merchant Paan Shots"
          time="11 min"
          quantity="250 g"
          amount="269"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6e295473-6bfd-4ad6-b0e3-ffd993167ec9.png"
          productname="SURILI Calcutta Meetha Pan with Rose Mukhvas Mouth Freshener"
          time="11 min"
          quantity="200 g"
          amount="234"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b417aadf-8504-4db2-9560-469a80461509.png"
          productname="Trident Spearmint Gum (Sugar Free)"
          time="11 min"
          quantity="14 pcs"
          amount="140"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4217f86f-cafb-44e7-8afb-6475fd3e64f1.png"
          productname="Perfora Mouth Spray - Instant Fresh Breath (UM)"
          time="11 min"
          quantity="10 ml"
          amount="159"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div>





      <div className="section-header">
        <h2>Cold Drinks & Juices</h2>
        <button className="see-all-btn">See All</button>
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2faf253a-7e5b-4d53-9774-350add8d50b5.png"
          productname="Bisleri Packaged Water (1 l)"
          time="11 min"
          quantity="1 ltr"
          amount="18"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d926bd74-6357-420d-841f-092197f7de2c.png"
          productname="Bisleri Packaged Water"
          time="11 min"
          quantity="10 ltr"
          amount="108"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6f4bd423-1666-4d23-bf3d-db482be09608.png"
          productname="Red Bull Energy Drink (250 ml)"
          time="11 min"
          quantity="250 ml"
          amount="125"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0c9817d0-2643-4097-98b7-7059ba21e760.png"
          productname="Chitale Full Cream Milk"
          time="11 min"
          quantity="300 ml"
          amount="40"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/87c1c525-750e-475f-91d1-f155026ddaa1.png"
          productname="Amul Lactose Free Milk"
          time="11 min"
          quantity="250 ml"
          amount="25"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div>





      <div className="section-header">
        <h2>Candies & Gums</h2>
        <button className="see-all-btn">See All</button>
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/50e316ae-2ac9-46ed-8967-89ada49b06fd.png"
          productname="Pulse Kachcha Aam / Mango Candy"
          time="11 min"
          quantity="190 g"
          amount="57"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/12822984-7022-44ea-9975-61892ee10652.png"
          productname="Chupa Chups Sour Bites Mixed Fruit Candy"
          time="11 min"
          quantity="61.6 g"
          amount="34"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7420f5a7-bd7b-4c2b-929f-d6034bb254a0.png"
          productname="Amul Masti Pouch Curd"
          time="11 min"
          quantity="100 g"
          amount="23"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/692a27ed-341c-44aa-8aa1-952ca41cba78.png"
          productname="Parle Melody Max Chocolaty Candy"
          time="11 min"
          quantity="135.7 g"
          amount="41"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/da/cms-assets/cms/product/e246629a-42e9-4d2c-b089-b3c9cdd1de17.png"
          productname="Mentos Rainbow Chewy Candy (Assorted) 40 Pcs"
          time="11 min"
          quantity="108 g"
          amount="48"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}
    </>
  );
};

export default Productcardmain;
