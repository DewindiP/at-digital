import { useState } from 'react'
import './App.css'
import NavbarMain from './components/topNavbar/NavbarMain';
import HeroMain from './pages/herosection/heroMain';
import Section1Main from './pages/section1/Section1Main';
import Section2Main from './pages/section2/Section2Main';
import FAQsMain from './pages/faqs/FAQsMain';
import  FooterMain from './components/footerSection/FooterMain';

function App() {

  return (
    <>
      <NavbarMain />
      <HeroMain />
      <Section1Main />
      <Section2Main />
      <FAQsMain />
      <FooterMain />
    </>
  )
}

export default App
