"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function Tshirts({ productData }: any) {
  if (!productData?.length) return <div>No products available.</div>;

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {productData.map(({ _id, imgUrl, name, price, discountPercent }: any) => (
          <div key={_id} className="text-center">
            <Link href={`/products/${_id}`}>
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={imgUrl || "/fallback-image.png"}
                  alt={name || "Product Image"}
                  className="w-full h-full object-cover"
                  width={230}
                  height={230}
                  unoptimized={!imgUrl?.startsWith("https://")}
                />
              </div>
            </Link>
            <div className="mt-3">
              <p className="text-lg font-bold">{name}</p>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
              </div>
              <p className="font-bold mt-1">
                {price}
                {discountPercent && (
                  <span className="text-gray-400 font-bold line-through ml-2">
                    {discountPercent}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
