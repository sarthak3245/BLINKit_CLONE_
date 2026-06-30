import React, { useEffect, useState } from 'react'
// import FruitsandVegitables from './FruitsandVegitables'
import Productcard from './Productcard'
import Navbar from './Navbar';

const SnacksandMunchies = () => {
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
                const response = await fetch("http://localhost:5000/products/category/snacksandmunchies")
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
            const snacks = products.filter(
              (item) => item.category === "snacksandmunchies"
            );
    
  return (
    <>
        <Navbar cartCounter={cartCounter} />

      <div className="section-header">
        {/* <h2>Dairy, Bread & Eggs</h2> */}
        
      </div>
<h2 align="center">Snacks & Munchies</h2>

<div className="product-container">
{snacks.map(product => {
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
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/12ef9b5b-2693-481a-a2f8-483dc5388329.png"
          productname="Haldiram's Classic Salted Potato Chips - Pack of 3"
          time="11 min"
          quantity="3*95 g"
          amount="90"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b4992782-f47e-4fda-a0c6-4c9e422b9654.png"
          productname="Lay's West Indies Hot n Sweet Chilli Flavour Potato Chips"
          time="11 min"
          quantity="52.9 g"
          amount="20"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/58f5d34a-bc06-4709-841f-75894a557196.png"
          productname="Kurkure Solid Masti Masala Twisteez Crisps"
          time="11 min"
          quantity="66.6 g"
          amount="20"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/66a77e01-31a4-4baa-9648-a9d0c5f525f2.png"
          productname="Sunder Suji Elaichi Rusk"
          time="11 min"
          quantity="250 g"
          amount="34"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c15337ea-997c-423d-bcea-bfe0e19a2f40.png"
          productname="Malpani's Bake-lite Brown Khari (Whole Wheat)"
          time="11 min"
          quantity="200 g"
          amount="85"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">
        
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
      </div> */}





      {/* <div className="section-header">
        
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/0defab1f-cc17-4a22-8e9c-96d9317f2bb0.png"
          productname="SuperYou Chocolate Wafer Protein Bar"
          time="11 min"
          quantity="40 g"
          amount="54"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9f9957a4-556a-4957-9f37-ef58825bb620.png"
          productname="Yoga Bar 10 g Dark Chocolate & Cranberry Protein Bar"
          time="11 min"
          quantity="50 g"
          amount="46"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b1fa02e2-6ca8-45bb-8c42-075eae0a40df.png"
          productname="RiteBite Peanut Butter 4g Protein Bar"
          time="11 min"
          quantity="40 g"
          amount="39"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/729792bc-f395-4569-ab7d-42829daf5f94.png"
          productname="Doritos Cheese Nachos"
          time="11 min"
          quantity="75 g"
          amount="39"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/30501666-6694-418c-8680-bbe208d35610.png"
          productname="Haldiram's Sweet Thai Chilli Nachos Tortilla Chips"
          time="11 min"
          quantity="100 g"
          amount="34"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">
        
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/8a3f1883-45d7-40cf-b0c5-b44a933897ff.png"
          productname="4700BC Netflix Cheese & Caramel Popcorn Tin"
          time="11 min"
          quantity="200 g"
          amount="356"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/8469bc4e-0e9e-4982-a786-86edd288fd40.png"
          productname="Act II Caramel Bliss Popcorn - Ready To Eat"
          time="11 min"
          quantity="74 g"
          amount="49"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e1f26acf-d9c6-4d8e-8f1d-04abc83c6fab.png"
          productname="Mr. Makhana Lime & Chilli Flavoured Makhana"
          time="11 min"
          quantity="21 g"
          amount="50"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/50c1eaa2-82c6-4a47-a23d-f029145752b2.png"
          productname="Mr. Makhana Piri Piri Paradise Flavoured Makhana (Standee Pouch)"
          time="11 min"
          quantity="55 g"
          amount="150"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/171c8742-7ace-4f2f-b17a-1f336bf7dd54.png"
          productname="Open Secret Healthy Cookie Namkeen Snacks Combo - Pack of 2"
          time="11 min"
          quantity="2*334 g"
          amount="962"
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

export default SnacksandMunchies
