import ProductCard from "../../components/shared/ProductCard";
import ProductModal from "../../components/shared/ProductModal";
import ProductSkeleton from "../../components/shared/ProductSkeleton";
// custom hook for get products
import useProducts from "../../hooks/useProducts";
// demo images for now
import productImg1 from "../../assets/products/Product1.webp";
import productImg2 from "../../assets/products/Product2.webp";
import productImg3 from "../../assets/products/Product3.webp";
import productImg4 from "../../assets/products/Product4.webp";
import productImg5 from "../../assets/products/Product5.webp";
import productImg6 from "../../assets/products/Product6.webp";
import CategoryTabs from "../../components/shared/CategoryTabs";
import { useState } from "react";
export default function FeaturedProducts() {
  // used custom images for products
  const productImg = [
    productImg1,
    productImg2,
    productImg3,
    productImg4,
    productImg5,
    productImg6,
  ];
  const { data, isLoading } = useProducts();


  const [selected, setSelected] = useState("All");
  //inserted single image to each product data
  const newData = data?.map((product, idx) => ({
    ...product,
    image: productImg[idx % productImg.length],
  }));
  const [modalProduct, setModalProduct] = useState(null);
  
  const filtered =
    selected === "All"
      ? newData
      : newData?.filter((p) => p?.category === selected);
  return (
    <section className="py-16 container mx-auto px-4">
      <h2
        className="
        text-3xl
        font-heading
        text-center
        mb-8
      "
      >
        Featured Products
      </h2>

      {/* category buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <CategoryTabs selected={selected} setSelected={setSelected} />
      </div>

      {/* grid */}
      <div>
        <div
          className={`${filtered?.length === 0 ? "w-full h-16" : "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"}`}
        >
          {filtered?.length === 0 && (
            <p className="text-center">No products found</p>
          )}
          {isLoading &&
            Array(4)
              .fill(0)
              .map((_, i) => <ProductSkeleton key={i} />)}
          {filtered?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              openModal={setModalProduct}
            />
          ))}
        </div>
      </div>
        <ProductModal
          product={modalProduct}
          close={() => setModalProduct(null)}
        />
    </section>
  );
}
