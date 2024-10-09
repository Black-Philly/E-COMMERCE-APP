import React from "react";
import Logo from "./Logo";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-16 bg-white shadow-md ">
      
      <div className="container flex items-center h-full mx-auto px-4 justify-between">
        <Link to={'/home'}>
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center justify-between 
                        max-w-sm rounded-full focus-within:shadow pl-2"
        >
          <input
            type="text"
            placeholder="Search for products ..."
            className="outline-none w-full"
          />
          <span className="cursor-pointer text-lg bg-amber-400 h-8 min-w-[50px] flex items-center justify-center rounded-r-full">
            <FiSearch />
          </span>
        </div>

        <div className="flex gap-5">
          <div className="text-3xl">
                <Link to={'/profile'} className="cursor-pointer">
                     <CgProfile />
                </Link>
          </div>

          <div className="text-3xl relative">
                <div >
                    <span className="text-3xl cursor-pointer"> <Link to={'/shopping-cart'}><BsCart4 /> </Link></span>
                    <div className="flex justify-center w-5 rounded-full bg-red-500 absolute -top-2 -right-1">
                        <p className="text-sm text-white ">0</p>
                    </div>
                </div>
          </div>


          <Link to={'/login'} className="px-3 bg-amber-400 rounded-full
             text-black cursor-pointer py-1 font-bold">
                Login
            </Link>
        </div>
      </div>
     
    </header>
  );
}

export default Header;
