import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import BarSection from "./components/home/BarSection";
import CelebrateSection from "./components/home/CelebrateSection";

export default function Home() {
  return (
    <main className="p-0 bg-neutral w-full">
      <div className="max-w-450 mx-auto">
        <HeroSection />
        <AboutSection />
        <BarSection />
        <CelebrateSection />
      </div>
    </main>
  )
}
