import React from 'react'
import Logo from './Logo'
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";

function Header() {
  return (
    <header>
        <div>
            <div>
                <Logo />
            </div>
            <div>
                <input type='text' placeholder='Search for products ...' className=''/>
                <span>
                <FiSearch />
                </span>
            </div>
            <div>
                <div>
                <CgProfile />
                </div>
            </div>
            <div>
                <div>
                <BsCart4 />
                </div>
            </div>
        Login
        </div>

    </header>
  )
}

export default Header