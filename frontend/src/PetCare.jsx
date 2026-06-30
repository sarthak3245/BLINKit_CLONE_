import React, { useEffect, useState } from 'react'
// import FruitsandVegitables from './FruitsandVegitables'
import Productcard from './Productcard'
import Navbar from './Navbar';

const PetCare = () => {
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
                const response = await fetch("http://localhost:5000/products/category/petcare")
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
            const pet = products.filter (
              (item) => item.category === "petcare"
            );
  return (
    <>
      <Navbar cartCounter={cartCounter} />
      <div className="section-header">
        <h2>Dairy, Bread & Eggs</h2>
      </div>
<h2 align="center">Pet Care</h2>
<div className="product-container">
      {pet.map(product => {
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
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/c4979630-6737-4538-b4d2-1b30bd9cbf0d.png"
          productname="Pedigree Adult Wet Dog Food -Chicken & Liver Chunks in Gravy flavour"
          time="11 min"
          quantity="70 g"
          amount="50"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1770608647712-205.png"
          productname="Drools Focus Adult Chicken Premium Dry Dog Food"
          time="11 min"
          quantity="1.2 kg"
          amount="658"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/70e0134d-4001-4e1a-baaf-219dce0802f7.png"
          productname="Drools Adult Wet Dog Food (Chicken Liver Chunks in Gravy)"
          time="11 min"
          quantity="150 g"
          amount="45"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/ee43c5bc-c6c9-4a78-8a69-a19aaacb92a5.png"
          productname="Kennel Kitchen Chicken Recipe with Pumpkin Wet Dog Food with Supreme Cuts"
          time="11 min"
          quantity="100 g"
          amount="55"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/bb157977-0c4c-496b-99d1-7e01b0682b63.png"
          productname="HUFT Hearty Oven-Baked Dry Adult Dog Food with Chicken, Duck & Brown Rice"
          time="11 min"
          quantity="250 g"
          amount="230"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e8ce1d7a-51c8-46e1-9536-21fc9d815342.png"
          productname="Drools Lickable Salmon & Skipjack Creamy Cat Treat"
          time="11 min"
          quantity="5*15 g"
          amount="90"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4b434d96-d2ea-4fb4-afe6-2c2b1a674f5c.png"
          productname="Whiskas Wet Kitten Food -Chicken in Gravy (2-12 Months)"
          time="11 min"
          quantity="80 g"
          amount="50"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5b36e62c-1d6e-458a-a852-4bc48021e5fd.png"
          productname="PurePet Mackerel Adult Dry Cat Food"
          time="11 min"
          quantity="1 kg"
          amount="190"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f03cad47-e8cf-4636-8278-7d0318bd4609.png"
          productname="BearHugs Lavender Bentonite Cat Litter"
          time="11 min"
          quantity="5 kg"
          amount="299"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/dc5c464b-ca8e-4bb8-b7de-e1682818df12.png"
          productname="Drools Oven Baked Biscuits Crunchy Cat Treat"
          time="11 min"
          quantity="110 g"
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
            image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8a165649-9050-491d-b77f-2e652f5f47e4.png"
            productname="Foodie Puppies Cichlid Quick Red Small Pellet Fish Food"
            time="11 min"
            quantity="300 g"
            amount="299"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/3e1e1621-a816-428c-9009-a19c4b333332.png"
          productname="Foodie Puppies Mini Pellet Fish Food for Aquarium Fish"
          time="11 min"
          quantity="200 g"
          amount="149"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/691ded31-12d0-40d3-8f0a-1b61cf17808c.png"
          productname="Foodie Puppies Optimum 3 in 1 Premium Formula Fish Food"
          time="11 min"
          quantity="100 g"
          amount="179"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/50d3f11a-989b-4679-a297-4ce0ffba2af7.png"
          productname="PurePet Chew Bone Treats for all Dogs"
          time="11 min"
          quantity="260 g"
          amount="207"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/883bab29-e2eb-4b39-babf-5ca2b56497be.png"
          productname="Super Pet Rubber Dog Toy (Red)"
          time="11 min"
          quantity="1 pc"
          amount="74"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div> */}





      {/* <div className="section-header">
      </div> */}

      {/* Product Cards */}
      {/* <div className="product-row">
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/73397202-140a-4c49-858d-15214e0a4274.png"
          productname="Foodie Puppies 3-in-1 Cotton Rope Chew Toy Combo for Small Dogs & Puppies (Multicolour)"
          time="11 min"
          quantity="3 pcs"
          amount="180"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/68ef6e2b-e881-4b63-8f6b-6d5bf3c918a9.png"
          productname="Super Pet Rubber Spike Ball Chew Toy (Red)"
          time="11 min"
          quantity="1 pc"
          amount="115"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/cb59bc67-29d6-481e-b26f-df47b1c98635.png"
          productname="HUFT Anti Tick & Flea Pet Powder"
          time="11 min"
          quantity="100 g"
          amount="178"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/d46a23ce-1451-4a96-bbd5-949569987c11.png"
          productname="Nootie Slicker Brush for Dogs & Cats"
          time="11 min"
          quantity="1 pc"
          amount="199"
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
        <Productcard
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9a6537ff-b9a1-47b8-b539-40413065edb8.png"
          productname="Foodie Puppies Double Side Pet Comb (Blue)"
          time="11 min"
          quantity="1 pc"
          amount="145"
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

export default PetCare