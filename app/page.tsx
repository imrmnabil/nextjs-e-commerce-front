import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavigationMenuItems } from "@/components/navigation-items";
import { MainCarousel } from '../components/main-carousel';
import CommonSection from "@/components/common-section";
import { CatagorySection } from "@/components/catagory-section";

const topProducts = [
  {
    "productImage": "/images/product/103364.webp",
    "productName": "Skullcandy Crusher ANC 2",
    "productPrice": 299.99,
    "rating": 5,
    "isNew": true
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "Another Product",
    "productPrice": 199.99,
    "rating": 4,
    "isNew": false
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "Third Product",
    "productPrice": 149.99,
    "rating": 3,
    "isNew": false
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "Fourth Product",
    "productPrice": 99.99,
    "rating": 2,
    "isNew": true
  },
  {
    "productImage": "/images/product/103364.webp",
    "productName": "Fifth Product",
    "productPrice": 49.99,
    "rating": 1,
    "isNew": false
  }
]


export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
      <MainCarousel/>
      <div className=" pt-16 container flex flex-col items-center justify-between gap-16">
        <CommonSection heading={"Top Selling"} products={topProducts}/>
        <CatagorySection/>
      </div>
    </main>
  );
}
