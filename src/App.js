import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Services from './Components/Services/Services'
import Articles from './Components/Articles/Articles'
import OurServices from './Components/OurServices/OurServices'
import Features from './Components/Features/Features'
import NewsLetterBox from './Components/NewsLetterBox/NewsLetterBox'

import "./App.css"
import Footer from './Components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Articles/>
      <OurServices/>
      <Features/>
      <NewsLetterBox/>
      <Footer/>
    </>
  )
}
