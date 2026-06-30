import React, { useEffect, useState } from 'react'
// import FruitsandVegitables from './FruitsandVegitables'
import Productcard from './Productcard'
import Navbar from './Navbar'

const Masalaoil = () => {
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
                const response = await fetch("http://localhost:5000/products/category/masalaoil")
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
            const masala = products.filter(
              (item) => item.category === "masalaoil"
            );
  return (
    <>
        <Navbar cartCounter={cartCounter} />

      <div className="section-header">
        <h2>Dairy, Bread & Eggs</h2>
      </div>
<h2 align="center">Masala & Oil</h2>

<div className="product-container">

{masala.map(product => {
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
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/7fd5167b-ebc5-4b45-8ee3-f839de3474d5.png"
          productname="Katdare Sesame Chutney"
          time="11 min"
          quantity="100 g"
          amount="50"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/434d863f-688f-41c2-b8c5-a84d9452e375.png"
          productname="Everest Coriander Powder/Dhania"
          time="11 min"
          quantity="100 g"
          amount="40"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/027c303a-91cd-4a96-a4ae-5ca1dce758a7.png"
          productname="Maggi Masala-ae-Magic Sabzi Masala"
          time="11 min"
          quantity="72 g"
          amount="60"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/3213c120-52fd-4ed5-9772-dfdeae8329e4.png"
          productname="Everest Kashmiri Red Chilli Powder"
          time="11 min"
          quantity="100 g"
          amount="101"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/fc79fa0b-f9a8-4ccb-8291-8b322155adfa.png"
          productname="Suhana Paneer Tikka Masala Mix"
          time="11 min"
          quantity="50 g"
          amount="32"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}




{/* 
      <div className="section-header">
        
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/7de81ae0-876d-49ef-8f48-5af4cfd7d79c.png"
          productname="Fortune Premium Kachi Ghani Pure Mustard Oil (910 g)"
          time="11 min"
          quantity="910 g"
          amount="188"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9aeb0ccc-6a54-43ff-ac9a-a8006b66cc27.png"
          productname="Fortune Rice Bran Oil"
          time="11 min"
          quantity="870 g"
          amount="155"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/0fc1a0e2-8a3a-4645-99aa-248c78df6ca4.png"
          productname="Saffola Gold Sunflower & Rice Bran Refined Blended Cooking Oil (1 ltr)"
          time="11 min"
          quantity="1 ltr"
          amount="189"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5b963c9e-c87d-4df7-949b-9709e0093672.png"
          productname="Fortune Sunlite Refined Sunflower Oil"
          time="11 min"
          quantity="4.35 kg"
          amount="881"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/32bff13a-c507-43b6-91db-22360d276ac6.png"
          productname="Rosier Bilona A2 Gir Ghee (Made from Curd)"
          time="11 min"
          quantity="500 g"
          amount="1156"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">
        
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/343779a8-480b-48ec-b160-ed4c530f598a.png"
          productname="Gowardhan Premium Cow Ghee"
          time="11 min"
          quantity="1 ltr"
          amount="755"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/475dab71-42eb-4058-b9f0-32c41add411e.png"
          productname="Amul Pure Ghee"
          time="11 min"
          quantity="1 ltr"
          amount="575"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/1af759e9-bbbc-47b0-9271-81ae86034a8c.png"
          productname="Organic India Bilona Organic Cow Ghee"
          time="11 min"
          quantity="500 g"
          amount="962"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1769764025613-7.png"
          productname="Catch Cumin Seeds / Jeera Seeds"
          time="11 min"
          quantity="100 g"
          amount="53"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/14c67b2f-fa41-4426-ac7b-7dc2debc2fcb.png"
          productname="Whole Farm Premium Choti Elachi/ Green Cardamom Whole"
          time="11 min"
          quantity="20 g"
          amount="129"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}




{/* 
      <div className="section-header">
        
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/691b74b3-ba1c-4ffe-ac6a-48a52c67eec6.png"
          productname="Tata Salt (Vacuum Evaporated Iodised)"
          time="11 min"
          quantity="1 kg"
          amount="27"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/1ee62772-19e6-40bd-907f-1906e2efede5.png"
          productname="Aashirvaad Iodized Natural Salt 1 kg"
          time="11 min"
          quantity="1 kg"
          amount="19"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b89096d4-97d1-4d78-b987-358423aceaff.png"
          productname="Parry's Jaggery Powder"
          time="11 min"
          quantity="500 g"
          amount="47"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/2332b248-a44c-42ed-97ec-f8e09e01afff.png"
          productname="DNV Appalam Papad"
          time="11 min"
          quantity="100 g"
          amount="40"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/bce576ca-6cac-4d88-aada-6b70ebf1d365.png"
          productname="Lijjat Urad Mini Dal Papad"
          time="11 min"
          quantity="200 g"
          amount="77"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div>
 */}




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

export default Masalaoil