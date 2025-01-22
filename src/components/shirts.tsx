"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { getData } from "../../sanityFetchedData";

export default function CasualShirts() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData();
        setProductData(data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!productData.length) return <div>No products found.</div>;

  // Limit to 3 rows of products (3 * 3 = 9 products)
  const limitedProductData = productData.slice(0, 9); // 9 products in total, 3 rows of 3

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {limitedProductData.map(({ _id, imageUrl, name, price, discountPercent }) => {
          return (
            <div key={_id} className="text-center">
              <Link href={`/products/${_id}`}>
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                  <Image
                    src={imageUrl} // Use full URL or fallback
                    alt={name || "Product Image"}
                    className="w-full h-full object-cover"
                    layout="intrinsic" // Use intrinsic layout
                    width={230}
                    height={230}
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
          );
        })}
      </div>
    </div>
  );
}
