import { FaCartShopping, FaSearchengin, FaUser } from "react-icons/fa6";
import Link from "next/link";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";

export default function Header() {
  return (
    <header className="w-full h-[60px] bg-white flex justify-between items-center max-w-screen-2xl mx-auto px-4 sm:px-8">
      {/* Left Section - Logo & Menu */}
      <div className="flex justify-start items-center space-x-4">
        <SheetSide />
        <h1 className="text-xl sm:text-3xl font-bold">SHOP.CO</h1>
      </div>

      {/* Navbar - Desktop */}
      <ul className="hidden md:flex space-x-8">
        <li className="flex items-center space-x-5">
          <Link href={"/"}><NavigationMenuDemo /></Link>
          <Link href={"/"}>On Sale</Link>
          <Link href={"/products"}>New Arrivals</Link>
          <Link href={"/"}>Brands</Link>
        </li>
      </ul>

      {/* Search Bar - Desktop */}
      <div className="hidden md:flex items-center w-[330px] h-[40px] rounded-full bg-[#F0F0F0] px-3">
        <FaSearchengin className="text-xl text-gray-600" />
        <input
          type="text"
          placeholder="Search item..."
          className="w-full ml-2 h-full rounded-full bg-[#F0F0F0] text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Cart, User & Search Icons */}
      <div className="flex items-center space-x-5">
        {/* Search Icon - Mobile Only */}
        <div className="md:hidden">
          <FaSearchengin className="text-xl text-gray-600" />
        </div>
        {/* Cart Icon */}
        <Link href={"/cart"}>
          <FaCartShopping className="text-2xl text-gray-600" />
        </Link>
        {/* User Icon */}
        <Link href="/signup">
          <FaUser className="text-2xl text-gray-600" />
        </Link>
      </div>
    </header>
  );
}
