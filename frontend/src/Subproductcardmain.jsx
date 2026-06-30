import React from 'react'
import Subproductcard from './Subproductcard'
import './Subproductcard.css'
import { Link } from 'react-router-dom'

const Addsmain = () => {
  return (
    <>
    <div style={{display:"flex", marginLeft:"50px", justifyContent:"flex-start", marginTop:"20px"}}>
    <Link to="/fruitsandvegitablesmain"><Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png"
    // title="Fruits & Vegitables"
    /></Link>
    <Link to="/snacksandmunchies"><Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png"
    // title="Snacks & Munchies"
    /></Link>
    <Link to="/colddriniksjuices"><Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png"
    // title="Cold Drink & Juices"
    /></Link>
    {/* <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png"
    title="Breakfast & Instant Food"
    /> */}
    {/* <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png"
    title="Bakery & Biscuits"
    /> */}
    <Link to="/attaricedal"><Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png"
    // title="Atta , Rice, Dal"
    /></Link>
    <Link to="/masalaoil"><Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png"
    // title="Spices & Oil"
    /></Link>
    <Link to="/chicken"><Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png"
    // title="Chicken, Meat ,Fish"
    /></Link>
    <Link to="/personalcare"><Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-19.png"
    // title="Personal Care"
    /></Link>
    
    <Link to="/petcare"><Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-20.png"
    // title="Pet Care"
    /></Link>
  
</div>
<div style={{display:"flex", marginLeft:"50px", justifyContent:"flex-start", marginTop:"20px"}}>
    <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png"
    // title="Sauces and Spreads"
    />
    <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-14.png"
    // title="Organic & Healthy Leaving"
    />
    <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-15.png"
    // title="Baby Care"
    />
    {/* <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png"
    title="Breakfast & Instant Food"
    /> */}
    {/* <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png"
    title="Bakery & Biscuits"
    /> */}
    <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-16.png"
    // title="Pharma & Wellness"
    />
    <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png"
    // title="Cleaning Essentials"
    />
    <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png"
    // title="Sweet Tooth"
    />
    <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2025-11/Slice-7-1_0.png"
    // title="Tea, Coffee, Milk Drinks"
    />
    
    <Subproductcard
    image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png"
    // title="Paan Corner"
    />
  
</div>
    </>
  )
}

export default Addsmain