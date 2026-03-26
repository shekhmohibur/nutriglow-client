import { Link } from "react-router";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import useAddCart from "../../hooks/useAddCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useAddCart();
  const handleCart = () => {
    addToCart(product)
  }
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group">
      {/* image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          className="w-full h-56 object-cover group-hover:scale-105 transition"
        />
      </div>

      {/* info */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-gray-400">{product.category}</p>

        <h3 className="font-semibold">{product.name}</h3>

        {/* rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-xs">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span className="text-gray-400 ml-2">(4.9)</span>
        </div>

        {/* price */}
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold">${product.price}</span>

          <button onClick={handleCart} className="btn btn-sm btn-primary flex items-center gap-1">
            <FaShoppingCart size={16} />
            Add
          </button>
        </div>

        <Link
          to={`/product/${product.slug}`}
          className="text-xs text-primary hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
