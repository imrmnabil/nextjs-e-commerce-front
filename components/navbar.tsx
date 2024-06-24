import React from 'react'
import { ShoppingBag, Search, User } from 'react-feather';
import MainLogo from './logo-main';
import { NavigationMenuItems } from './navigation-items';

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center py-2'>
            <div className='text-3xl'>
                <MainLogo/>
            </div>
            <div className='hidden md:block'>
                <NavigationMenuItems />
            </div>
            <div className='flex gap-2'>
                <Search/>
                <User/>
                <div className="relative flex justify-center items-center">
                    <ShoppingBag/>
                    <span className=" bg-black dark:bg-white text-white dark:text-black rounded-full text-xs w-5 h-5 flex items-center justify-center">2</span>
                </div>
            </div>
        </nav>
    )
}
