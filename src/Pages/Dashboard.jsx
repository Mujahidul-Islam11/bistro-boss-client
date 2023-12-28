import { FaAd, FaBook, FaCalendar, FaCalendarAlt, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../UseCart";
import UseAdmin from "../UseAdmin.";

const Dashboard = () => {
    const [cart] = UseCart()
    const [isAdmin]= UseAdmin()
  return (
    <div className="flex border">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
         {
            isAdmin === true ? <>
             <li>
            <NavLink to={"/dashboard/adminHome"}>
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addItems"}>
              <FaUtensils></FaUtensils>
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageItems"}>
              <FaList></FaList>
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
              <FaBook></FaBook>
              Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/allUsers"}>
              <FaUsers></FaUsers>
              All Users
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaList></FaList>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order"}>
              <FaShoppingBag></FaShoppingBag>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
            </>
            :
            <>
             <li>
            <NavLink to={"/dashboard/user"}>
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendarAlt></FaCalendarAlt>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/rebview"}>
              <FaAd></FaAd>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booking"}>
              <FaCalendar></FaCalendar>
              My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart></FaShoppingCart>
              My Cart({cart.length})
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaList></FaList>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order"}>
              <FaShoppingBag></FaShoppingBag>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
          </>
         }
        </ul>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
