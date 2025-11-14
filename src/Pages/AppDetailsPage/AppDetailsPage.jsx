import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
 import { ToastContainer } from 'react-toastify';
import { addToLocalStorage } from '../../Components/LocalStorage/AddToLS';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';
import AppNotFound from '../AppDetailsPage/AppNotFound';


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


    
    // app not found in app details section
    if(!SingleAppData){
        return (
            <AppNotFound></AppNotFound>
        )
    }


    return (
        <div className='bg-[#f1f6fa] p-20'>
            <div className='flex flex-col lg:flex-row  md:text-center lg:text-left gap-x-5'>
                <div>
                    <img className='md:mx-auto lg:mx-auto xl:mx-0 rounded-4xl' src={SingleAppData.image} alt={SingleAppData.title} />
                </div>
                
                <div>
                    <p className='text-[#001931] font-bold text-[32px] mb-2'>{SingleAppData.title} </p>
                    <p className='text-xl mb-[30px] text-[#627382]'>Developed by <span className='font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{SingleAppData.companyName}</span> </p>
                    <p className='text-[#c5c9cc] xl:w-240 mb-5'><hr /></p>

                    <div className='flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 text-center gap-x-20 mb-[30px]'>
                        <div>
                            <img className='mx-auto lg:mx-0' src="/assets/icon-downloads.png" alt="downloads icon" />
                            <p className='text-[#001931]'>Downloads</p>
                            <p className='text-[#001931] font-extrabold text-[40px]'>{SingleAppData.downloads}M </p>
                        </div>

                        <div>
                            <img className='mx-auto lg:mx-0' src="/assets/icon-ratings.png" alt="ratings icon" />
                            <p className='text-[#001931]'>Average Ratings</p>
                            <p className='text-[#001931] font-extrabold text-[40px]'>{SingleAppData.ratingAvg} </p>
                        </div>

                        <div>
                            <img className='mx-auto lg:mx-0' src="/assets/icon-review.png" alt="reviews icon" />
                            <p className='text-[#001931]'>Total Reviews</p>
                            <p className='text-[#001931] font-extrabold text-[40px]'>{SingleAppData.reviews}K </p>
                        </div>

                        
                    </div>

                    {/* Install BTN */}
                    <button onClick={()=> handleInstallBtn(SingleAppData)} disabled={installed} className='btn bg-[#00D390] border-0 font-semibold text-xl  mb-10 hover:bg-green-800'>{installed ? "Installed" : `Install Now (${SingleAppData.size}MB)`} </button>

                </div>

            </div>
            <p className='text-[#c5c9cc] xl:w-298 mb-10'><hr /></p>


            {/* CHART */}
            <div>
                <h3 className='text-[#001931] font-semibold text-2xl mb-6'>Ratings</h3>
                    <div className='mb-15'>
                    <BarChart
                        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                        responsive
                        data={SingleAppData.ratings}
                        layout='vertical'
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type='number' />
                        <YAxis dataKey="name"
                        type='category'
                        reversed />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#FF8811" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        {/* <Bar dataKey="name" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
                 </BarChart>
                </div>

                <p className='text-[#c5c9cc] xl:w-298 mb-10'><hr /></p>
            </div>
           
            <p className='mt-10 mb-6 font-semibold text-2xl text-[#001931]'>Description</p>
            <p className='text-[#627382] text-xl whitespace-pre-line'>{SingleAppData.description} <br />  </p>

            <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default AppDetailsPage;