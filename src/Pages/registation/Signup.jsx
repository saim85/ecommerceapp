import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../Context/data/Mycontext";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  
} from "firebase/auth";
import { auth, fireDB } from "../../Firbase/FirbaseConfige";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from "../../Components/loader/Loader";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // import loading from context api

  const context = useContext(MyContext);

  const { loading, setLoading } = context;

  const signup = async ()=> {

    // validation for singup page
    setLoading(true)
    if(name === '' || email === '' || password === ''){
      toast.error(' Please Filed all field ')
    }

    try {
       // create a data base for user
       const users = await createUserWithEmailAndPassword(auth , email , password)

       const user = {
        name:name,
        uid : users.user.uid,
        email:users.user.email,
        time:Timestamp.now(),
       };
       // create a ref call for user db
       const useRef = collection(fireDB , 'users');
        await addDoc (useRef , user)
        toast.success('signup is successfully')
        setLoading(false)
        setEmail('')
        setName('')
        setPassword('')

    }

    catch (error) {
       console.log(error);
       setLoading(false)

    }
  }


  

  return (
    <div className="flex justify-center items-center  h-screen">
      {loading && <Loader />}
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        {/* title */}
        <div>
          <h1 className="text-center font-bold mb-4 text-white text-xl">
            Signup
          </h1>
        </div>

        {/* input name  */}
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] text-white rounded-lg
         placeholder:text-gray-200  outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] text-white rounded-lg
         placeholder:text-gray-200  outline-none"
          />
        </div>

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
            onClick={signup}
            className="w-full mb-3 bg-red-500 text-black font-bold px-2
          py-2 rounded-lg"
          >
            Signup
          </button>
        </div>

        {/* signup link */}
        <div>
          <h2 className="text-white ">
            Have an account{" "}
            <Link to="/login" className="text-yellow-500 font-bold underline">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
