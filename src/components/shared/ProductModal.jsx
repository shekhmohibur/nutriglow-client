export default function ProductModal({ product, close }) {

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-xl max-w-lg w-full">

        <button
          onClick={close}
          className="float-right text-lg"
        >
          ✕
        </button>

        <img
          src={product.image}
          className="rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold">
          {product.title}
        </h2>

        <p className="my-3">
          {product.description}
        </p>

        <p className="font-semibold text-lg">
          ${product.price}
        </p>

      </div>

    </div>
  );
}