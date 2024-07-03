import React from 'react'
import headphone from '@/public/images/product/wh-ch520.webp'
import Image from 'next/image'

export const CatagorySection = () => {
  return (
    <div className=' w-full'>
        <h1 className='font-bold text-2xl md:text-4xl'>Browse Catagories</h1>
        <div className='flex w-full'>
            <div className='w-full flex flex-col bg-[#E3E3E3]'>
                <div>
                    <Image src={headphone} alt='Headphones'/>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <div>Hel</div>
                <div>O</div>
            </div>
        </div>
    </div>
  )
}
