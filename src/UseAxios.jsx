import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Pages/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const UseAxios = () => {
  const {logOut} = useContext(AuthContext)
  const navigate = useNavigate()


  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );


  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response.status === 401 || error.response.status === 403){
      logOut()
      navigate('/login')
    }
    return Promise.reject(error);
  });

  return axiosSecure;
};

export default UseAxios;
