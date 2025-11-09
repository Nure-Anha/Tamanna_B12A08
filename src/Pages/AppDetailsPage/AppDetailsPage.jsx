import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
 import { ToastContainer } from 'react-toastify';
import { addToLocalStorage } from '../../Components/LocalStorage/AddToLS';

const AppDetailsPage = () => {
    const All_App_Data = useLoaderData() ;

    const params = useParams() ;   // :id er value chole ashe useParams hook er maddhome
    console.log(params) ;
    console.log(params.id) ;
    const AppId = parseInt(params.id) ;

    const SingleAppData = All_App_Data.find(l => l.id === AppId) ;
    console.log(SingleAppData) ;


    // INSTALL Btn Functionality
    const [installed , setInstalled] = useState(false) ;

    const handleInstallBtn = (obj) => {
        setInstalled(true) ;
        // toast.success("App installed successfully!") ;

        addToLocalStorage(obj) ;
    }


    return (
        <div className='bg-[#f1f6fa] p-20'>
            <div className='flex gap-x-5'>
                <div>
                    <img className='rounded-4xl' src={SingleAppData.image} alt={SingleAppData.title} />
                </div>
                
                <div>
                    <p className='text-[#001931] font-bold text-[32px] mb-2'>{SingleAppData.title} </p>
                    <p className='text-xl mb-[30px] text-[#627382]'>Developed by <span className='font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{SingleAppData.companyName}</span> </p>
                    <p className='text-[#c5c9cc] w-240 mb-5'><hr /></p>

                    <div className='flex gap-x-20 mb-[30px]'>
                        <div>
                            <img src="/public/assets/icon-downloads.png" alt="downloads icon" />
                            <p className='text-[#001931]'>Downloads</p>
                            <p className='text-[#001931] font-extrabold text-[40px]'>{SingleAppData.downloads}M </p>
                        </div>

                        <div>
                            <img src="/public/assets/icon-ratings.png" alt="ratings icon" />
                            <p className='text-[#001931]'>Average Ratings</p>
                            <p className='text-[#001931] font-extrabold text-[40px]'>{SingleAppData.ratingAvg} </p>
                        </div>

                        <div>
                            <img src="/public/assets/icon-review.png" alt="reviews icon" />
                            <p className='text-[#001931]'>Total Reviews</p>
                            <p className='text-[#001931] font-extrabold text-[40px]'>{SingleAppData.reviews}K </p>
                        </div>

                        
                    </div>

                    {/* Install BTN */}
                    <button onClick={()=> handleInstallBtn(SingleAppData)} disabled={installed} className='btn bg-[#00D390] border-0 font-semibold text-xl  mb-10 hover:bg-green-800'>{installed ? "Installed" : `Install Now (${SingleAppData.size}MB)`} </button>

                </div>

            </div>
            <p className='text-[#c5c9cc] w-298 mb-10'><hr /></p>
            
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AppDetailsPage;