import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import imageToBase64 from "../helper/imageToBase64";
import loginPic from "../assets/profileImage.png";
import Login from "./Login";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState("{profilePic:}");

  const handleuploadImage = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageToBase64(file);

    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      };
    });
  };

  return (
    <section id="signup">
      <div className="container mx-auto p-4 rounded-lg">
        <div className="bg-white p-5 w-full max-w-lg mx-auto">
          <div className="w-50 h-50 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img
                src={data.profilePic || loginPic}
                alt=""
                className="rounded-full mx-auto py-2 "
              />
              
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-75 
                text-center py-0 absolute bottom-0 w-full 
                text-black bg-white font-medium my-4 cursor-pointer hover:xl:scale-125">
                  Upload Image
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleuploadImage}
                />
              </label>
            </form>
          </div>

          <form className="pt-6 flex flex-col gap-4">


            <div>
              <label>Name</label>
              <div className="bg-slate-100 p-1">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-full outline-none"
                />
              </div>
            </div>


            <div className="grid">
              <label>Email:</label>
              <div className="bg-slate-100 p-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-full outline-none"
                />
              </div>
            </div>


            <div>
              <label>Password:</label>
              <div className="flex bg-slate-100 p-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-full outline-none"
                />
                <div
                  className="text-xl cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                </div>
              </div>
            </div>


            <div className="">
              <label>Confirm Password</label>
              <div className="flex bg-slate-100 p-1">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-full outline-none"
                />

                <div
                  className="text-xl cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>
                    {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </div>
              </div>
            </div>



            <button
              className="bg-amber-400 text-black 
              px-4 py-2 max-w-[150px] text-lg
              rounded-full hover:scale-110 
              transition-all cursor-pointer 
              block mx-auto mt-4 font-bold"
            >
              Sign Up
            </button>
          </form>


          <p className="my-5">
            Already have an account?{" "}
            <Link to={"/login"} className="text-amber-700 hover:underline">Login</Link>
          </p>

        </div>
      </div>


    </section>
  );
}

export default Signup;
