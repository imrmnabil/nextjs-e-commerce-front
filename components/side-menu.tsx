import React from 'react'
import { Menu } from 'react-feather'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "@/components/ui/sheet"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './ui/button'
import Link from 'next/link'

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Headphones",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Sources",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Microphones",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Speakers",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Hifi",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Accessories",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export default function SideMenu() {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className='flex flex-col gap-2'>
                <Link href="/" className='hover:underline'>
                    Home
                </Link>
                <Accordion type='single' collapsible>
                    <AccordionItem value='item-1' className=' border-0'>
                        <AccordionTrigger className='py-0'>
                            Catagories
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='px-2 flex-col flex gap-1 text-base'>
                                {components.map((item,index)=>(
                                    <Link key={index} href={item.href} className='hover:underline'>
                                    {item.title}
                                </Link>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Link href="/" className='hover:underline'>
                    Deals
                </Link>
                <Link href="/" className='hover:underline'>
                    Contact Us
                </Link>
            </SheetContent>
        </Sheet>
    )
}
