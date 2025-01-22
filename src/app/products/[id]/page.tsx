"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import AllReviews from "@/components/allreviews";
import { BreadcrumbDemo } from "@/components/Breadcrumb";
import { getData } from "../../../../sanityFetchedData";
import { FaStar } from "react-icons/fa";

type Product = {
  _id: string;
  name: string;
  price: number;
  old_price?: number;
  imageUrl: string;
  description?: string;
  slug: string;
  colors?: string[];
  sizes?: string[];
};

export default function ProductDetail() {
  const [productData, setProductData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const productId = params?.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setProductData(data);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const item = productData.find((product) => product._id === productId);

  if (!item) {
    return <h1>Product not found</h1>;
  }

  const starIcons = Array(5)
    .fill(null)
    .map((_, index) => <FaStar key={index} className="text-yellow-400" />);

  const colors = item.colors || ["#FF5733", "#33FF57", "#3357FF"];
  const sizes = item.sizes || ["S", "M", "L", "XL"];

  return (
    <>
      <BreadcrumbDemo />
      <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-2xl mx-auto">
        <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
          <Image
            src={item.imageUrl}
            alt={item.name || "Product Image"}
            className="w-full h-full rounded"
            width={444}
            height={500}
          />
        </div>

        <div className="w-full sm:w-[600px] h-auto mt-3 order-3">
          <h1 className="text-2xl md:text-3xl font-bold">{item.name || "Product Title"}</h1>
          <div className="flex text-yellow-400 mt-2">{starIcons}</div>
          <p className="font-bold mt-1">
            ${item.price}{" "}
            {item.old_price && (
              <span className="text-gray-400 font-bold line-through ml-2">
                ${item.old_price}
              </span>
            )}
          </p>
          <p className="mt-3 text-gray-700">
            {item.description || "This is a detailed description of the product."}
          </p>

          <div className="mt-5">
            <p className="text-gray-500">Select Colors</p>
            <div className="flex space-x-3 mt-2">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-[37px] h-[37px] rounded-full flex justify-center items-center"
                  style={{ backgroundColor: color }}
                >
                  <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-500">Choose Size</p>
            <div className="flex space-x-3 mt-2">
              {sizes.map((size, index) => (
                <div
                  key={index}
                  className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <Button className="bg-blue-500 text-white px-6 py-3 rounded">Add to Cart</Button>
          </div>
        </div>
      </div>
      <AllReviews />
    </>
  );
}
