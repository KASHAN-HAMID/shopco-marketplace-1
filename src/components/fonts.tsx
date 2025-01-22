// import fonts
import { Playfair_Display, Prata, Montserrat } from "next/font/google";
const Playfair = Playfair_Display({ subsets: ["latin"] });

const Prat = Prata({ subsets: ["latin"], weight: "400" });
const Montserra = Montserrat({ subsets: ["latin"] });

export default function Fonts() {
  return (
    <div className="bg-black max-w-screen-2xl mx-auto w-full h-[180px] flex justify-center space-x-6 md:justify-between items-center px-6 py-10 flex-wrap">
      <div className="flex flex-col items-center">
        <h1 className={`${Playfair.className} text-white text-3xl md:text-4xl font-semibold transform hover:scale-105 transition-all duration-300`}>
          VERCASE
        </h1>
       
      </div>
      <div className="flex flex-col items-center">
        <h1 className={`${Prat.className} text-white text-3xl md:text-4xl font-semibold transform hover:scale-105 transition-all duration-300`}>
          ZARA
        </h1>
       
      </div>
      <div className="flex flex-col items-center">
        <h1 className={`${Prat.className} text-white text-3xl md:text-4xl font-semibold transform hover:scale-105 transition-all duration-300`}>
          GUCCI
        </h1>
       
      </div>
      <div className="flex flex-col items-center">
        <h1 className={`${Prat.className} text-white text-3xl md:text-4xl font-semibold transform hover:scale-105 transition-all duration-300`}>
          PRADA
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className={`${Montserra.className} text-white text-3xl md:text-4xl font-semibold transform hover:scale-105 transition-all duration-300`}>
          Calvin Klein
        </h1>
        
      </div>
    </div>
  );
}
