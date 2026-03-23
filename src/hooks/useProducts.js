import { useQuery } from "@tanstack/react-query";
import products from "../config/products.json";

const fetchProducts = async () => {
  await new Promise(r => setTimeout(r, 1200));
  return products;
};

export default function useProducts() {

  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

}