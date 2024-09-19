import React from 'react'
import logo from '../assets/WE_logo.jpeg'

function Logo() {
  return (
    <div className='flex items-center mx-auto gap-3 hover:scale-90 cursor-pointer'>
        <img src={logo} alt='logo' width={['40px']} /> 
        <div className='font-serif font-bold text-amber-500 text-xl' ><span>WhiteEagle</span><br/>Shop</div>
        
    </div>
    
  )
}

export default Logo