import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../UseCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCart();

  const handleLogOut = () => {
    logOut().then().catch();
  };

  // Navbar links over here
  const link = (
    <>
      <li>
        <NavLink to={"/"}>
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>
          <a>Our Menu</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/secret"}>
          <a>Secret</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/order"}>
          <a>Order Food</a>
        </NavLink>
      </li>

      <NavLink to={"/dashboard/cart"}>
        <button className="btn">
          <FaShoppingCart />
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
      </NavLink>
      {user ? (
        <>
          <li>
            <button onClick={handleLogOut} className="btn btn-ghost text-white">
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/login"}>
              <a>Login</a>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  
  return (
    <div className="navbar fixed z-10 max-w-screen-xl bg-black bg-opacity-30 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BistroBoss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
