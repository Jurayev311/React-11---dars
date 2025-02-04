import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { LINKS } from '../../static'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import cart from '../../assets/cart.svg'
import wishlist from '../../assets/wishlist.svg'
import account from '../../assets/account.svg'
import shop from '../../assets/shop.svg'
import menu from '../../assets/menu.svg'
import vector from '../../assets/vector.svg'

const Header = () => {
  return (
    <header className='px-4 text-[#737373] text-[14px] font-bold'>
      <div className='mx-auto max-w-[1380px]'>
        <nav className='flex justify-between items-center h-[58px]'>
          <ul className='flex items-center gap-[15px]'>
             <div className='mr-[119px]'>
              <Link to="/">
                <img src={logo} alt="logo" className='cursor-pointer' />
              </Link>
            </div>
            
            {LINKS?.map((item, index) => (
              <li key={index} className='cursor-pointer navbar-item'>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>

          <div className='flex items-center gap-3 navbar-profile'>
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

          <div className='flex items-center gap-3 navbar-mobile'>
            <button><img src={vector} alt="search" /></button>
            <button><img src={shop} alt="shop" /></button>
            <button><img src={menu} alt="menu" /></button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
