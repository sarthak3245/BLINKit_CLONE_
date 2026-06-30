import React, { useEffect, useState } from 'react'
// import FruitsandVegitables from './FruitsandVegitables'
// import Productcard from './Productcard'
import Navbar from './Navbar';
import Productcard from './Productcard';

// const AttaRiceDal = () => {
//     const [cartCounter, setCartCounter] = useState(localStorage.getItem("cartcount") ? parseInt(localStorage.getItem("cartcount")) : 0);
    const AttaRiceDal = () => {
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
                const response = await fetch("http://localhost:5000/products/category/attaricedal")
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

             const atta = products.filter(
              (item) => item.category === "attaricedal"
            );

  return (
    <>
    <Navbar cartCounter={cartCounter} />
      <div className="section-header">
        {/* <h2>Dairy, Bread & Eggs</h2> */}
      </div>
<h2 align="center">Atta , Dal & Rice</h2>


    <div className="product-container">
        {atta.map(product => {
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






      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/473af2cd-9aa6-4ef2-97f8-f2e0a42e38b1.png"
          productname="Aashirvaad Chakki Premium MP Sehori Atta"
          time="11 min"
          quantity="5 kg"
          amount="369"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1769779424274-242.png"
          productname="Fortune Chakki Fresh (100% Atta, 0% Maida) Atta"
          time="11 min"
          quantity="5 kg"
          amount="218"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5a934f90-7342-41d6-a084-b1cb5b2d751d.png"
          productname="Whole Farm Chakki Atta (100% Atta, 0% Maida)"
          time="11 min"
          quantity="10 kg"
          amount="400"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9eb20b67-6806-403a-a435-02019ac6fde8.png"
          productname="True Story Organic Bajra Flour"
          time="11 min"
          quantity="500 g"
          amount="48"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cda74c19-6b84-44b2-8b55-25b608bc2c47.png"
          productname="Whole Farm Premium Bajra/Pearl Millets"
          time="11 min"
          quantity="500 g"
          amount="33"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5144d947-e1cb-4f91-8881-e7cb0e3d97f3.png"
          productname="Fortune Hamesha Mini Dubar Basmati Rice (Long Grain)"
          time="11 min"
          quantity="5 kg"
          amount="369"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/381e1978-2bbf-4aa4-9251-9111fad05e9b.png"
          productname="Daawat Rozana Super Basmati Rice - 1 kg (Medium Grain)"
          time="11 min"
          quantity="1 kg"
          amount="80"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/51485cb9-410b-486d-920c-c83ff2733ac9.png"
          productname="Daawat Biryani Rice (Long Grain)"
          time="11 min"
          quantity="1 kg"
          amount="204"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/24bd3e0b-939f-48a9-a5bb-15e7f2009697.png"
          productname="Tata Sampann Unpolished Kala Chana (Black, Brown)"
          time="11 min"
          quantity="1 kg"
          amount="121"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/a38d70b9-59e1-4ced-b06e-a2238c670e12.png"
          productname="Aashirvaad 100% Organic Arhar Dal /Tur Packet"
          time="11 min"
          quantity="500 g"
          amount="139"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div>





      <div className="section-header">
      </div>

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9130d8d0-3e0d-4a61-a784-60477dd3b239.png"
          productname="Tata Sampann 100% Chana Dal Fine Besan/Gram Flour"
          time="11 min"
          quantity="500 g"
          amount="51"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/c2760781-1709-4eb4-82b3-7ebbda91fcbc.png"
          productname="Fortune Maida"
          time="11 min"
          quantity="500 g"
          amount="30"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/81f2e81d-065b-421b-ab6c-b10de1e37cae.png"
          productname="Samrat Maida"
          time="11 min"
          quantity="500 g"
          amount="30"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/81f2e81d-065b-421b-ab6c-b10de1e37cae.png"
          productname="Whole Farm Grocery Bakery Maida"
          time="11 min"
          quantity="500 g"
          amount="30"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e1ea9cdb-de9e-41e5-8a4d-c6b5fff07095.png"
          productname="Tata Sampann Thin Poha"
          time="11 min"
          quantity="500 g"
          amount="51"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        /> }
      </div> */}





      {/* <div className="section-header">
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/fbe4abe0-6082-4dce-9eaa-2b0b1c3b50a4.png"
          productname="Fortune Thick Poha"
          time="11 min"
          quantity="500 g"
          amount="41"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/891bb30e-4970-41ad-af74-209b18c1a19c.png"
          productname="Whole Farm Premium Wheat Daliya/Lapsi"
          time="11 min"
          quantity="500 g"
          amount="32"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/16e12aa6-f40f-42ff-903b-f626c69ed998.png"
          productname="Organic Tattva Organic Quinoa"
          time="11 min"
          quantity="500 g"
          amount="241"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9a969d42-47af-42e6-8bd3-b1dc28363449.png"
          productname="True Story Natural Organic White Poha"
          time="11 min"
          quantity="500 g"
          amount="74"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/73a542aa-8743-4067-ace8-fe06b6bfec12.png"
          productname="Katdare Upvas Bhajani Flour Mix"
          time="11 min"
          quantity="200 g"
          amount="65"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">
      </div>

      <div className="product-row">
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
  )
}

export default AttaRiceDal