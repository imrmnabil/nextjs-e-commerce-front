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
                    delay: 2000,
                })
            ]}
            setApi={setApi}>
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 cursor-pointer">
                <ChevronLeftIcon className="w-6 h-6 text-muted-foreground" />
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 cursor-pointer">
                <ChevronRightIcon className="w-6 h-6 text-muted-foreground" />
            </CarouselNext>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <button
                    onClick={()=>api?.scrollTo(index)}
                     key={index}
                    className={`h-2 rounded-full transition-all ${current === index+1 ? "bg-muted-foreground w-5" : "bg-muted-foreground/50 hover:bg-muted-foreground/75 w-2"
                        }`}
                />
                ))}
            </div>
        </Carousel>
    )
}