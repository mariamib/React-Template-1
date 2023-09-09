import React from 'react'
import { Link } from "react-router-dom";
import '../styles/components/_mobilenav.scss'
function MobileNav({v}) {
  return (
    <>
        {
    v &&
    <ul className='mobile-nav absolute w-full  text-[#605f5f]  text-sm'>
    <li className='flex justify-start items-center py-3 pt-4 border-b px-5'><Link to="/">Home</Link></li>
    <li className='flex justify-start items-center py-3 border-b px-5'><Link to="/about">About</Link></li>
    <li className='flex justify-start items-center py-3 border-b px-5'><Link to="/services">Services</Link></li>
    <li className='flex justify-start items-center py-3 border-b px-5'><Link to="/projects">Projects</Link></li>
    <li className='flex justify-start items-center py-3 pb-4 px-5'><Link to="/contact">Contact</Link></li>
</ul> 
   }</>
  )
}

export default MobileNav
