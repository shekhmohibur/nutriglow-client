import { useState } from "react";
import CartCard from "../../components/shared/CartCard";

const CartPage = () => {

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Full Magicas Noches",
      price: 59,
      quantity: 1,
      category: "Sleep",
      image:
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
    },
    {
      id: 2,
      name: "Collagen Pro",
      price: 89,
      quantity: 2,
      category: "Skin",
      image:
        "https://images.unsplash.com/photo-1600181950005-3e68cf6d7c7f"
    }
  ]);


  // remove item
  const removeItem = (id) => {

    setCart(cart.filter(item => item.id !== id));

  };


  // update quantity
  const updateQuantity = (id, qty) => {

    if (qty < 1) return;

    setCart(

      cart.map(item =>

        item.id === id
          ? { ...item, quantity: qty }
          : item

      )

    );

  };


  // total
  const total = cart.reduce(

    (sum, item) => sum + item.price * item.quantity,

    0

  );


  return (

    <section className="py-16 bg-base-200 min-h-screen">

      <div className="max-w-5xl mx-auto px-4">

        <h1 className="text-3xl font-bold mb-8">

          Shopping Cart

        </h1>


        <div className="grid md:grid-cols-3 gap-8">

          {/* cart list */}
          <div className="md:col-span-2 space-y-4">

            {cart.length === 0 && (

              <p className="text-gray-500">

                Your cart is empty.

              </p>

            )}


            {cart.map(item => (

              <CartCard
                key={item.id}
                item={item}
                onRemove={removeItem}
                onQuantity={updateQuantity}
              />

            ))}

          </div>


          {/* summary */}
          <div className="bg-white p-6 rounded-xl shadow-sm h-fit">

            <h3 className="font-semibold mb-4">

              Order Summary

            </h3>


            <div className="flex justify-between mb-2">

              <span>Total</span>

              <span className="font-bold">

                ${total}

              </span>

            </div>


            <button className="btn bg-purple-500 text-white w-full mt-4">

              Checkout

            </button>

          </div>

        </div>

      </div>

    </section>

  );

};

export default CartPage;