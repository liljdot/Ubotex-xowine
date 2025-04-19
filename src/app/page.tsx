import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import BarSection from "./components/home/BarSection";
import CelebrateSection from "./components/home/CelebrateSection";
import XOWineStoreSection from "./components/home/XOWineStoreSection";
import TopSellersSection from "./components/home/TopSellersSection";
import SavorSection from "./components/home/SavorSection";
import SplashSection from "./components/home/SplashSection";

export default function Home() {
  return (
    <main className="p-0 bg-neutral w-full">
      <div className="max-w-450 mx-auto">
        <HeroSection />
        <AboutSection />
        <BarSection />
        <CelebrateSection />
        <XOWineStoreSection />
        <TopSellersSection />
        <SavorSection />
        <SplashSection />
      </div>
    </main>
  )
}
