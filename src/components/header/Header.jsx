import React from 'react'
import { LINKS } from '../../static'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import cart from '../../assets/cart.svg'
import wishlist from '../../assets/wishlist.svg'
import account from '../../assets/account.svg'


const Header = () => {
  return (
    <header className='text-[#737373] text-[14px] font-bold'>
      <div className='mx-auto max-w-[1380px]'>
        <nav className='flex justify-between items-center h-[58px]'>
          <ul className='flex items-center gap-[15px]'>
          <div className='mr-[119px]'>
            <img src={logo} alt="logo" />
          </div>
            {
              LINKS?.map((index, inx) => (
                <li key={inx} className='cursor-pointer'>
                  <span>{index.title}</span>
                </li>
              ))
            }
          </ul>
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-2 cursor-pointer'>
            <img className='inline-block' src={account} alt="account" />
            <h2 className='inline-block text-[#23A6F0]'>Login / Register</h2>
            </div>
            <div className='flex gap-7'>
              <span><img className='cursor-pointer' src={search} alt="search" /></span>
              <span><img className='cursor-pointer' src={cart} alt="cart" /></span>
              <span><img className='cursor-pointer' src={wishlist} alt="wishlist" /></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header