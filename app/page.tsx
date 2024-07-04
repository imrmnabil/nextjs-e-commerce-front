import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavigationMenuItems } from "@/components/navigation-items";
import { MainCarousel } from '../components/main-carousel';
import CommonSection from "@/components/common-section";
import { CatagorySection } from "@/components/catagory-section";
import BoxSection from "@/components/box-section";

const topProducts = [
  {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  },
  {
    "productImage": "/images/product/buds.webp",
    "productName": "LinkBuds S Truly Wireless Noise Canceling Earbuds ",
    "productPrice": 199.99,
    "rating": 4,
    "isNew": false
  },
  {
    "productImage": "/images/product/102189.webp",
    "productName": "Sony Walkman - Music Player NW-WM1AM2",
    "productPrice": 149.99,
    "rating": 3,
    "isNew": false
  },
  {
    "productImage": "/images/product/wh-ch520.webp",
    "productName": "WH-CH520 Wireless - Noise Canceling Headphones",
    "productPrice": 99.99,
    "rating": 2,
    "isNew": true
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "WH-1000XM5 Wireless - Noise Canceling Headphones ",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  }
  
]


export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
      <MainCarousel/>
      <div className=" pt-16 container flex flex-col items-center justify-between gap-16">
        <CommonSection heading={"Top Selling"} products={topProducts}/>
        <CatagorySection/>
        <BoxSection/>
      </div>
    </main>
  );
}
