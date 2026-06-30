import React, { useEffect, useState } from 'react'
// import FruitsandVegitables from './FruitsandVegitables'
import Productcard from './Productcard'
import Navbar from './Navbar';

const Dairy = () => {
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
                const response = await fetch("http://localhost:5000/products/category/dairy")
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

            const milky = products.filter(
              (item) => item.category === "dairy"
            );
  return (
    <>
    <Navbar cartCounter={cartCounter} />
      <div className="section-header">
        <h2>Dairy, Bread & Eggs</h2>
      </div>
<h2 align="center">Dairy and Breakfast</h2>




<div className="product-container">
{milky.map(product => {
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
      </div> */}





      {/* <div className="section-header">
       
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/1649d877-82db-4a8a-a23a-cc04de18657b.png"
          productname="Protein Chef Multigrain Double Protein Bread (64g Protein per Loaf)"
          time="11 min"
          quantity="270 g"
          amount="99"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/0e27e0ff-2f0d-41e5-92fa-9b1c1b1ca23c.png"
          productname="Britannia Vitarich Sandwich White Bread"
          time="11 min"
          quantity="350 g"
          amount="40"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1770619374221-1166.png"
          productname="The Baker's Dozen Zero Maida Protein Bread, Whole Wheat"
          time="11 min"
          quantity="240 g"
          amount="71"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1770619374221-4.png"
          productname="The Baker's Dozen Zero Maida Whole Wheat Country Sourdough Bread"
          time="11 min"
          quantity="330 g"
          amount="142"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f9426d30-0b80-4b95-935a-cb8d62945e70.png"
          productname="Modern Wow Paw"
          time="11 min"
          quantity="280 g"
          amount="30"
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
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/79003595-4e30-44eb-a728-b4707182738f.png"
          productname="Eggoz Nutrition White Protein Rich Eggs (30 pieces)"
          time="11 min"
          quantity="30 pcs"
          amount="330"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4bf10560-0335-4667-b125-5c7b1c653c60.png"
          productname="Table White White Eggs"
          time="11 min"
          quantity="10 pcs"
          amount="89"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/27a17783-8f94-47e7-9e48-3e8d6e0880b5.png"
          productname="JAPFA BEST Brown Eggs"
          time="11 min"
          quantity="6 pcs"
          amount="98"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cf472e80-3a31-42bc-ac08-4f666f707bf2.png"
          productname="Organic Acre Nutrition Desi Kadaknath Eggs"
          time="11 min"
          quantity="6 pcs"
          amount="219"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/04824cc0-d6e8-4b37-8b74-ce8e2709a17a.png"
          productname="Nestle Munch Crunchilicious Cereal"
          time="11 min"
          quantity="300 g"
          amount="161"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">
       
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/0d046b54-3dd2-419c-a19b-f24cde72487c.png"
          productname="Kellogg's Multigrain Chocos Variety Pack"
          time="11 min"
          quantity="7 pcs"
          amount="64"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/90aeff9c-22f2-4661-941d-cea2515453e8.png"
          productname="Kellogg's Corn Flakes with Immuno Nutrients"
          time="11 min"
          quantity="250 g"
          amount="111"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/347aab31-3b50-4a9b-aaab-b5e337e5ec4f.png"
          productname="Slurrp Farm Choco Crunch Breakfast Cereal for Kids"
          time="11 min"
          quantity="300 g"
          amount="247"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/16e12aa6-f40f-42ff-903b-f626c69ed998.png"
          productname="Organic Tattva Organic Quinoa"
          time="11 min"
          quantity="55 g"
          amount="241"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/141e68a9-f36a-422f-8746-a9a49359401b.png"
          productname="Kellogg's All Bran Wheat Flakes"
          time="11 min"
          quantity="440 g"
          amount="255"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        /> 
      </div>*/}





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

export default Dairy