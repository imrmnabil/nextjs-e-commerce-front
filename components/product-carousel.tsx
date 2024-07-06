import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image from "next/image"

type productImage = {
    path: String
}

type Props = {
    images: productImage[]
}

export function ProductCarousel({images}:Props) {
    console.log(images[0].path)
    return (
        <Carousel className="w-full aspect-square">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="">
                            <Card className="rounded-none border-none shadow-none bg-inherit">
                                <CardContent className="flex aspect-square items-center justify-center relative">
                                    <Image src={image.path.toString()} alt={""} fill style={{objectFit:"cover", objectPosition:"top"}}/>
                                </CardContent>
                            </Card>
                        </div>
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
        </Carousel>
    )
}
