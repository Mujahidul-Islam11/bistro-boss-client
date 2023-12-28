import { FaTrashAlt } from "react-icons/fa";
import UseCart from "../UseCart";
import Swal from "sweetalert2";
import UseAxios from "../UseAxios";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((total, items) => total + items.price, 0);
  const axiosSecure = UseAxios()

  const handleDelete = (id) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
          })
        }
      });
  }
  return (
    <div>
      <div className="flex justify-evenly gap-10">
        <h3 className="text-3xl">My Cart Items:{cart.length}</h3>
        <h3 className="text-3xl">Total Price:{totalPrice}</h3>
        {cart.length ? <NavLink to={'/dashboard/payment'}><button className="btn btn-secondary">Pay</button></NavLink>
        :
        <button disabled className="btn btn-secondary">Pay</button>
        }
      </div>
      <div className="overflow-x-auto ml-20">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Items Image</th>
              <th>Items Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item,index) => (
              <tr key={item._id}>
                <th>
                    {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                 {item.name}
                </td>
                <td>${item.price}</td>
                <th>
                  <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost bg-red-500">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
