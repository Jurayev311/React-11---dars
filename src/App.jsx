import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import Topheader from './components/top-header/Topheader'
import Footer from './components/footer/Footer'


function App() {

  return (
    <>
    <Topheader />
      <Home />
    <Footer />
    </>
  )
}

export default App
