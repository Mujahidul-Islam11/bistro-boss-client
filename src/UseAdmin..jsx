import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "./Pages/AuthProvider";
import UseAxios from "./UseAxios";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxios();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user.email, "admin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data.isAdmin);
      return res?.data.isAdmin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
