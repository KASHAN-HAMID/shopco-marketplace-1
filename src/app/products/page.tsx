// src/app/products/page.tsx
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { getData } from "../../../sanityFetchedData";

export default async function Products() {
  let productsData: any[] = [];
  try {
    productsData = await getData();
  } catch (error) {
    console.error("Failed to fetch products data:", error);
    return <div>Error loading products. Please try again later.</div>;
  }

  return (
    <div className="w-full h-full mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        NEW ARRIVALS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mt-10">
        {productsData.map((product) => (
          <div key={product._id} className="text-center">
            <Link href={`/products/${product._id}`}>
              <div className="w-full h-[200px] md:h-[300px] bg-[#F0EEED] rounded-[20px]">
                <Image
                  src={product.imageUrl}
                  alt={product.name || "Product Image"}
                  className="w-full h-full rounded-[20px] object-cover"
                  width={300}
                  height={300}
                />
              </div>
            </Link>
            <div className="mt-3">
              <p className="text-lg font-bold">{product.name}</p>
              <div className="flex justify-center mt-1">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
              </div>
              <p className="font-bold mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
