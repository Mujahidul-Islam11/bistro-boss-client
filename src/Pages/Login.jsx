import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from './AuthProvider';
import GoogleSignIn from '../GoogleSignIn';


const Login = () => {

  const {loginUser} = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    const validedRef = useRef(null)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])


    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
        .then(result =>{
          console.log(result.user)
          navigate(from, { replace: true });
        })
        .catch(err => 
          console.error(err))
    }
    const handleValided = () =>{
        const user_captcha_value = validedRef.current.value; 
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false)
        }
   
        else {
            setDisabled(true)
        }
    }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate></LoadCanvasTemplate>
          </label>
          <input ref={validedRef} type="text" name="captcha" placeholder="Write the text above" className="input input-bordered" required />
          <button onClick={handleValided} className="btn btn-outline btn-xs mt-4">Valided</button>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" disabled={disabled} type="submit" value="LogIn" />
        </div>
      </form>
        <h3 className='text-center'>New here? <Link className='font-bold text-orange-500 underline' to={'/signup'}>Create an account</Link></h3>
      <GoogleSignIn></GoogleSignIn>
      </div>
    </div>
  </div>
  );
};

export default Login;
