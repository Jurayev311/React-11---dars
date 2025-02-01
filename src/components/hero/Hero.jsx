import React from 'react'
import heroImage from '../../assets/hero.svg'
import leftArrow from '../../assets/leftarrow.svg'
import rightArrow from '../../assets/rightarrow.svg'

const Hero = () => {
  return (
    <div
      className='h-[950px] w-full bg-cover bg-top sm:bg-center relative'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <img
        className='absolute top-[40%] left-[2%] cursor-pointer'
        src={leftArrow}
        alt=''
      />
      <div className='container flex flex-col gap-9 text-white items-start absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
        <span className='text-base font-bold leading-6 text-white '>
          SUMMER 2020
        </span>
        <h2 className='text-6xl font-bold leading-20 text-white '>
          NEW COLLECTION
        </h2>
        <p className='text-2xl font-normal leading-8 text-white max-w-[400px] '>
          We know how large objects will act, but things on a small scale.
        </p>
        <button className='px-8 py-3.5 bg-[#2DC071]  text-2xl font-bold text-white cursor-pointer'>
          SHOP NOW
        </button>
      </div>
      <img
        className='absolute top-[40%] right-[2%] cursor-pointer'
        src={rightArrow}
        alt=''
      />
    </div>
  )
}

export default Hero
