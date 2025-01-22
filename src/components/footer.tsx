import { FaInstagram, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import Offers from "./offers";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="bg-[#F8F8F8] w-full h-full md:h-[450px] relative mt-32 max-w-screen-2xl mx-auto">
      {/* Offer Section */}
      <span className="absolute top-[-80px] w-full">
        <Offers />
      </span>

      {/* Footer Container */}
      <div className="flex flex-col md:flex-row justify-between items-start p-5 pt-[160px] sm:pt-32 border-b md:border-none">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center w-[200px] mb-10 md:mb-0">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">SHOP.CO</h2>
          <p className="text-sm mt-1 text-center text-gray-600">
            We have clothes that suit your style and which you're proud to wear.
            From women to men.
          </p>
          {/* Social Icons */}
          <div className="flex items-center space-x-5 mt-4">
            <FaInstagram className="text-xl text-gray-800 hover:text-[#E4405F] transition-colors" />
            <FaFacebook className="text-xl text-gray-800 hover:text-[#3b5998] transition-colors" />
            <FaGithub className="text-xl text-gray-800 hover:text-[#333333] transition-colors" />
            <FaTwitter className="text-xl text-gray-800 hover:text-[#1DA1F2] transition-colors" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 gap-10 text-gray-600">
          {/* Box 1 */}
          <ul className="space-y-3">
            <h3 className="text-sm sm:text-2xl font-semibold text-gray-800">Company</h3>
            <li className="text-sm hover:text-[#333333] transition-colors">About Us</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Our Services</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Privacy Policy</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Terms and Conditions</li>
          </ul>

          {/* Box 2 */}
          <ul className="space-y-3">
            <h3 className="text-sm sm:text-2xl font-semibold text-gray-800">Quick Links</h3>
            <li className="text-sm hover:text-[#333333] transition-colors">FAQs</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Returns & Exchanges</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Shipping Info</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Careers</li>
          </ul>

          {/* Box 3 */}
          <ul className="space-y-3">
            <h3 className="text-sm sm:text-2xl font-semibold text-gray-800">Customer Service</h3>
            <li className="text-sm hover:text-[#333333] transition-colors">Contact Us</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Order Tracking</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Gift Cards</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Returns</li>
          </ul>

          {/* Box 4 */}
          <ul className="space-y-3">
            <h3 className="text-sm sm:text-2xl font-semibold text-gray-800">Our Policies</h3>
            <li className="text-sm hover:text-[#333333] transition-colors">Terms of Service</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Privacy Policy</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Refund Policy</li>
            <li className="text-sm hover:text-[#333333] transition-colors">Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-5 mt-10 border-t border-gray-200">
        <p className="text-sm text-gray-600">Shop.co © 2000-2023, All Rights Reserved</p>
        {/* Logo Images */}
        <div className="flex space-x-4">
          <Image src="/foot1.png" className="w-[50px]" width={100} height={100} alt="Logo 1" />
          <Image src="/foot1.png" className="w-[50px]" width={100} height={100} alt="Logo 2" />
          <Image src="/foot1.png" className="w-[50px]" width={100} height={100} alt="Logo 3" />
          <Image src="/foot1.png" className="w-[50px]" width={100} height={100} alt="Logo 4" />
          <Image src="/foot1.png" className="w-[50px]" width={100} height={100} alt="Logo 5" />
        </div>
      </div>
    </main>
  );
}
