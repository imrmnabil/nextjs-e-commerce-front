import React from 'react'
import headphone from '@/public/images/product/wh-ch520.webp'
import walkman from '@/public/images/product/102189.webp'
import buds from '@/public/images/product/buds.webp'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'react-feather'
import { ArrowRightCircle } from 'lucide-react'

export const CatagorySection = () => {
    return (
        <div className=' w-full '>
            <h1 className='font-bold text-2xl md:text-4xl'>Browse Catagories</h1>
            <div className='flex flex-col md:flex-row w-full sm:gap-4 gap-2 aspect-square md:aspect-[16/8] md:pt-10 pt-5'>
                <div className='w-full h-full flex flex-col bg-[#F3F5F7]'>
                    <div className='w-full h-full relative'>
                        <Image className='p-4' src={headphone} alt='Headphones' fill style={{ objectFit: "contain" }} />
                    </div>
                    <div className='sm:px-10 px-5 py-5  flex flex-col sm:gap-4 gap-2'>
                        <h1 className='text-2xl sm:text-4xl font-[500]'>Headphone</h1>
                        <div className='w-fit group'>
                            <Link href='#' className='md:text-2xl flex items-center'><span>Browse</span> <ArrowUpRight className='' /></Link>
                            <div className=' w-0 h-[2px] bg-black group-hover:w-full transition-all duration-700'></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full h-full sm:gap-4 gap-2'>
                    <div className='w-full h-full flex justify-between items-center bg-[#F3F5F7]'>
                        <div className='basis-1/2'>
                            <div className='sm:px-10 px-5 py-5  flex flex-col sm:gap-4 gap-2'>
                                <h1 className='sm:text-2xl font-[500]'>Audio Players</h1>
                                <div className='w-fit group'>
                                    <Link href='#' className='sm:text-2xl flex items-center'><span>Browse</span> <ArrowUpRight className='' /></Link>
                                    <div className=' w-0 h-[2px] bg-black group-hover:w-full transition-all duration-700'></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full relative'>
                            <Image className='p-4' src={walkman} alt='Headphones' fill style={{ objectFit: "contain" }} />
                        </div>
                    </div>
                    <div className='w-full flex h-full sm:gap-4 gap-2'>
                        <div className=' basis-1/2 h-full flex flex-col relative bg-[#F3F5F7]'>
                            <div className='w-full h-full relative'>
                                <Image className='p-1 sm:p-4' src={buds} alt='Headphones' fill style={{ objectFit: "contain" }} />
                            </div>
                            <div className='px-4 py-2  flex flex-col'>
                                <h1 className='text-xs sm:text-xl md:text-sm lg:text-xl font-[500]'>Earbuds</h1>
                                <div className='w-fit group text-sm '>
                                    <Link href='#' className='flex text-xs sm:text-sm'><span>Browse</span> <ArrowUpRight className='p-1' /></Link>
                                    <div className=' w-0 h-[2px] bg-black group-hover:w-full transition-all duration-700'></div>
                                </div>
                            </div>
                        </div>
                        <div className='basis-1/2 h-full flex flex-col justify-center items-center relative bg-[#F3F5F7]'>
                            <div className='w-fit group sm:text-4xl text-xl'>
                                <Link href='#' className='flex h-fit justify-center items-center'><span>More</span> <ArrowRightCircle className='px-2 h-full w-fit' /></Link>
                                <div className=' w-0 h-[2px] bg-black group-hover:w-full transition-all duration-700'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
