import React from 'react'

import {Link} from "react-router-dom";
const NavBar = () => {
  return (
    <div className=' py-8 flex items-center justify-between px-12   '>
        <div className='nav-left text-2xl h-[8vh] w-[8vw]  '>
           <img className='h-[8vh] w-[8vw] object-cover rounded-full shadow-lg shadow-black ' src="https://www.shutterstock.com/image-vector/initial-letter-dp-logo-design-600nw-2343833393.jpg" alt="" />
           
        </div>
       
       <div className="navright flex gap-20 text-xl ">
            <Link className='hover:text-orange-700' to="/">Home</Link>
            <Link className='hover:text-orange-700' to="/property ">Property</Link>
            <Link className='hover:text-orange-700' to="/Services">Services</Link>
            <Link className='hover:text-orange-700' to="/Contact">Contact</Link>
       </div>

    </div>
  )
}

export default NavBar