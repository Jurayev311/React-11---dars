import React from 'react'
import person1 from '../../assets/person1.png'
import person2 from '../../assets/person2.png'
import person3 from '../../assets/person3.png'
import person4 from '../../assets/person4.png'

const Editors = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-2.5 mt-20  '>
        <h3 className='text-[#252B42] text-2xl font-extrabold text-center'>
          EDITOR’S PICK
        </h3>
        <p className='text-sm text-[#737373] font-normal text-center'>
          Problems trying to resolve the conflict between{' '}
        </p>
      </div>
      <div className='conatainer flex items-center justify-center gap-7.5 mt-10 flex-wrap mb-20'>
        <div className='relative w-[510px] '>
          <img className='w-full' src={person1} alt='' />
          <button className='absolute text-base font-bold text-[#252B42] py-3 px-16 bg-white bottom-[24px] left-[24px] cursor-pointer'>
            MEN
          </button>
        </div>
        <div className='relative w-[240px] '>
          <img className='w-full' src={person2} alt='' />
          <button className='absolute text-base font-bold text-[#252B42] py-3 px-13 bg-white bottom-[24px] left-[24px] cursor-pointer'>
            WOMEN
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='relative w-[240px] '>
            <img className='w-full' src={person3} alt='' />
            <button className='absolute text-base font-bold text-[#252B42] py-3 px-8 bg-white bottom-[24px] left-[18px] cursor-pointer'>
              ACCESSORIES
            </button>
          </div>
          <div className='relative w-[240px] '>
            <img className='w-full' src={person4} alt='' />
            <button className='absolute text-base font-bold text-[#252B42] py-3 px-8 bg-white bottom-[24px] left-[18px] cursor-pointer'>
              KIDS
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Editors
