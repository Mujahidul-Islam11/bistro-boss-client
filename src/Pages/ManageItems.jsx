import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UseMenu from "../UseMenu";
import Swal from "sweetalert2";
import UseAxios from "../UseAxios";
import { NavLink } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = UseMenu();
  const axiosSecure = UseAxios();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data)
        if (res.data.deletedCount > 0) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="overflow-x-auto mx-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Items Name</th>
            <th>Items Image</th>
            <th>Price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {menu?.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>
                <h3 className="">{item.name}</h3>
              </td>
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
              <td>{item.price}</td>
              <td>
                <NavLink to={`/dashboard/updateItems/${item._id}`}>
                <button className="btn btn-ghost btn-md text-white bg-orange-500">
                  <FaEdit></FaEdit>
                </button>
                </NavLink>
              </td>
              <th>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-ghost btn-md text-white bg-orange-500"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageItems;
