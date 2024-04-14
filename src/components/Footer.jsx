import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { Bio } from '../Data/info';
import { MdEmail } from "react-icons/md";


const Footer = () => {
 
  return (
    <>
    <div className='bg-black text-white w-full h-[50vh] lg:h-[50vh] lg:p-[3rem] p-[2rem]'>
      <div className='lg:flex lg:justify-around'>
          <div className=''>
            <h1 className='text-2xl font-bold'>Divya Mishra</h1>
            <h2 className='text-xl text-gray-300'>Frontend Developer</h2>
            <p className='text-sm text-gray-300'>HTML|CSS|JAVASCRIPT|REACT JS|TAILWIND CSS|<br />BOOTSTRAB|MYSQL|GITHUB</p>
            <div className='flex gap-3 mt-2'>
            <Link to={Bio.github} className='text-xl'><FaGithub /></Link>
            <Link to={Bio.linkedin} className='text-xl'><RxLinkedinLogo /></Link>
            <Link to={Bio.email} className='text-xl'><MdEmail /></Link>
          </div>
          </div>
          
      
          <div className='flex flex-col text-gray-300 '>
            <h1 className='text-2xl font-bold'>Links</h1>
          <NavLink to='/' className='hover:text-red-500'>Home</NavLink>
          <NavLink to='/about' className='hover:text-red-500'>About</NavLink>
          <NavLink to='/Projects' className='hover:text-red-500'>Projects</NavLink>
          <NavLink to='/Contact' className='hover:text-red-500'>Contact</NavLink>
          </div>
      </div>
      <div className='text-gray-500 text-sm text-center mt-[1rem]'>
      &copy; 2024 Divya Mishra. All rights reserved.
    </div>
    </div>
    
    </>
  )
}

export default Footer
