/* eslint-disable react/prop-types */
import { useContext } from "react";
import imgSalad from "../assets/menu/salad-bg.jpg";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxios from "../UseAxios";
import UseCart from "../UseCart";

const FoodCard = ({ items, img }) => {
  const { name, recipe, price, _id, image } = items;
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const [cart, refetch] = UseCart();

  const handleCart = (food) => {
    
    if (user && user.email) {
      const items = {
        menuId: _id,
        email: user.email,
        name,
        recipe,
        price,
        image
      };
      axiosSecure.post("/carts", items)
      .then((res) => {
        console.log(res.data);
        refetch()
      });
    } 
    else {
      Swal.fire({
        title: "You are not logged in yet",
        text: "Please login ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 rounded-none">
      <figure>
        <img src={image} alt="Shoes" className="relative h-[250px] w-full" />
        <p className="bg-black text-white absolute px-3 mb-32 ml-56">
          ${price}
        </p>
      </figure>
      <div className="card-body bg-gray-200">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={()=>handleCart(items)} className="btn btn-warning">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
