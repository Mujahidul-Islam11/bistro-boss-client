import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxios from "../UseAxios";
import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {

    const axiosSecure = UseAxios()

    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
           const res = await axiosSecure.get('/users')
           return res.data
        }
    })

    const handleUpdate = (id) =>{
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res => {
            if(res.data.modifiedCount> 0){
                refetch()
                alert('Fuck you user')
            }
        })
    }
    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/users/${id}`)
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
        <div className="">
            <div className="flex justify-evenly my-4 gap-4">
                <h3 className="text-4xl ">All Users</h3>
                <h3 className="text-4xl">Total Users:{users.length}</h3>
            </div>
            <div className="overflow-x-auto mx-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((item,index) => (
              <tr key={item._id}>
                <th>
                    {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                </td>
                <td>
                 {item.email}
                </td>
                <td><button onClick={()=>handleUpdate(item._id)} className="btn bg-orange-500">
            {item.role == 'Admin' ? 'Admin' :<FaUsers className="text-white"></FaUsers>}
                </button></td>
                <th>
                  <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost bg-red-500">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllUsers;