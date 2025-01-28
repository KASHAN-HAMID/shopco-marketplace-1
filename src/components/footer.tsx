import { FaInstagram, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import Offers from "./offers";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="bg-gradient-to-r from-gray-50 to-gray-100 w-full h-full md:h-[450px] relative mt-32 max-w-screen-2xl mx-auto shadow-inner">
      {/* Offer Section */}
      <span className="absolute top-[-80px] w-full">
        <Offers />
      </span>

      {/* Footer Container */}
      <div className="flex flex-col md:flex-row justify-between items-start px-8 py-12 border-b md:border-none">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center w-[220px] mb-12 md:mb-0">
          <h2 className="text-3xl font-extrabold text-blue-700 hover:text-blue-800 cursor-pointer transition-colors">
            SHOP.CO
          </h2>
          <p className="text-sm mt-2 text-center text-gray-600">
            Clothes that suit your style and make you proud to wear. From women to men, fashion redefined.
          </p>
          {/* Social Icons */}
          <div className="flex items-center space-x-5 mt-5">
            <FaInstagram className="text-2xl text-gray-700 hover:text-[#E4405F] transition-colors duration-300" />
            <FaFacebook className="text-2xl text-gray-700 hover:text-[#3b5998] transition-colors duration-300" />
            <FaGithub className="text-2xl text-gray-700 hover:text-[#333333] transition-colors duration-300" />
            <FaTwitter className="text-2xl text-gray-700 hover:text-[#1DA1F2] transition-colors duration-300" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 gap-12 text-gray-600">
          {/* Footer Box */}
          {[
            {
              title: "Company",
              links: ["About Us", "Our Services", "Privacy Policy", "Terms and Conditions"],
            },
            {
              title: "Quick Links",
              links: ["FAQs", "Returns & Exchanges", "Shipping Info", "Careers"],
            },
            {
              title: "Customer Service",
              links: ["Contact Us", "Order Tracking", "Gift Cards", "Returns"],
            },
            {
              title: "Our Policies",
              links: ["Terms of Service", "Privacy Policy", "Refund Policy", "Cookie Policy"],
            },
          ].map((box, idx) => (
            <ul key={idx} className="space-y-3">
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">
                {box.title}
              </h3>
              {box.links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="text-sm hover:text-blue-700 cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-5 mt-10 bg-gray-100 border-t border-gray-300">
        <p className="text-sm text-gray-600">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        {/* Logo Images */}
        <div className="flex space-x-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <Image
              key={num}
              src={`/foot${num}.png`}
              className="w-[50px] hover:scale-110 transition-transform duration-200"
              width={100}
              height={100}
              alt={`Logo ${num}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
