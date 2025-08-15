import { useState } from 'react'
import './App.css'
import NavbarMain from './components/topNavbar/NavbarMain.jsx';
import HeroMain from './pages/herosection/heroMain.jsx';
import  FooterMain from './components/footerSection/FooterMain.jsx';
import ButtonMain from './components/button/ButtonMain.jsx'; 
import FAQsList from './components/faqs/FAQsList.jsx'; // Assuming you have a FAQsList component that renders multiple FAQs

function App() {

  return (
    <>
      <NavbarMain />
      <HeroMain />
      
      
      <FooterMain />

      
    </>
  )
}

export default App
