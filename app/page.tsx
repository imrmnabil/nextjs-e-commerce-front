import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavigationMenuItems } from "@/components/navigation-items";
import { MainCarousel } from '../components/main-carousel';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainCarousel/>
    </main>
  );
}
