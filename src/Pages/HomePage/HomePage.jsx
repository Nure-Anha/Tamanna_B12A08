import React from 'react';

const HomePage = () => {
    return (
        <div className='bg-[#f1f6fa]'>
        {/* Banner Title , Subtitle */}
            <h3 className='pt-[80px] font-bold text-[#001931] text-7xl text-center mb-6'>We Build <br /> <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold'>Productive</span> Apps</h3>

            <p className='text-center text-[#627382]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>


        {/* 2 BUTTONS */}
            <div className="mt-[40px] flex justify-center items-center pb-[40px]">

                <a className='btn font-semibold text-[16px] text-[#001931]' href="https://share.google/z6USyw39W4b7y4FGK" target='blank'> <img className='w-6 h-6' src="/assets/Play_Store.png" alt="Play Store Icon" /> Google Play</a>

                <a className='btn font-semibold text-[16px] text-[#001931] ml-6' href="https://www.apple.com/app-store/" target='blank'> <img className='w-6 h-6' src="/assets/App Store.jpg" alt="App Store Icon" /> App Store</a>
            </div>

        {/* Hero Image */} 
            <img className='mx-auto' src="/assets/hero.png" alt="" />

        {/* Trusted Section */}
        <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <h3 className='text-center text-5xl font-semibold pb-[40px] pt-[80px]'>Trusted by Millions, Built for You</h3>

            <div className='flex flex-col md:flex-row justify-center items-center pb-20 '>
                
                <div className='mt-5 mb-[80px] md:mb-0 md:mt-0'>
                    <p className='text-center text-gray-300'>Total Downloads</p>
                    <p className='text-[64px] font-bold text-center'>29.6M</p>
                    <p className='text-center text-gray-300'>21% more than last month</p>
                </div>

                <div className='md:ml-40 mb-[80px] md:mb-0'>
                    <p className='text-center text-gray-300'>Total Reviews</p>
                    <p className='text-[64px] font-bold text-center'>906K</p>
                    <p className='text-center text-gray-300'>46% more than last month</p>
                </div>

                <div className='md:ml-40'>
                    <p className='text-center text-gray-300'>Active Apps</p>
                    <p className='text-[64px] font-bold text-center'>132+</p>
                    <p className='text-center text-gray-300'>31 more will Launch</p>
                </div>
            </div>
        </div>

            
        </div>
    );
};

export default HomePage;