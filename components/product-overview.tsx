import Image from 'next/image'
import React from 'react'

const porductContents = [
    {
        type: "youtube",
        content: "https://www.youtube.com/embed/mh9opchqiuY?si=aeNHfpriEdSq2oaA?&rel=0"
    },
    {
        type: "image",
        content: "/images/product/LinkBuds/overview1.png"
    }, {
        type: "image",
        content: "/images/product/LinkBuds/overview2.png"
    }, {
        type: "image",
        content: "/images/product/LinkBuds/overview3.png"
    },
]

type obj = {
    type: String,
    content: String
}

function ProductOverview() {

    function viewGen({type, content} : obj) {
        if (type === 'image') {
            return (
                <div className='w-full h-full relative'>
                    <Image src={content.toString()}
                        alt='img'
                        fill
                        className="!relative"/>
                </div>
            )
        } else if (type === 'youtube') {
            return (
                <div className='w-full h-fit relative pt-[56.25%]'>
                    <iframe className=' w-full absolute h-full top-0 left-0 bottom-0 right-0' src={content.toString()} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"/>
                </div>
            )
        }
    }
    return (
        <div className='w-full h-full flex flex-col gap-2 lg:gap-6'>
            {
            porductContents.map((item, index) => {
                return viewGen({type: item.type, content: item.content});
            })
        } </div>
    )
}

export default ProductOverview
