"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { getData } from "../../../sanityFetchedData";

export default async function TopSell() {
  let productsData = [];

  try {
    productsData = await getData();
  } catch (error) {
    console.error("Failed to fetch products data:", error);
    return (
      <div>Error loading top-selling products. Please try again later.</div>
    );
  }

  const stars = Array(5).fill(<FaStar className="text-yellow-400" />);
  const topSixProducts = productsData.slice(0, 6);

  return (
    <div className="w-full h-full mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        TOP SELLING
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mt-10">
        {topSixProducts.map((product: any) => (
          <div key={product.id} className="text-center">
            <Link href={`/products/${product._id}`}>
              <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px] mx-auto">
                <Image
                  src={product.imageUrl}
                  alt={product.name || "Product Image"}
                  className="w-full h-full rounded-[20px] object-cover"
                  width={230}
                  height={230}
                />
              </div>
            </Link>
            <div className="mt-3">
              <p className="text-lg font-bold">{product.name}</p>
              <div className="flex justify-center mt-1">{stars}</div>
              <p className="font-bold mt-1">
                {product.price}
                {product.discountPercent && (
                  <span className="text-gray-400 font-bold line-through ml-2">
                    {product.discountPercent}
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
