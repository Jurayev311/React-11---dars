import React from 'react'
import cta from '../../assets/cta.svg'

const Cta = () => {
  return (
    <section className='mt-24 mb-24'>
        <div className='container'>
            <div className='flex items-center justify-center gap-8'>
                <div>
                    <img src={cta} alt="cta image" />
                </div>
                <div className='text-[#252B42]'>
                    <p className='text-[#BDBDBD] mb-8 text-[16px] font-bold'>SUMMER 2020</p>
                    <h2 className='text-[40px] font-bold leading-12 mb-8'>Part of the Neural Universe</h2>

                    <p className='text-[20px] font-normal text-[#737373]'>We know how large objects will act, </p>
                    <span className='text-[20px] font-normal text-[#737373]'>but things on a small scale.</span>
                    
                    <div className='flex gap-2.5 text-[14px] font-bold mt-8'>
                        <button className='px-[40px] py-[15px] bg-[#2DC071] text-white rounded-[5px] cursor-pointer'>BUY NOW</button>
                        <button className='px-[40px] py-[15px] border text-[#2DC071] rounded-[5px] cursor-pointer'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta