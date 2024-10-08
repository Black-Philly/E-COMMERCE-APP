import React, { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const PasswordIcon = () => {
    const [password, setPassword] = useState ("");
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <label>Password</label>
            <div style={{position: 'relative'}}>
                <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <span 
                onClick={toggleVisibility}
                style={{cursor: 'pointer', position:'absolute'}}
                >
                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </span>
            </div>
        </div>
    );
};
  
   

export default PasswordIcon;