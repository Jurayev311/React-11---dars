import React from 'react'
import { colors } from '../../static'

const Products = () => {
  return (
    <section>
        <div className='container'>
            <div className='mb-20 text-[#737373] text-center'>
                <h2 className='mb-2.5 text-[20px] font-normal'>Featured Products</h2>
                <h3 className='mb-2.5 text-[24px] font-bold text-[#252B42]'>BESTSELLER PRODUCTS</h3>
                <p className='text-[14px] font-normal'>Problems trying to resolve the conflict between </p>
            </div>

            <div className='grid grid-cols-4 gap-11'> 
                <div>
                <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
                <div className='p-6 text-center'>
                    <h2 className='text-[#252B42] text-[16px] font-bold mb-2.5'>Graphic Design</h2>
                    <p className='text-[#737373] text-[14px] font-bold mb-2.5'>English Department</p>
                    <strong className='block text-[#23856D] text-[16px] font-bold mb-2.5'>$6.48</strong>
                    <div className='flex items-center justify-center gap-[6px]'>
                    {
                        colors.map((color, index) => (
                            <span key={index} style={{background: color}} className='w-4 h-4 inline-block rounded-full cursor-pointer'></span>
                        ))
                    }
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products