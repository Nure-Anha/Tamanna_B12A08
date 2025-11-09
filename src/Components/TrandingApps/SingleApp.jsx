import React from 'react';
import { useNavigate } from 'react-router';

const SingleApp = ({i}) => {
    console.log(i) ;

    // Clicking on a card navigate App Details page
    const navigate = useNavigate() ;
    const handleCardClick = () => {
        console.log("Card Clicked") ;
        navigate(`/appsdetailspage/${i.id}`) ;  // Dynamic Route 

    }
    return (
        <div onClick={handleCardClick}>
            <div className='rounded-2xl shadow-2xl bg-white'>
                <img className='rounded-4xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                mx-auto p-5' src={i.image} alt={i.title} />
                <p className='text-[#001931] font-medium text-center mt-3 text-xl'>{i.title} </p>

                <div className='flex justify-between pl-4 pr-4 pb-5 mt-7'>
                    <p className='text-green-500 font-semibold flex'><img className='w-7 h-7' src="/public/assets/icon-downloads.png" alt="download icon" />{i.downloads}M </p>
                    
                    <p className='text-orange-500 flex gap-x-2 text-lg font-semibold ' ><img className='w-7 h-7' src="/public/assets/icon-ratings.png" alt="rating icon" />{i.ratingAvg} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleApp;