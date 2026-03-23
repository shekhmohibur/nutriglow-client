import { useRef } from "react";
import { useCart } from "../../context/CartContext";
import useClickOutside from "../../hooks/useClickOutside";

const ProductModal = ({ product, close }) => {
  const { addToCart, isInCart } = useCart();
  const modalRef = useRef(null);
  useClickOutside(modalRef, close);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-xl max-w-lg w-full">
        <button onClick={close} className="float-right text-lg">
          ✕
        </button>

        <img src={product.image} className="rounded-lg mb-4" />

        <h2 className="text-2xl font-bold">{product.title}</h2>

        <p className="my-3">{product.description}</p>

        <p className="font-semibold text-lg">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className={`
          btn w-full mt-3 rounded-full
          ${isInCart(product.id) ? "btn-success" : "bg-purple-500 text-white"}
        `}
        >
          {isInCart(product.id) ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
