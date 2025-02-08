import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import Products from '../../components/products/Products';
import { use } from 'react';
import Empty from '../../components/empty/Empty';

const Wishlist = () => {
    const [state] = useGlobalContext()
    console.log(state.wishlist.length);
    
    useEffect(() => {
        window.scrollTo({behavior: "smooth", left:0, top:0})
    }, [])

  return (
    <div>
      {
        state.wishlist.length ? 
        <Products products={state.wishlist} />
        :
        <Empty />
      }
    </div>
  )
}

export default Wishlist