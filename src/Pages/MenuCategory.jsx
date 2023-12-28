/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import PopuConent from "./PopuConent";

const MenuCategory = ({ items }) => {
  return (
    <div className="container my-16 mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        {items?.map((popuMenu) => (
          <PopuConent key={popuMenu._id} popuMenu={popuMenu}></PopuConent>
        ))}
      </div>
      <NavLink to={'/order'}>       
      <button className="btn btn-outline text-center flex justify-center mx-auto">Order Now</button>
      </NavLink>
    </div>
  );
};

export default MenuCategory;
