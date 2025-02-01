import React from 'react'
import Topheader from '../../components/top-header/Topheader'
import Header from '../../components/header/header'
import Hero from '../../components/hero/Hero'
import Editors from '../../components/editors/Editors'
import Cta from '../../components/cta/Cta'
import Posts from '../../components/posts/Posts'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
        <Topheader />
        <Header />
        <Hero />
        <Editors />
        {/* apidan keladigan qismi */}
        <Cta />
        <Posts />
        <Footer />
    </>
  )
}

export default Home