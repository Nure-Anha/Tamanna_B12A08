import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
 <div>
        <div className='footer sm:footer-horizontal bg-[#001931] p-10 text-white'>
            <nav>
                <h6 className='footer_title_heading'>Services</h6>
                <a className='hover:text-green-400' href="">Branding</a>
                <a className='hover:text-green-400' href="">Marketing</a>
                <a className='hover:text-green-400' href="">Advertisement </a>
            </nav>


           <nav>
                <h6 className="footer_title_heading">Company</h6>
                <a className='hover:text-green-400' href="">About us</a>
                <a className='hover:text-green-400' href="">Contact</a>
                <a className='hover:text-green-400' href="">Jobs</a>
           </nav>


            <nav>
                <h6 className="footer_title_heading">Legal</h6>
                <a className='hover:text-green-400' href="">Terms of use</a>
                <a className='hover:text-green-400' href="">Privacy policy</a>
                <a className='hover:text-green-400' href="">Cookie policy</a>
           </nav>


           <nav>
                <h6 className="footer_title_heading">Social</h6>
                <div className=" flex gap-4">

                    <a className="text-3xl text-white hover:text-green-400" href=""> <FontAwesomeIcon  icon={faXTwitter}></FontAwesomeIcon></a>

                    <a className="text-3xl text-white hover:text-green-400" href=""> <FontAwesomeIcon  icon={faLinkedin}></FontAwesomeIcon></a>

                    <a className="text-3xl text-white hover:text-green-400" href=""> <FontAwesomeIcon  icon={faFacebook}></FontAwesomeIcon></a>
                </div>
           </nav>
  
        </div>
            
        <div className="bg-[#001931] text-white p-4">
            <div className="w-full h-px bg-gray-500 mb-10">
                <p className="text-sm text-center pt-4">Copyright © 2025 - All right reserved</p>
            </div>
                
        </div>
 </div>
        
    );
};

export default Footer;