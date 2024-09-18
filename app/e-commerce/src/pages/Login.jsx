import React from "react";
import profilePic from '../assets/profileImage.png';

function Login() {
  return (
    <section id="login">
      <div className="container mx-auto p-4 rounded-lg">
        <div className="bg-white w-full p-2 max-w-md mx-auto py-5">
            <div className="w-50 h-50 mx-auto">
        <img src={profilePic} alt="profile pic" className="hover:scale-75 py-2 p-2 mx-auto rounded-full"/>
        </div>
      </div>
      <form>
        <div>
            <label>Email:</label>
            <div>
                <input type="email" 
                placeholder="Enter your Email" 
                className=""/>
            </div>
        </div>
        <div>
        <label>Password:</label>
            <div>
                <input type="password" 
                placeholder="Enter your Password" 
                className=""/>
            </div>
        </div>
    </form>
    </div>
    </section>
  );
}

export default Login;
