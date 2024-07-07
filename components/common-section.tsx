'use client'
import React from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCardMin from './product-card-min'
import { type CarouselApi } from "@/components/ui/carousel"
import { Button } from './ui/button'
import { ChevronRight, ChevronLeft } from 'react-feather'

type Props = { heading: String;
  products: Product[];
 }

type Product = {
  id: number,
  productImage: string;
  productName: string;
  productPrice: number;
  rating: number;
  isNew?: boolean;
}


export default function CommonSection({ heading, products }: Props) {
  const [api, setApi] = React.useState<CarouselApi>()
  console.log(products)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      // Do something on select.
    })
  }, [api])
  return (
    <div className='w-full'>
      <div className='flex justify-between pb-6'>
        <h1 className='font-bold text-2xl md:text-4xl'>{heading}</h1>
        <div className='flex gap-1'>
          <Button variant={"outline"} className=' aspect-square p-0 rounded-full'
            onClick={() => { api?.scrollPrev() }}>
            <ChevronLeft />
          </Button>
          <Button variant={"outline"} className=' aspect-square p-0 rounded-full'
            onClick={() => api?.scrollNext()}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <Carousel className="" setApi={setApi}>
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4">
              <div className="flex justify-center">
                <ProductCardMin
                  id = {product.id}
                  productImage={product.productImage}
                  productName={product.productName}
                  productPrice={product.productPrice}
                  rating={product.rating}
                  isNew={product.isNew}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

