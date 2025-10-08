import { DemoSection } from "@/components/DemoSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MiddleHeroSec } from "@/components/MiddleHeroSec";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 py-4">
      <Navbar/>
    <Hero/>
    <MiddleHeroSec/>
    <DemoSection/>
    <Footer/>
    </main>
  );
}

