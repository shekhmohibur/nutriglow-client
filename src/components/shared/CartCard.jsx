import { FaTrash } from "react-icons/fa";

const CartCard = ({ item, onRemove, onQuantity }) => {

  return (

    <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm">

      {/* image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />


      {/* info */}
      <div className="flex-1">

        <h3 className="font-semibold">
          {item.name}
        </h3>

        <p className="text-sm text-gray-500">
          {item.category}
        </p>

        <p className="font-semibold mt-1">
          ${item.price}
        </p>


        {/* quantity */}
        <div className="flex items-center gap-3 mt-3">

          <button
            onClick={() => onQuantity(item.id, item.quantity - 1)}
            className="btn btn-xs"
          >
            -
          </button>

          <span>
            {item.quantity}
          </span>

          <button
            onClick={() => onQuantity(item.id, item.quantity + 1)}
            className="btn btn-xs"
          >
            +
          </button>

        </div>

      </div>


      {/* remove */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500"
      >
        <FaTrash />
      </button>

    </div>

  );

};

export default CartCard;