import Image from 'next/image'
import React from 'react'
import sonos from '@/public/images/carousel/sonos_roam_2.jpg'

type Props = { path: String, title: String, desc: String, button_txt: String }


export default function MainCarouselItem({ path, title, desc, button_txt }:Props) {
  return (
    <div className=' aspect-square md:aspect-[16/7] w-full'>
      <div className='w-full h-full relative'>
        <Image src={path.toString()} alt={title.toString()} fill style={{objectFit:"cover"}}/>
      </div>
      <div className="">Hello</div>
    </div>
  )
}
