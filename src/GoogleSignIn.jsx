import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "./Pages/AuthProvider";
import { useNavigate } from "react-router-dom";
import AxiosOpen from "./AxiosOpen";


const GoogleSignIn = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosOpen = AxiosOpen()

    const handleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const userInfo ={
                email: result.user.email,
                name: result.user.displayName
            }
            axiosOpen.post('/users', userInfo)
            .then(res=>{
                console.log(res.data)
            })
            navigate('/')
        })
    }
    return (
        <div className="">
            <div className="divider"></div>
            <div>
                <button onClick={handleSignIn} className="btn flex justify-center mb-4 mx-auto">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default GoogleSignIn;