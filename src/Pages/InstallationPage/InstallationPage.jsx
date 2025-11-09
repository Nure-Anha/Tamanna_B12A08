import React, { useEffect, useState } from 'react';

const InstallationPage = () => {

    // INSTALLED apps gulo Local Storage theke ekhane Installation page e ene dekhabo 
    const [All_Installed_Apps , setAllInstalledApps] = useState([]) ;

    useEffect(() => {
        const getStoredAppsString = localStorage.getItem("All_Installed_Apps") ;
        const getStoredAppsDATA = JSON.parse(getStoredAppsString) ;
        if(getStoredAppsDATA){
            setAllInstalledApps(getStoredAppsDATA) ;
        }
    } , [])


    // Sort By size Label & handle Sort Order Onchange
    const [sortOrder , setSortOrder] = useState("") ;
    const handleSortOrder = (e) => {
        e.preventDefault() ;
        console.log(e.target.value) ;
        setSortOrder(e.target.value) ;
    }
    // function of sorting items 
    const sortingItems = (() => {
        
        if(sortOrder === 'sz_asc'){
            return [...All_Installed_Apps].sort((a,b) => a.size - b.size) ;
        }
        else if(sortOrder === "sz_dsc"){
            return [...All_Installed_Apps].sort((a,b) => b.size - a.size) ;
        }
        else{
            return All_Installed_Apps ;
        }
    }) () ;




    // handleUninstallBtn functionality
    const handleUninstallBtn = () => {
        
    }

    return (
        <div className='bg-[#f1f6fa] p-20'>
            <h3 className='text-[#001931] font-bold text-[48px] text-center'>Your Installed Apps</h3>
            <p className='text-[#627382] text-center mt-4 text-xl mb-10'>Explore All Trending Apps on the Market developed by us</p>


            <div>
                <div className='flex justify-between'>
                    <p className='text-[#001931] font-semibold text-2xl mb-6'> {All_Installed_Apps.length} apps found</p>

                   <label className='select border border-gray-400 bg-white'>
                        <select className='  text-[#627382]' name="" id="" onChange={handleSortOrder} value={sortOrder}>
                            <option className='text-[#627382]' value="none" >Sort By Size</option>
                            <option className='text-[#627382]' value="sz_asc">Low-&gt;High</option>
                            <option className='text-[#627382]' value="sz_dsc">High-&gt;Low</option>
                        </select>
                   </label>
                           
               </div>

                {
                    // All_Installed_Apps.map(m => ( 
                    // <div className='flex gap-x-5 mb-10 bg-white rounded-xl p-2'>

                    sortingItems.map(m => ( 
                    <div className='flex gap-x-5 mb-10 bg-white rounded-xl p-2'>
                        
                            <div>
                                <img className='w-[90px] rounded-2xl' src={m.image} alt={m.title} />
                            </div>
                            <div>
                                <p className='text-[#001931] font-medium text-xl'>{m.title} </p>

                                <div className='flex  gap-x-8  mt-4'>
                                    <p className='text-green-500 font-semibold flex' ><img className='w-7 h-7' src="/public/assets/icon-downloads.png" alt="download icon" />{m.downloads}M </p>
                                   
                                    
                                    <p className='text-orange-500 flex gap-x-2 text-lg font-semibold '><img className='w-7 h-7' src="/public/assets/icon-ratings.png" alt="rating icon" />{m.ratingAvg} </p>


                                    <p className='text-[#627382]'>{m.size}MB </p>
                               </div>
                               
                           </div>
                                <button onClick={handleUninstallBtn} className='btn mt-6.5 ml-180 bg-[#00D390] border-0'>Uninstall</button>
                    </div> ))
                }
            </div>
        </div>
    );
};

export default InstallationPage;