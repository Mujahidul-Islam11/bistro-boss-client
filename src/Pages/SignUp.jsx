import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";
import AxiosOpen from "../AxiosOpen";


const SignUp = () => {
  const {createUser, updateUser,logOut} = useContext(AuthContext)
  const navigate = useNavigate()
  const axiosOpen = AxiosOpen()

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data =>{
     console.log(data)
     createUser(data.email, data.password)
     .then(result =>{
      console.log(result.user)
      logOut()
      .then()
      .catch()   
      updateUser(data.name, data.photoURL)
      .then(()=>{
        const userInfo={
          name: data.name,
          email: data.email
        }
        axiosOpen.post('/users', userInfo)
        .then(res =>{
          if(res.data.insertedId){
            navigate(result.user && '/login')
            reset()
          }
        })
      })
      .catch(err =>{
        console.error(err)
      })

     })
     .catch(err =>{
      console.error(err)
     })
    };
  


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" {...register("name")} placeholder="your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="name" {...register("photoURL")} placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" {...register("email")} placeholder="your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" {...register("password",{ required: true, minLength:6 ,maxLength: 20 })} placeholder="password" className="input input-bordered" required />
          {errors.password?.type === 'required' && <p className="text-red-500">this field is required</p>}
          {errors.password?.type === 'minLength' && <p className="text-red-500">password must be 6 characters long</p>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <h3 className="text-center my-3">Already have an account? <Link className="font-bold text-orange-500 underline" to={'/login'}>Sign In</Link></h3>
    </div>
  </div>
</div>
    );
};

export default SignUp;