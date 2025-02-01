import React from 'react'
import post1 from '../../assets/post1.svg'
import post2 from '../../assets/post2.svg'
import post3 from '../../assets/post3.svg'
import frame from '../../assets/frame.svg'
import iconRight from '../../assets/icon-right.svg'

const Posts = () => {
  return (
    <section className='mb-28'>
        <div className='container'>
            <div className='text-center'>
                <h3 className='text-[#23A6F0] text-[14px] font-bold mb-2.51'>Practice Advice</h3>
                <h2 className='text-[#252B42] text-[40px] font-bold mb-2.51'>Featured Posts</h2>
                <div className='text-[14px] font-bold text-[#737373] mb-20'>
                    <p>Problems trying to resolve the conflict between</p>
                    <span>the two major realms of Classical physics: Newtonian mechanics </span>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-8'>
                <div>
                <img className='block' src={post1} alt="image" />
                <div className='p-4 shadow rounded'>
                   <div className='flex gap-3.5 text-[#737373] text-[12px] font-normal mb-2.5'>
                    <strong className='hover:text-[#8EC2F2] cursor-pointer'>Google</strong>
                    <strong className='hover:text-[#8EC2F2] cursor-pointer'>Trending</strong>
                    <strong className='hover:text-[#8EC2F2] cursor-pointer'>New</strong>
                   </div>

                    <div className='text-[20px] font-bold leading-8 mb-2.5 text-[#252B42]'>
                        <h2>Loudest à la Madison #1 </h2>
                        <span>(L'integral)</span>
                    </div>

                    <div className='text-[#737373] text-[14px] font-normal'>
                        <p>We focus on ergonomics and meeting </p>
                        <p>you where you work. It's only a </p>
                        <p>keystroke away.</p>
                    </div>
                    <img src={frame} alt="info" />

                    <button className='cursor-pointer mr-2 text-[#737373] text-[14px] font-bold'>Learn More</button>
                    <img className='inline-block' src={iconRight} alt="" />
                </div>
                </div>
                <div className='shadow rounded'>
                <img className='block' src={post2} alt="image" />
                <div className='p-4'>
                   <div className='flex gap-3.5 text-[#737373] text-[12px] font-normal mb-2.5'>
                    <strong className='hover:text-[#8EC2F2] cursor-pointer'>Google</strong>
                    <strong className='hover:text-[#8EC2F2] cursor-pointer'>Trending</strong>
                    <strong className='hover:text-[#8EC2F2] cursor-pointer'>New</strong>
                   </div>

                    <div className='text-[20px] font-bold leading-8 mb-2.5 text-[#252B42]'>
                        <h2>Loudest à la Madison #1 </h2>
                        <span>(L'integral)</span>
                    </div>

                    <div className='text-[#737373] text-[14px] font-normal'>
                        <p>We focus on ergonomics and meeting </p>
                        <p>you where you work. It's only a </p>
                        <p>keystroke away.</p>
                    </div>
                    <img src={frame} alt="info" />

                    <button className='cursor-pointer mr-2 text-[#737373] text-[14px] font-bold'>Learn More</button>
                    <img className='inline-block' src={iconRight} alt="" />
                </div>
                </div>
                <div className='shadow rounded'>
                <img className='block' src={post3} alt="image" />
                <div className='p-4'>
                   <div className='flex gap-3.5 text-[#737373] text-[12px] font-normal mb-2.5'>
                    <strong className='hover:text-[#8EC2F2] cursor-pointer'>Google</strong>
                    <strong className='hover:text-[#8EC2F2] cursor-pointer'>Trending</strong>
                    <strong className='hover:text-[#8EC2F2] cursor-pointer'>New</strong>
                   </div>

                    <div className='text-[20px] font-bold leading-8 mb-2.5 text-[#252B42]'>
                        <h2>Loudest à la Madison #1 </h2>
                        <span>(L'integral)</span>
                    </div>

                    <div className='text-[#737373] text-[14px] font-normal'>
                        <p>We focus on ergonomics and meeting </p>
                        <p>you where you work. It's only a </p>
                        <p>keystroke away.</p>
                    </div>
                    <img src={frame} alt="info" />

                    <button className='cursor-pointer mr-2 text-[#737373] text-[14px] font-bold'>Learn More</button>
                    <img className='inline-block' src={iconRight} alt="" />
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Posts