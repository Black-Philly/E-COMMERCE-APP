import React from "react";
import profilePic from "../assets/profileImage.png";
import { Link } from "react-router-dom";

function Login() {
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

            
                <form>
                    <div className="flex justify-center gap-2  ">
                        <label>Email:</label>
                        <div>
                            <input 
                                type="email" 
                                placeholder="Enter your Email" 
                                className="" 
                            />
                        </div>
                    </div>


                    <div className="flex justify-center gap-2">
                        <label>Password:</label>
                        <div>
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className=""
                            />
                        </div>
                    </div>
                    <button 
                    className="hover:scale-90 
                        bg-amber-400 px-3 py-1 mx-auto 
                        rounded-md w-20 m-5 font-bold 
                        cursor-pointer">
                    <Link to={'/profile'}>Log in</Link>
                    </button>
                </form>
                
                
            
            <div className="font-serif text-x">New Member? <Link to={'/signup'} className="cursor-pointer text-amber-700 ">Signup </Link>here</div>
      </div>
    </section>
  );
}

export default Login;
