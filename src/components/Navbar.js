import React, {useState}from 'react'
import { Link } from "react-router-dom";
import '../styles/components/_navbar.scss';
import logo from '../externals/imgs/sierra_nature_logo.svg';
import Button from './Button'
function Navbar({f}) {
  const [icon, setIcon] = useState('fa-bars')
  function clicked()
  {
    if(icon === 'fa-bars')
      setIcon('fa-xmark');
    else
    setIcon('fa-bars');
    f();
    window.addEventListener('resize', function(event){
      if(this.window.innerWidth>900)
        setIcon('fa-bars');
});
  }
  return (
    <nav className='grid grid-cols-3 gap-20'>
        <img src={logo} alt=""  className='col-span-1'/>
        <ul className=' md:grid grid-flow-col  text-white col-span-2 hidden'>
            <li className='flex justify-center items-center'><Link to="/">Home</Link></li>
            <li className='flex justify-center items-center'><Link to="/about">About</Link></li>
            <li className='flex justify-center items-center'><Link to="/services">Services</Link></li>
            <li className='flex justify-center items-center'><Link to="/projects">Projects</Link></li>
            <li className='flex justify-center items-center'><Link to="/contact">Contact</Link></li>
            <li className='flex justify-center items-center'><Button text ={'Take Action'} /></li>
        </ul>
       <div className='bg-[#D94948] w-10 h-10 flex items-center justify-center justify-self-end col-start-3 md:hidden' onClick={clicked}> <i className={`fa-solid  text-white  text-lg ${icon}`}></i></div>
    </nav>
  )
}
export default Navbar
