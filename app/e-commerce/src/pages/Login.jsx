import React, { useState } from "react";
import profilePic from "../assets/profileImage.png";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5"; 
import { IoEyeOffOutline } from "react-icons/io5"; 

function Login() {


const [showPassword, setShowPassword] = useState(true)


  return (
    <section id="login">
      <div className="container mx-auto p-4 rounded-lg">
            <div className="bg-white w-full p-2 max-w-md mx-auto py-5">
                <div className="w-50 h-50 mx-auto">
                    <img
                    src={profilePic}
                    alt="profile pic"
                    className="hover:scale-75 py-2 p-2 mx-auto rounded-full"
                    />
                </div>
            </div>

            
                <form className="w-full p-2 max-w-md mx-auto py-5" >

                    <div className="container block justify-center">
                        <div className="justify-start gap-2">
                            <label>Email:</label>
                            <div className="bg-slate-100 p-1">
                                <input 
                                    type="email" 
                                    placeholder="Enter your Email" 
                                    className="w-full h-full outline-none" 
                                />
                            </div>
                        </div>


                        <div className="justify-start gap-2">
                            <label>Password:</label>
                            <div className="flex bg-slate-100 p-1">
                                <input
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? 'password' : 'text'}
                                    placeholder="Enter your Password"
                                    className="w-full h-full outline-none"
                                />
                                    <div className="text-xl cursor-pointer" 
                                     onClick={()=> setShowPassword
                                        ((prev) => (!prev))}
                                    >
                                        <span>
                                            {
                                                showPassword ? 
                                                <IoEyeOutline/> 
                                                : 
                                                <IoEyeOffOutline/>
                                            }
                                        </span>
                                    </div>
                            </div>
                        </div>
                        <Link to={'/ForgetPassword'} className="block w-fit ml-auto hover:underline hover:text-red-700"> Forget password? </Link> 
                    </div>
                    

                    <button 
                    className="hover:scale-90 
                        bg-amber-400 px-3 py-1 mx-auto 
                        rounded-md w-20 m-5 font-bold 
                        cursor-pointer">
                    <Link to={'/profile'}>Log in</Link>
                    </button>
                </form>
                
                
            
            <div className="font-serif text-x">New Member? <Link to={'/signup'} 
            className="cursor-pointer text-amber-700 hover:underline">Signup </Link>here
            </div>
      </div>
    </section>
  );
}

export default Login;
