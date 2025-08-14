import { useState } from 'react'
import './App.css'
import NavbarMain from './components/topNavbar/NavbarMain.jsx';
import  FooterMain from './components/footerSection/FooterMain.jsx';
import ButtonMain from './components/button/ButtonMain.jsx'; // Assuming ButtonText is the main button component

function App() {

  return (
    <>
      <NavbarMain />
      <ButtonMain />
      <FooterMain />
    </>
  )
}

export default App
