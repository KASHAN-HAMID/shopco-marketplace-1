import dynamic from "next/dynamic";
import Fonts from "@/components/fonts";
import Hero from "@/components/Hero";
import Dress from "@/components/dress";


// Dynamically import components to improve performance
const Products = dynamic(() => import("./products/page"), { ssr: false });
const TopSell = dynamic(() => import("./products/sell"), { ssr: false });
const CustomerCarousel = dynamic(() => import("@/components/couresel"), {
  ssr: false,
});

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
