import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../Context/data/Mycontext";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firbase/FirbaseConfige";
import Loader from "../../Components/loader/Loader";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(MyContext);
  const { loading, setLoading } = context;
    

  const navigate = useNavigate()


  const login = async () => {
    // console.log(email , password);
    setLoading(true)
    if (email === "" || password === "") {
      toast.error("All fields are required");
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('user',JSON.stringify(result));
      toast.success('Login Successfull',
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      )
      localStorage.setItem('user',JSON.stringify(result));
      navigate('/')
      setLoading(false)
      // console.log(result);
    } 
    catch (error) {
      console.log(error);
      toast.error('Sigin Failed', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
      
    }


  };

  return (
    <div className="flex justify-center items-center  h-screen">
      { loading && <Loader/>}
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        {/* title */}
        <div>
          <h1 className="text-center font-bold mb-4 text-white text-xl">
            Login
          </h1>
        </div>

        {/* input 1  */}
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] text-white rounded-lg
           placeholder:text-gray-200  outline-none"
          />
        </div>

        {/* input2 */}
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] text-white rounded-lg
           placeholder:text-gray-200  outline-none"
          />
        </div>

        {/* login btn */}
        <div>
          <button
            onClick={login}
            className="w-full mb-3 bg-yellow-500 text-black font-bold px-2
            py-2 rounded-lg"
          >
            Login
          </button>
        </div>

        {/* signup link */}
        <div>
          <h2 className="text-white ">
            Dont`have an account{" "}
            <Link to="/signup" className="text-yellow-500 font-bold underline">
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
