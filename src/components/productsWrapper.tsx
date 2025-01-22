import { getData } from "../../sanityFetchedData";
import Tshirts from "./products";

export default async function ProductsWrapper() {
  const productData = await getData(); // Fetch data on the server
  return (
    <div>
      <Tshirts productData={productData} />
    </div>
  );
}