import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import Editors from '../../components/editors/Editors'
import Cta from '../../components/cta/Cta'
import Posts from '../../components/posts/Posts'
import Products from '../../components/products/Products'

const Home = () => {
  return (
    <>
        <Hero />
        <Editors />
        <Products />
        <Cta />
        <Posts />
    </>
  )
}

export default Home