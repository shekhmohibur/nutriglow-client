import { FaHeart } from "react-icons/fa";
import RatingStars from "./RatingStars";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
export default function ProductCard({
  product,
  openModal
}) {

  const { addToCart, isInCart } = useCart();
  const {
    toggleWishlist,
    isWishlisted
  } = useWishlist();

  return (

    <div className="
      group
      bg-base-100
      shadow-md
      rounded-xl
      p-4
      transition
      hover:shadow-xl
      hover:-translate-y-1
    ">

      {/* image */}
      <div className="relative">

        <img
          src={product.image}
          alt={product.title}
          className="
            rounded-lg
            mb-3
            transition
            group-hover:scale-105
          "
          onClick={() => openModal(product)}
        />

        {/* wishlist */}
        <button
          onClick={() => toggleWishlist(product)}
          className="
            absolute top-2 right-2
            bg-white/80
            p-2 rounded-full
          "
        >

          <FaHeart
            className={
              isWishlisted(product.id)
                ? "text-red-500"
                : "text-gray-300"
            }
          />

        </button>

        {/* badge */}
        {product.badge && (

          <span className="
            absolute top-2 left-2
            badge badge-primary
          ">
            {product.badge}
          </span>

        )}

      </div>

      {/* title */}
      <h3
        onClick={() => openModal(product)}
        className="
          font-semibold
          text-lg
          cursor-pointer
          hover:text-primary
        "
      >
        {product.title}
      </h3>

      {/* rating */}
      <RatingStars rating={product.rating} />

      <p className="font-semibold text-lg mt-1">
        ${product.price}
      </p>

      {/* button */}
      <button
        onClick={() => addToCart(product)}
        className={`
          btn w-full mt-3 rounded-full
          ${
            isInCart(product.id)
              ? "btn-success"
              : "btn-primary"
          }
        `}
      >

        {
          isInCart(product.id)
            ? "Added"
            : "Add to Cart"
        }

      </button>

    </div>

  );

}