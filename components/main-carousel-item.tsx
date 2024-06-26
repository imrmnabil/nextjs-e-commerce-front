import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import sonos from '@/public/images/carousel/sonos_roam_2.jpg'

type Props = { path: String, title: String, t_color:String, desc: String, button_txt: String }


export default function MainCarouselItem({ path, title,t_color, desc, button_txt }:Props) {
  return (
    <div className=' aspect-square md:aspect-[16/7] w-full relative'>
      <div className=" absolute z-50 w-full h-full">
        <div className='container flex justify-center md:justify-start items-end py-8 md:items-center w-full h-full'>
          <div className= 'max-w-xl flex flex-col gap-2 md:gap-4'>
              <h1 className={`md:text-5xl xl:text-7xl 2xl:text-8xl text-4xl font-bold`} style={{color:t_color.toString()}}>{title}</h1>
              <h2 className={`md:text-3xl`} style={{color:t_color.toString()}}>{desc}</h2>
              <Button className='w-fit px-4 py-2'>{button_txt}</Button>
          </div>
        </div>
      </div>
      <div className='w-full h-full relative z-0'>
        <Image src={path.toString()} alt={title.toString()} fill style={{objectFit:"cover"}}/>
      </div>
    </div>
  )
}
