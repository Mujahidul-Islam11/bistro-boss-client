import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import { useContext } from "react";
import { AuthContext } from "./Pages/AuthProvider";

const UseCart = () => {
  const axiosSecure = UseAxios();
  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    }
  });

  return [cart, refetch];
};

export default UseCart;
