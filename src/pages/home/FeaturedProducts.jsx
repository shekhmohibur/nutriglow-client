import { useState } from "react";
import ProductCard from "../../components/shared/ProductCard";
import ProductModal from "../../components/shared/ProductModal";
import ProductSkeleton from "../../components/shared/ProductSkeleton";
import useProducts from "../../hooks/useProducts";
import productImg1 from '../../assets/products/Product1.webp';
import productImg2 from '../../assets/products/Product2.webp';
import productImg3 from '../../assets/products/Product3.webp';
import productImg4 from '../../assets/products/Product4.webp';
import productImg5 from '../../assets/products/Product5.webp';
import productImg6 from '../../assets/products/Product6.webp';
const categories = [
  "All",
  "Sleep",
  "Skin",
  "Energy",
  "Immunity",
  "Bundles",
  "Vitamins",
  "Herbal"
];
export default function FeaturedProducts() {
const productImg = [productImg1, productImg2, productImg3, productImg4, productImg5, productImg6]
  const { data, isLoading } = useProducts();
  console.log(data);
  
  const [selected, setSelected] = useState("All");
  const newData = data?.map((product, idx) => ({
  ...product,
  image: productImg[idx % productImg.length]
}));
  const [modalProduct, setModalProduct] = useState(null);
  console.log(newData);
  const filtered =

    selected === "All"

      ? newData

      : newData?.filter(

          p => p?.category === selected

        );

  return (

    <section className="py-16">

      <h2 className="
        text-3xl
        font-heading
        text-center
        mb-8
      ">
        Featured Products
      </h2>

      {/* category buttons */}
      <div className="
        flex
        flex-wrap
        justify-center
        gap-3
        mb-10
      ">

        {categories.map(cat => (

          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`
              btn btn-sm rounded-full
              ${
                selected === cat
                  ? "btn-primary"
                  : "btn-ghost"
              }
            `}
          >

            {cat}

          </button>

        ))}

      </div>

      {/* grid */}
      <div className="
        grid
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      ">

        {isLoading &&

          Array(8)
            .fill(0)
            .map((_, i) => (

              <ProductSkeleton key={i} />

            ))

        }

        {filtered?.map(product => (

          <ProductCard
            key={product.id}
            product={product}
            openModal={setModalProduct}
          />

        ))}

      </div>

      <ProductModal
        product={modalProduct}
        close={() => setModalProduct(null)}
      />

    </section>

  );

}