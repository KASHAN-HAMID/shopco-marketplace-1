import { FaCartShopping, FaSearchengin, FaUser } from "react-icons/fa6";
import Link from "next/link";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";

export default function Header() {
  return (
    <header className="w-full h-[70px] bg-black flex justify-between items-center max-w-screen-2xl mx-auto px-4 sm:px-8">
      {/* Left Section - Logo & Menu */}
      <div className="flex justify-start items-center space-x-4">
        <SheetSide />
        <h1 className="text-2xl sm:text-3xl font-bold text-white">SHOP.CO</h1>
      </div>

      {/* Navbar - Desktop */}
      <ul className="hidden md:flex space-x-8">
        <li className="flex items-center space-x-5">
          <Link href={"/"} className="text-gray-300 hover:text-white transition-colors">
            <NavigationMenuDemo />
          </Link>
          <Link href={"/"} className="text-gray-300 hover:text-white transition-colors">
            On Sale
          </Link>
          <Link href={"/products"} className="text-gray-300 hover:text-white transition-colors">
            New Arrivals
          </Link>
          <Link href={"/"} className="text-gray-300 hover:text-white transition-colors">
            Brands
          </Link>
        </li>
      </ul>

      {/* Search Bar - Desktop */}
      <div className="hidden md:flex items-center w-[330px] h-[45px] rounded-full bg-[#333] px-4">
        <FaSearchengin className="text-xl text-gray-300" />
        <input
          type="text"
          placeholder="Search item..."
          className="w-full ml-2 h-full rounded-full bg-[#333] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      {/* Cart, User & Search Icons */}
      <div className="flex items-center space-x-5">
        {/* Search Icon - Mobile Only */}
        <div className="md:hidden">
          <FaSearchengin className="text-xl text-gray-300" />
        </div>
        {/* Cart Icon */}
        <Link href={"/cart"}>
          <FaCartShopping className="text-2xl text-gray-300 hover:text-white transition-colors" />
        </Link>
        {/* User Icon */}
        <Link href="/signup">
          <FaUser className="text-2xl text-gray-300 hover:text-white transition-colors" />
        </Link>
      </div>
    </header>
  );
}
