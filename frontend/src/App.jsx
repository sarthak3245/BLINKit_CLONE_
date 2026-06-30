import React from 'react'
import Home from './Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './Login'
import Navbar from './Navbar'
import Mycart from './Mycart'
import FruitsandVegitablesmain from './FruitsandVegitablesmain'
import SnacksandMunchies from './SnacksandMunchies'
import Colddrinksjuices from './Colddrinksjuices'
import AttaRiceDal from './AttaRiceDal'
import Chicken from './Chicken'
import Masalaoil from './Masalaoil'
import PersonalCare from './PersonalCare'
import PetCare from './PetCare'
import Dairy from './Dairy'
import Medicine from './Medicine'

const App = () => {

  const location = useLocation();

  return (
    <>

      {/* Hide Navbar on Login Page */}
      {location.pathname !== "/login" && <Navbar />}

      <Routes>

        {/* Login Page First */}
        <Route path="/" element={<Login />} />

        {/* Home Page */}
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/mycart" element={<Mycart />} />
        <Route path="/fruitsandvegitablesmain" element={<FruitsandVegitablesmain />} />
        <Route path="/snacksandmunchies" element={<SnacksandMunchies />} />
        <Route path="/colddrinksjuices" element={<Colddrinksjuices />} />
        <Route path="/attaricedal" element={<AttaRiceDal />} />
        <Route path="/chicken" element={<Chicken />} />
        <Route path="/masalaoil" element={<Masalaoil />} />
        <Route path="/personalcare" element={<PersonalCare />} />
        <Route path="/petcare" element={<PetCare />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/dairy" element={<Dairy />} />

      </Routes>
    </>
  )
}

export default App