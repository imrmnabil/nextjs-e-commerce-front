import React from 'react'
import { Anton, Space_Grotesk, Josefin_Sans } from "next/font/google"
import { cn } from '../lib/utils';
const space_grotesk = Space_Grotesk({subsets:["latin"],weight:'700'});
const josefin_sans = Josefin_Sans({subsets:["latin"]})

const anton = Anton({subsets:["latin"],weight:'400'})

export default function MainLogo() {
  return (
    <div className='pt-1'>
      <h1 className={cn("font-[700] leading-none",josefin_sans.className)}>SOU<span className=' text-red-500'>N</span>DFEEL</h1>
    </div>
  )
}
