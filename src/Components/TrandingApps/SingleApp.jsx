import React from 'react';
import { useNavigate } from 'react-router';

const SingleApp = ({i}) => {
    console.log(i) ;

    // Clicking on a card navigate App Details page
    const navigate = useNavigate() ;
    const handleCardClick = () => {
        console.log("Card Clicked") ;
        navigate('/appsdetailspage') ;

    }
    return (
        <div onClick={handleCardClick}>
            <div className='rounded-2xl shadow-2xl bg-white'>
                <img className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                mx-auto' src={i.image} alt={i.title} />
                <p className='text-[#001931] font-medium text-center mt-3 text-xl'>{i.title} </p>

                <div className='flex justify-between pl-4 pr-4 pb-5 mt-7'>
                    <a className='text-green-500 font-semibold flex' href=""><img className='w-7 h-7' src="/public/assets/icon-downloads.png" alt="download icon" />{i.downloads} </a>
                    
                    <a className='text-orange-500 flex gap-x-2 text-lg font-semibold ' href=""><img className='w-7 h-7' src="/public/assets/icon-ratings.png" alt="rating icon" />{i.ratingAvg} </a>
                </div>
            </div>
        </div>
    );
};

export default SingleApp;