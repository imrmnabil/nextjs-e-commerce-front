import React from 'react'
import { Anton, Space_Grotesk } from "next/font/google"
import { cn } from '../lib/utils';
const space_grotesk = Space_Grotesk({subsets:["latin"]});
const anton = Anton({subsets:["latin"],weight:'400'})

export default function MainLogo() {
  return (
    <h1 className={cn("font-medium",anton.className)}><span className=' text-orange-400'>Head</span>Gears</h1>
  )
}
