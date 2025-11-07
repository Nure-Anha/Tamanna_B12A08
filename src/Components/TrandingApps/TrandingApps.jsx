import React from 'react';
import SingleApp from './SingleApp';
import { useNavigate } from 'react-router';

const TrandingApps = ({TrandingData}) => {

    const Tranding_Data = TrandingData ;
    console.log(Tranding_Data);

    // Included a “Show All” button
    const navigate = useNavigate() ;
    const handleShowALLBtn = () => {
        console.log("Clicked handleShowALLBtn") ;
        navigate('/apps')

    }

    return (
        <div className='bg-[#f1f6fa] pb-10'>
            <h3 className='text-[#001931] font-bold text-5xl pt-20 text-center'>Trending Apps</h3>
            <p className='text-[#627382] text-center mt-4 pb-10'>Explore All Trending Apps on the Market developed by us</p>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ml-10 mr-15'>
                {
                    Tranding_Data.map(i => <SingleApp key={i.id} i = {i}></SingleApp> )
                }
           </div>

           <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-2.5 rounded-lg w-[145px] h-12 font-semibold text-[16px] mt-10 mx-auto block border-0' onClick={handleShowALLBtn}>Show All</button>
        </div>
    );
};

export default TrandingApps;