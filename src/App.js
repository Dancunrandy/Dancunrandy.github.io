import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/Testimonials'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
function App() {
  return (
    <div>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    
    </div>
  )
}

export default App