import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useNavigate } from 'react-router';

const Navbar = () => {

    const links = <>
      <nav>
        {/* <li className='mb-5 md:mb-0'><NavLink to='/' className=' mr-10 font-medium text-[16px]'>Home</NavLink></li>
        <li className='mb-5 md:mb-0'><NavLink to='/apps' className=' mr-10 font-medium text-[16px]'>Apps</NavLink></li>
        <li><NavLink to='/installation' className=' font-medium text-[16px]'>Installation</NavLink></li> */}
        

        <NavLink to='/' className=' mr-10 font-medium text-[16px]'>Home</NavLink>
        <NavLink to='/apps' className=' mr-10 font-medium text-[16px]'>Apps</NavLink>
        <NavLink to='/installation' className=' font-medium text-[16px]'>Installation</NavLink>
      </nav>
        
    </>
    // clicking on the logo then goes to homepage
    const navigate = useNavigate();
    const handleLogoClick = () => {
      console.log("Logo clicked , need to navigate into home now") ;
      navigate("/") ;
    }

    return (

      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className=" menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                      
                    {/* {links} */}
                    
                {/* Navigation links for SM Screen */}
                    <li className='mb-5 md:mb-0'><NavLink to='/' className=' mr-10 font-medium text-[16px]'>Home</NavLink></li>
                    <li className='mb-5 md:mb-0'><NavLink to='/apps' className=' mr-10 font-medium text-[16px]'>Apps</NavLink></li>
                    <li><NavLink to='/installation' className=' font-medium text-[16px]'>Installation</NavLink></li>
                    
                  </ul>
            </div>

      {/* LOGO AND Title */}
            <div className='flex gap-2 ml-[30px]' onClick={handleLogoClick}>
              <img className='w-11 cursor-pointer' src="/assets/logo.png" alt="Logo" />
              <h3 className="mt-2 text-[16px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent cursor-pointer" >HERO.IO</h3>
            </div>
        </div>

      {/* Navigation links for LG Screen */}
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

              {links}

          </ul>
      </div>

      {/* Button */}
      <div className="navbar-end flex mr-2.5 md:mr-5 lg:mr-[30px]">
        <a className="text-white text-[16px] font-semibold btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]" href='https://github.com/Nure-Anha' target='blank'><FontAwesomeIcon icon= {faGithub}> </FontAwesomeIcon> Contribute</a>
      </div>
    </div>
    );
};

export default Navbar;