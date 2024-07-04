// components/Footer.js

import { Facebook, GitHub, Instagram, Twitter, X } from "react-feather";
import MainLogo from "./logo-main";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
    return (
        <footer className=" py-8 bg-zinc-50">
            <div className="flex flex-col container justify-start gap-5">
                <div className="text-2xl">
                    <MainLogo />
                </div>
                <div className="flex flex-col md:flex-row w-full justify-center items-start pt-5 gap-5">
                    <div className="flex basis-1/2">
                        <div className="basis-1/3">
                            <h1 className="pb-4 font-medium">Company</h1>
                            <ul className="flex flex-col gap-4 font-light">
                                <li>About</li>
                                <li>Features</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div className="basis-1/3">
                            <h1 className="pb-4 font-medium">Help</h1>
                            <ul className="flex flex-col gap-4 font-light">
                                <li>Customer SUpport</li>
                                <li>Delivery Details </li>
                                <li>Terms & Conditions </li>
                            </ul>
                        </div>
                        <div className="basis-1/3">
                            <h1 className="pb-4 font-medium">Resources</h1>
                            <ul className="flex flex-col gap-4 font-light">
                                <li>Free eBooks</li>
                                <li>Development Tutorial</li>
                                <li>How to - Blog </li>
                            </ul>
                        </div>
                    </div>
                    <div className="basis-1/2 md:px-10 justify-center flex flex-col w-full">
                        <h1 className="pb-4 font-medium capitalize">Subscribe to newsletter</h1>
                        <div className="flex w-full max-w-sm items-center gap-0">
                            <Input className=" rounded-r-none" type="email" placeholder="Email" />
                            <Button type="submit" className="rounded-l-none">Subscribe</Button>
                        </div>
                        <div className="flex py-4 text-lg">
                            <div className="basis-1/2">
                                <h1 className="pb-2 font-medium">CALL US</h1>
                                <ul className="flex flex-col gap-4">
                                    <li>+8816244064</li>
                                </ul>
                            </div>
                            <div className="basis-1/2">
                                <h1 className="pb-2 font-medium">Email us</h1>
                                <ul className="flex flex-col gap-4">
                                    <li>info@rareblocks.xyz</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex justify-between">
                    <div>© Copyright 2024, All Rights Reserved</div>
                    <div className="flex gap-3">
                        <Facebook/>
                        <Instagram/>
                        <Twitter/>
                        <GitHub/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
