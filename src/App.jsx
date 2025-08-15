import { useState } from 'react'
import './App.css'
import NavbarMain from './components/topNavbar/NavbarMain.jsx';
import  FooterMain from './components/footerSection/FooterMain.jsx';
import ButtonMain from './components/button/ButtonMain.jsx'; 
import FAQsList from './components/faqs/FAQsList.jsx'; // Assuming you have a FAQsList component that renders multiple FAQs

function App() {

  return (
    <>
      <NavbarMain />
      <FAQsList />
      <ButtonMain text="GET FREE CONSULTATION" onClick={() => alert("Button Clicked!")} />
      <FooterMain />

      
    </>
  )
}

export default App
