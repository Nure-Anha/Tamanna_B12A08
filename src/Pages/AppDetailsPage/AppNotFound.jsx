import React from 'react';
import { useNavigate } from 'react-router';

const AppNotFound = () => {

// handleGoBackBtn functionality 
const navigte = useNavigate() ;
const handleGoBackBtn = () => {
    navigte("/apps") ;
}

    return (
        <div className='bg-[#f1f6fa] pb-20'>
            <img className='mx-auto pt-20 mb-10 w-[200px]' src="/assets/App-Error.png" alt="error png" />
            <p className='text-[#001931] font-semibold text-5xl text-center '>OPPS!! APP NOT FOUND</p>
            <p className='text-[#627382] text-xl font-normal mt-5 text-center'>The App you are requesting is not found on our system.  please try another apps</p>

            <button onClick={handleGoBackBtn} className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-2.5 rounded-lg w-[145px] h-12 font-semibold text-[16px] mt-10 mx-auto block border-0' >Go Back!</button>
        </div>
    );
};

export default AppNotFound;