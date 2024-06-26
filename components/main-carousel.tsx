'use client'
import * as React from "react"
import { useState } from "react"
import { type CarouselApi } from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import MainCarouselItem from "./main-carousel-item"

const carousel_items: { path: String, title: String, t_color:String, desc: String, button_txt: String }[] = [
    { path: '/images/carousel/1.jpg', title: 'Listen to the amazing music sound.',t_color:"#8FA1EF", desc: 'Experience music like never before', button_txt: 'Buy Now' },
    { path: '/images/carousel/sonos_roam_2.jpg', title: 'Listen to the amazing music sound.',t_color:"#000000", desc: 'Experience music like never before', button_txt: 'View' }
]

export function MainCarousel() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Carousel className="w-full relative"
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                })
            ]}
            setApi={setApi}>
            <CarouselContent>
                {carousel_items.map((item, index) => (
                    <CarouselItem key={index}>
                            <MainCarouselItem path={item.path} title={item.title} desc={item.desc} button_txt={item.button_txt} t_color={item.t_color}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className=" invisible md:visible">
                <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 cursor-pointer border-0">
                    <ChevronLeftIcon className="w-6 h-6 text-muted-foreground" />
                </CarouselPrevious>
                <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 cursor-pointer border-0">
                    <ChevronRightIcon className="w-6 h-6 text-muted-foreground" />
                </CarouselNext>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {carousel_items.map((item, index) => (
                    <button
                        onClick={() => api?.scrollTo(index)}
                        key={index}
                        className={`h-2 rounded-full transition-all ${current === index + 1 ? "bg-muted-foreground w-5" : "bg-muted-foreground/50 hover:bg-muted-foreground/75 w-2"
                            }`}
                    />
                ))}
            </div>
        </Carousel>
    )
}