import {ProductBreadcrumb} from '@/components/product-breadcrunmb';
import {ProductCarousel} from '@/components/product-carousel';
import ProductRating from '@/components/product-rating-span';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import React from 'react'
import Link from 'next/link';
import {Heart, Minus, Plus, ShoppingBag} from 'react-feather';

const carouselImagesBlack = [
    {
        "path": "/images/product/LinkBuds/blue.png"
    }, {
        "path": "/images/product/LinkBuds/1.webp"
    }, {
        "path": "/images/product/LinkBuds/2.webp"
    },
]

const product = {
    "productImage": "/images/product/buds.webp",
    "productName": "LinkBuds S Truly Wireless Noise Canceling Earbuds ",
    "productDescription": "Experience immersive sound with wireless noise-canceling earbuds. Compact and comfortable, they offer clear audio, deep bass, long battery life, and intuitive touch controls. Ideal for music lovers on the go.",
    "productPrice": 199.99,
    "rating": 4,
    "brand": "Sony",
    "isNew": false
}


export default function Home() {
    return (
        <main className="flex  flex-col items-center justify-between">
            <div className=" pt-0 container flex flex-col items-center justify-between gap-4">
                <div className='w-full pb-4'>
                    <ProductBreadcrumb/>
                </div>
                <div className=' lg:container flex w-full gap-20 lg:flex-row flex-col'>
                    <div className='basis-1/2 bg-[#F3F5F7] w-full'>
                        <ProductCarousel images={carouselImagesBlack}/>
                    </div>
                    <div className='flex flex-col basis-1/2 justify-evenly'>
                        <div className="flex items-center gap-2">
                            <ProductRating rating={
                                product.rating
                            }/>
                            <Label className='text-xs font-light'>24 Reviews</Label>
                        </div>
                        <div className='py-2'>
                            <h1 className='text-3xl font-semibold'>
                                {
                                product.productName
                            }</h1>
                        </div>
                        <div>
                            <p className=' text-gray-500 py-2'>
                                {
                                product.productDescription
                            }</p>
                        </div>
                        <div className='py-1'>
                            <h1 className='text-2xl font-medium'>${
                                product.productPrice
                            }</h1>
                        </div>
                        <div className='py-4'>
                                    <hr/>
                                </div>
                        <div className='py-2'>
                            <div>
                                <h1>Choose Varient</h1>
                            </div>
                            <div className="flex gap-2 py-2">
                                <Button variant={"outline"}
                                    className=' text-sm p-3 h-8'>White</Button>
                                <Button variant={"default"}
                                    className=' text-sm p-3 h-8'>Black</Button>
                                <Button variant={"outline"}
                                    className=' text-sm p-3 h-8'>Violet</Button>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='py-2 flex gap-2 max-w-sm'>
                                    <div className='basis-1/3 flex gap-2 text-lg items-center justify-between rounded-lg bg-[#F3F5F7] overflow-hidden'>
                                        <button className='p-3 hover:bg-gray-200' disabled><Minus className='w-4 h-4'/></button>
                                        <span className='w-12 text-center'>1</span>
                                        <button className='p-3 hover:bg-gray-200'><Plus className='w-4 h-4'/></button>
                                    </div>
                                    <div className='basis-2/3'>
                                        <Button variant={"outline"}
                                            className='flex gap-2 w-full border-black'>Wishlist
                                            <Heart className='h-4'/></Button>
                                    </div>
                                </div>
                                <div className=' max-w-sm'>
                                    <Button className='w-full flex gap-2'>Add to Cart
                                        <ShoppingBag className='h-4'/></Button>
                                </div>
                                <div className='pt-4 pb-2'>
                                    <hr/>
                                </div>
                                <div className='flex items-center text-sm gap-1'>
                                    <Label className='font-light'>Brand:
                                    </Label>
                                    <Link href=''>Sony</Link>
                                </div>
                                <div className='flex items-center text-sm gap-1'>
                                    <Label className='font-light'>Catagory:
                                    </Label>
                                    <Link href=''>Earbuds</Link>
                                </div>
                                <div className='flex items-center text-sm gap-1'>
                                    <Label className='font-light'>PRODUCT ID:
                                    </Label>
                                    <Link href=''>1123</Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                Hello
            </div>
        </main>
    );
}
