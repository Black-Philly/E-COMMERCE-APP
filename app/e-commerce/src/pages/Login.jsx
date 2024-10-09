import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
// import profilePic from "../assets/profileImage.png";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Carousel from "../components/Carousel";

function Login() {
  const [showPassword, setShowPassword] = useState(true);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="login">
      <div className="relative">
        <Carousel />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 3 }}
          className="absolute top-[30%] right-[70%] rounded-md
           bg-opacity-40 bg-black outline-none justify-center "
        >

          <div className="container mx-auto p-4 rounded-lg">
            <form className="w-full p-2 max-w-md mx-auto py-5">
              <div className="container block justify-center">
                    <div className="justify-start gap-2 text-white">
                        <label>Email:</label>
                        <div className="bg-slate-100 p-0.5">
                            <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full h-full outline-none"
                            />
                        </div>
                    </div>

                    <div className="justify-start gap-2 text-white mt-5">
                        <label>Password:</label>
                        <div className="flex bg-slate-100 p-0.5">
                            <input
                                type={showPassword ? "password" : "text"}
                                placeholder="Enter your Password"
                                className="w-full h-full outline-none"
                            />
                            <div
                                className="text-xl cursor-pointer"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                <span>
                                    {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                </span>
                            </div>
                        </div>
                    </div>
                <Link
                  to={"/ForgetPassword"}
                  className=" text-white block w-fit ml-auto hover:underline hover:text-red-700 mb-5"
                >
                  {" "}
                  Forget password?{" "}
                </Link>
              </div>

              <button
                className="hover:scale-90 
    bg-amber-400 px-3 py-1 mx-auto 
    rounded-md w-20 m-5 font-bold 
    cursor-pointer"
              >
                <Link to={"/profile"}>Log in</Link>
              </button>
            </form>

            <div className="font-serif text-x text-white">
              New Member?{" "}
              <Link
                to={"/signup"}
                className="cursor-pointer text-amber-400 hover:underline"
              >
                Signup{" "}
              </Link>
              here
            </div>
          </div>
        </motion.div>
      </div>

      {/* <div className="bg-white w-full p-2 max-w-md mx-auto py-5">
                <div className="w-50 h-50 mx-auto">
                    <img
                    src={profilePic}
                    alt="profile pic"
                    className="py-2 p-2 mx-auto rounded-full"
                    />
                </div>
            </div> */}
    </section>
  );
}

export default Login;
