
import Fonts from "@/components/fonts";
import Hero from "@/components/Hero";
import Dress from "@/components/dress";
import TopSell from "./products/sell";
import Products from "./products/page";
import CustomerCarousel from "@/components/couresel";





export default function Home() {
  return (
    <div>
      <Hero />
      <Fonts />
      <Products />

      <TopSell />
      <Dress />
      <CustomerCarousel />
    </div>
  );
}
