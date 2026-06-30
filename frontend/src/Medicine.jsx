import React, { useEffect, useState } from 'react'
// import FruitsandVegitables from './FruitsandVegitables'
import Productcard from './Productcard'
import Navbar from './Navbar';

const Medicine = () => {
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
                const response = await fetch("http://localhost:5000/products/category/medicine")
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

            const medi = products.filter (
              (item) => item.category ==="medicine"
            );
    
  return (
    <>
              <Navbar cartCounter={cartCounter} />

      <div className="section-header">
        <h2>Dairy, Bread & Eggs</h2>    
      </div>
<h2 align="center">Medicines</h2>

<div className="product-container">
{medi.map(product => {
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
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/71ad0b06-2ade-44fe-8d15-c0a10760b79a.png"
          productname="1 Al 5mg Strip Of 10 Tablets"
          time="11 min"
          quantity="10 tabs"
          amount="35"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/fb2654f3-311f-4f05-8ed6-188f6a7ae01d.png"
          productname="36 D 60k Strip Of 4 Capsules"
          time="11 min"
          quantity="4 capsules"
          amount="131"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/46a5fc2c-944e-44d1-ba5a-af1b13e8ec27.png"
          productname="8x Bottle of 120ml Shampoo"
          time="11 min"
          quantity="120 ml"
          amount="435"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6c89d46e-ad63-4ee9-a38f-81750519cf36.png"
          productname="A Ret 0.1% Gel"
          time="11 min"
          quantity="20 g"
          amount="199"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f14762a4-6619-4720-bf50-d732c30acb95.png"
          productname="AB-FLO SR 200 mg Strip of 10 Tablets"
          time="11 min"
          quantity="10 tabs"
          amount="278"
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
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/36532eb4-d554-4588-9167-e010e71fdac7.png"
          productname="CIR Premium Adult Diaper Pants, M (30” – 40”)"
          time="11 min"
          quantity="10 pcs"
          amount="225"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1770356946958-733.png"
          productname="Friends Classic Adult Diaper Pants Style (L, 30-56)"
          time="11 min"
          quantity="10 pcs"
          amount="309"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/71d9f869-a2cb-45a1-96e4-b11797bdc15d.png"
          productname="Kare In Classic Underpad - L"
          time="11 min"
          quantity="10 pcs"
          amount="152"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/d4e8f7dd-b129-4fc2-8c1f-76a8fab06bc0.png"
          productname="Hk Vitals Biotin for Strong, Thick & Shiny Hair"
          time="11 min"
          quantity="90 pcs"
          amount="499"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/aa9c5d4b-a0d1-4dac-acbf-b5d583349325.png"
          productname="Fast&Up Reload Energy & Electrolyte (Lime Lemon)"
          time="11 min"
          quantity="20 tabs"
          amount="244"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/d2923e8e-4eaf-41fc-9038-73f2d2c6a0b7.png"
          productname="Plix Bubbly Strawberry Flavour Glutathione Effervescent Tablets for Glowy Skin"
          time="11 min"
          quantity="15 tabs"
          amount="565"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4a4a1920-a862-41b9-ace4-19bceeefe6c7.png"
          productname="MuscleBlaze Micronised Creatine Monohydrate CreAMP Powder (Citrus Blast)"
          time="11 min"
          quantity="120 g"
          amount="549"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/088d26fb-eaa7-4570-8f11-5c1295f6e9da.png"
          productname="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Double Rich Chocolate - 152 g"
          time="11 min"
          quantity="152 g"
          amount="751"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/7e428651-e233-4dcc-a9cd-9cdf8671bcfa.png"
          productname="Cosmix No-Nonsense Plant Protein Assorted Sachets"
          time="11 min"
          quantity="3*38 g"
          amount="399"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/29ef6c38-a6c7-41b6-8c2e-ae8d203fbc35.png"
          productname="MuscleBlaze Cola Frost Pre Workout WrathX with Creapure®, Nitroblaze & BioPerine (Cola Frost)"
          time="11 min"
          quantity="5*17 g"
          amount="399"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/28e22703-546d-4db7-a48a-6011c455a24d.png"
          productname="Dettol Antiseptic Liquid - 250 ml"
          time="11 min"
          quantity="250 ml"
          amount="159"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/1b910c22-e151-4bb2-aec8-2d7b83dc9b64.png"
          productname="Savlon Disinfectant Antiseptic Liquid"
          time="11 min"
          quantity="500 ml"
          amount="173"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/ccb62ad0-369d-4abb-813f-598b8c74ac8b.png"
          productname="Control D N95 Mask"
          time="11 min"
          quantity="1 pc"
          amount="40"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/30bf92bc-03e0-4928-a793-a0453fcffb3c.png"
          productname="Bournvita Chocolate Drink Mix (Jar)"
          time="11 min"
          quantity="500 g"
          amount="256"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b813e9fa-d139-4226-b0a0-35b0b809072c.png"
          productname="Nicotex Ultra Mint Nicotine Gum"
          time="11 min"
          quantity="9 pcs"
          amount="69"
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

export default Medicine