import Hero from "./Hero";
import About from "./About";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Contact from "@/components/shared/Contact";
import Bestsellers from "./Bestsellers";
import Featured from "./Featured";
import NewArrivals from "./NewArrivals";
import SpecialOffers from "./SpecialOffers";
import ShopOverview from "./ShopOverview";
import Blog from "./Blog";
import SeasonalTrends from "./SeasonalTrends";


export default function Home() {
  return (
    <main>
      <Hero />
      <Bestsellers />
      <Featured />
      <NewArrivals/>
      <SpecialOffers />
      {/* <ShopOverview /> */}
      <Testimonial />
      {/* <Blog /> */}
      {/* <About /> */}
      <FAQ />
      <SeasonalTrends />
      {/* <Contact /> */}
    </main>
  );
}
