import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

export default function Anouce() {
  return (
    <main className="bg-black w-full h-[50px] flex justify-center items-center relative max-w-screen-2xl mx-auto px-4 sm:px-8">
      {/* Left Section - Text and Sign Up Button */}
      <div className="flex justify-center items-center space-x-3">
        <h3 className="text-white text-xs sm:text-sm md:text-base font-medium">
          Sign up and get 20% off your first order.
        </h3>
        <Link href="/signup">
          <button className="text-white text-xs sm:text-sm md:text-base font-semibold hover:text-gray-300 transition duration-200">
            Sign Up Now
          </button>
        </Link>
      </div>

      {/* Plus Icon - Mobile and Desktop */}
      <FaPlus className="text-white absolute right-4 sm:right-12 text-2xl hidden sm:block" />
    </main>
  );
}
