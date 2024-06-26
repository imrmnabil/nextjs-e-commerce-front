import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavigationMenuItems } from "@/components/navigation-items";
import { MainCarousel } from '../components/main-carousel';
import CommonSection from "@/components/common-section";
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
      <MainCarousel/>
      <div className=" pt-16 container flex flex-col items-center justify-between">
        <CommonSection/>
      </div>
    </main>
  );
}
