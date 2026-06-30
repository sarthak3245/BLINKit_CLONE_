import React, { useEffect, useState } from 'react'
// import FruitsandVegitables from './FruitsandVegitables'
import Productcard from './Productcard'
import Navbar from './Navbar'

const FruitsandVegitablesmain = () => {
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
                const response = await fetch("http://localhost:5000/products/category/fruitsandvegitablesmain")
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

            const fruitandvegi = products.filter(
              (item) => item.category === "fruitsandvegitablesmain"
            )
  return (
    <>
    <Navbar cartCounter={cartCounter} />
    <div className="section-header">
        <h2>Dairy, Bread & Eggs</h2>
      </div>
 <h2 align="center">Fruits & Vegitables</h2>

<div className="product-container">
{fruitandvegi.map(product => {
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
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/1ec5d712-5139-43b6-b4c9-b0e2efeeeb2c.png"
          productname="Onion"
          time="11 min"
          quantity="1000 g"
          amount="27"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/cc8401ed-66f1-4d31-9e89-d5eace0a9665.png"
          productname="Coriander Bunch"
          time="11 min"
          quantity="100 g"
          amount="1"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/d3dc6f2b-7d67-4e41-8da8-40d08967796e.png"
          productname="Peeled Garlic"
          time="11 min"
          quantity="100 g"
          amount="43"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/802c6f61-b62e-40b8-bc11-80fef6ae2d4e.png"
          productname="Broccoli"
          time="11 min"
          quantity="200 g"
          amount="34"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/879c6edf-3e4a-4ce4-8499-9b5127038388.png"
          productname="Organically Grown Coriander"
          time="11 min"
          quantity="100 g"
          amount="26"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">
        
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9b4cd95e-3f9e-4305-92a0-16d9875c6b4d.png"
          productname="Green Chilli"
          time="11 min"
          quantity="100 g"
          amount="16"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6739bad6-97d6-44fa-af22-94091a51fbe4.png"
          productname="Organically Grown Tomato"
          time="11 min"
          quantity="100 g"
          amount="35"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d86a2092-dbd1-4017-965e-dcefdb2cbcd2.png"
          productname="Mixed Sprouts"
          time="11 min"
          quantity="200 g"
          amount="35"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e7c9461c-4a81-46cc-8215-5f9155026a6e.png"
          productname="Ginger"
          time="11 min"
          quantity="200 g"
          amount="26"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/7d95fa9c-0584-4f19-840d-51069ca08abe.png"
          productname="Iceberg Lettuce"
          time="11 min"
          quantity="200 g"
          amount="27"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div>




{/* 
      <div className="section-header">
        
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f602359d-1b3f-476d-bf2e-c2b95ac19303.png"
          productname="Organically Grown Carrot"
          time="11 min"
          quantity="250 g"
          amount="26"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/8d04d424-e34f-4433-99d0-3bc1841ecb8d.png"
          productname="Spinach (pack of 2)"
          time="11 min"
          quantity="200 * 2 g"
          amount="35"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e29ff4ab-7a96-4b90-b251-0489fa0416a2.png"
          productname="Green Cucumber"
          time="11 min"
          quantity="500 g"
          amount="25"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/d5673d4f-5d68-4129-9181-e96152253570.png"
          productname="Cherry Tomatoes"
          time="11 min"
          quantity="200 g"
          amount="31"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/55b60fb8-ab99-491c-89df-08aa8959f060.png"
          productname="Lady Finger"
          time="11 min"
          quantity="250 g"
          amount="24"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">  
        
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/60c2cecc-5df5-48f4-8a55-194914079d59.png"
          productname="English Cucumber"
          time="11 min"
          quantity="500 g"
          amount="25"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9bc0b3fd-3aac-4f5f-a8f7-0c0b63cef1bb.png"
          productname="Button Mushroom"
          time="11 min"
          quantity="180 g"
          amount="55"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f20bf9d3-fe3b-4339-a25d-c8ce092280e2.png"
          productname="Mint Leaves"
          time="11 min"
          quantity="100 ml"
          amount="14"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/af44ec08-3e9d-442e-8f7d-17ff2a2b260b.png"
          productname="Cabbage"
          time="11 min"
          quantity="400 g"
          amount="24"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e937ba2b-ebab-46e3-9fa5-0e295d879967.png"
          productname="Green Zucchini"
          time="11 min"
          quantity="200 g"
          amount="26"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div>  */}




{/* 
      <div className="section-header">
        
      </div> */}

     
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
  )
}

export default FruitsandVegitablesmain