import Image from "next/image";

export default function Hero() {
  return (
    <main className="max-w-screen-2xl mx-auto w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-center bg-[#F2F0F1] py-10 px-4 md:px-10">
      {/* Left Section */}
      <div className="w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-3">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black py-3 px-10 rounded-full mt-6 text-sm text-white font-semibold transition-all duration-300 hover:bg-gray-800">
          Shop Now
        </button>
      </div>

      {/* Right Section (Images) */}
      <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="relative">
          <Image
            src={"/profile.png"}
            className="w-[300px] md:w-[400px] rounded-lg shadow-lg"
            width={400}
            height={400}
            alt="profile"
          />
          {/* Star 1 */}
          <Image
            src={"/star.png"}
            className="w-[50px] md:w-[100px] absolute top-10 left-6 md:top-28 md:left-[-60px] z-10 animate-pulse"
            width={100}
            height={100}
            alt="star"
          />
          {/* Star 2 */}
          <Image
            src={"/star.png"}
            className="w-[60px] md:w-[100px] absolute top-[50px] right-6 md:top-[20px] md:right-[30px] z-10 animate-pulse"
            width={100}
            height={100}
            alt="star"
          />
        </div>
      </div>
    </main>
  );
}
