import Image from "next/image";

export default function Hero() {
  return (
    <main className="max-w-screen-2xl mx-auto w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-50 via-white to-gray-50 py-16 px-8 md:px-14">
      {/* Left Section */}
      <div className="w-full md:w-[500px] mt-5 md:mt-10 md:ml-10 pl-3 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight animate-fade-in">
          Discover Fashion, Define Style
        </h1>
        <p className="text-sm md:text-lg text-gray-700 mt-4">
          Uncover a curated collection that resonates with your unique
          personality. Step into fashion with confidence and individuality.
        </p>
        <button className="bg-blue-700 py-3 px-12 rounded-full mt-6 text-sm md:text-base text-white font-semibold transition-all duration-300 hover:bg-blue-900 hover:shadow-lg focus:ring-2 focus:ring-blue-500">
          Explore Collection
        </button>
      </div>

      {/* Right Section (Images) */}
      <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="relative group">
          {/* Main Profile Image */}
          <Image
            src="/profile.png"
            className="w-[300px] md:w-[450px] rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:scale-105"
            width={450}
            height={450}
            alt="Profile Image"
          />
          {/* Animated Star 1 */}
          <Image
            src="/star.png"
            className="w-[40px] md:w-[80px] absolute top-8 left-5 md:top-24 md:left-[-40px] z-10 animate-spin-slow"
            width={80}
            height={80}
            alt="Star"
          />
          {/* Animated Star 2 */}
          <Image
            src="/star.png"
            className="w-[50px] md:w-[80px] absolute top-[40px] right-8 md:top-[30px] md:right-[20px] z-10 animate-bounce"
            width={80}
            height={80}
            alt="Star"
          />
        </div>
      </div>
    </main>
  );
}
