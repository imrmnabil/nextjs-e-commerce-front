import React from 'react'
import { ShoppingBag, Search, User } from 'react-feather';
import MainLogo from './logo-main';
import { NavigationMenuItems } from './navigation-items';
import { Badge } from './ui/badge';
import SideMenu from './side-menu';

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center py-4 w-full'>
            <div className='md:hidden pt-1'><SideMenu/></div>
            <div className='text-2xl'>
                <MainLogo/>
            </div>
            <div className='hidden md:block'>
                <NavigationMenuItems />
            </div>
            <div className='flex gap-2'>
                <Search/>
                <User/>
                <div className="relative flex items-center justify-center gap-1">
                    <ShoppingBag/>
                    <Badge className='text-[0.75rem]'>1</Badge>
                </div>
            </div>
        </nav>
    )
}
