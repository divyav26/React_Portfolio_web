import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { Bio } from '../Data/info';


const Footer = () => {
 
  return (
    <div className='bg-black text-white w-full h-[25vh] lg:h-[40vh]'>
      <div className='text-center text-xl pt-[2rem] text-white font-bold'>
        Divya Mishra
      </div>
    
      <nav className='flex justify-center lg:gap-[3rem] gap-3 mt-3 text-sm'>
       <NavLink to='/' className=''>Home</NavLink>
       <NavLink to='/about'>About</NavLink>
       <NavLink to='/Projects'>Projects</NavLink>
       <NavLink to='/Contact'>Contact</NavLink>
      </nav>
      
      <div className='flex justify-center items-end gap-3 mt-5'>
        <Link to={Bio.github} className='text-xl'><FaGithub /></Link>
        <Link to={Bio.linkedin} className='text-xl'><RxLinkedinLogo /></Link>
      </div>

      <div className='text-gray-500 text-sm text-center mt-[1rem]'>
      &copy; 2024 Divya Mishra. All rights reserved.
      </div>

     
    </div>
  )
}

export default Footer
