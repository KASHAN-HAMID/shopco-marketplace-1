import { client } from "./src/sanity/lib/client";

export const getData = async () => {
  try {
    const fetchData = await client.fetch(`*[_type == "products"]{
      _id,
      name,
      price,
      "old_price": oldPrice,
      "imageUrl": image.asset->url,
      description,
      slug,
      category,
      discountPercent,
      new,
      colors,
      sizes
    }`);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    throw new Error("Unable to fetch product data");
  }
};

