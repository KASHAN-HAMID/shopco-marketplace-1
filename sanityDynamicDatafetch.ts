import { client } from "@/sanity/lib/client";
export const getProductById = async (id: any
) => {
    return await client.fetch(`*[_type == "product" && _id == $id][0]`, { id });
  };
  