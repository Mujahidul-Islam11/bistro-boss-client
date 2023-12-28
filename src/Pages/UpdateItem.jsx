import { useForm } from "react-hook-form";
import AxiosOpen from "../AxiosOpen";
import UseAxios from "../UseAxios";
import SectionTitle from "./SectionTitle";
import { useLoaderData } from "react-router-dom";

const imageKey = '2149c6d98ce59e0c0f2fa75183c43c21'
const imageUrl = `https://api.imgbb.com/1/upload?key=${imageKey}`

const UpdateItem = () => {
    const itemsData = useLoaderData()
    const {price, recipe, name, category, _id} = itemsData[0]
    console.log(itemsData[0].name)
    const axiosOpen = AxiosOpen()
    const axiosSecure = UseAxios()
    const { register, handleSubmit } = useForm();

    const onSubmit = async(data) => {
    const imageFile = {image : data.image[0]}
    const res = await axiosOpen.post(imageUrl, imageFile,{
        headers:{
            'content-type' : 'multipart/form-data'
        }
    })
    console.log(res.data)
    if(res.data.success){
        const menuItems = {
            name: data.name,
            category: data.category,
            recipe: data.recipe,
            price: parseFloat(data.price),
            image: res.data.data.display_url,
        }
        const menu = await axiosSecure.patch(`/menu/${_id}`, menuItems)
        console.log(menu.data)
    }
};
    return (
        <div className="">
      <SectionTitle
        heading={"Let's update an item"}
        subTitle={"Update Items"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-20">
        <div className="form-control w-full">
          <div>
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Type recipe name here"
              className="input input-bordered w-full"
              {...register("name", {required: true})}
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="md:w-1/2">
            <label className="label">Select a category</label>
            <select
            defaultValue={category}
              {...register("category", {required: true})}
              className="select select-bordered w-full "
            >
              <option value="salad">Salad</option>
              <option value="dessert">Dessert</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
          <div className="md:w-1/2">
            <label className="label">Price</label>
            <input
              type="text"
              defaultValue={price}
              placeholder="Type Price here"
              className="input input-bordered w-full"
              {...register("price")}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Add recipe details</span>
          </label>
          <textarea
          {...register("recipe")}
          defaultValue={recipe}
            className="textarea textarea-bordered h-24"
            placeholder="Add recipe here"
          ></textarea>
        </div>
        <input {...register("image", {required: true})} type="file" className="file-input my-6 file-input-bordered file-input-warning w-full max-w-xs" /> <br />
        <button className="btn btn-warning">Submit</button>
      </form>
    </div>
    );
};

export default UpdateItem;