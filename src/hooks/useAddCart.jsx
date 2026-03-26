import { useState } from "react";
import useAuth from "./useAuth";
import useAxiosSec from "./useAxiosSec";

const useAddCart = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSec();

  const addToCart = async (product) => {
    try {
      setLoading(true);

      // product structure
      const cartItem = {
        id: product.id,

        name: product.name,

        price: product.price,

        image: product.image,

        quantity: 1,

        category: product.category,

        slug: product.slug,
      };

      // USER LOGGED IN → SAVE TO DB
      if (user) {
        const res = await axiosSecure.post(
          "/cart",

          {
            email: user.email,

            item: cartItem,
          },
        );

        console.log("saved to db", res.data);
      }

      // NOT LOGGED IN → SAVE TO LOCAL STORAGE
      else {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

        const exists = storedCart.find((item) => item.id === cartItem.id);

        if (exists) {
          exists.quantity += 1;
        } else {
          storedCart.push(cartItem);
        }

        localStorage.setItem(
          "cart",

          JSON.stringify(storedCart),
        );
      }

      return true;
    } catch (err) {
      console.error(err);

      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    addToCart,

    loading,
  };
};

export default useAddCart;
