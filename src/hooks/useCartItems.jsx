import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSec from "./useAxiosSec";

const useCartItems = () => {
  const { user } = useAuth();
    const axiosSecure = useAxiosSec();
  const fetchCart = async () => {
    // USER → DB
    if (user) {
      const res = await axiosSecure.get(`/cart?email=${user.email}`);
      return res.data;
    }
    // GUEST → localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return storedCart;
  };

  const {
    data: cartItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: fetchCart,
    enabled: true,
  });
  return {
    cartItems,
    loading: isLoading,
    refetch,
  };
};

export default useCartItems;
