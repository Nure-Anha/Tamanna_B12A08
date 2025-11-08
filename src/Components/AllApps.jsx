import React, { useState } from 'react';
import SingleAllApps from './SingleAllApps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const AllApps = ({Apps_Data}) => {

    const appsData = Apps_Data ;
    console.log(appsData) ;

    // SEARCH 
    const [search , setSearch] = useState('') ;
    const handleSearch = (e) => {
        e.preventDefault() ;
        console.log(e.target.value) ;
        setSearch(e.target.value) ;
    }

    // SEARCHED Products CONFIGURATION
    const searchVal = search.trim().toLocaleLowerCase() ; //space remv + lowercase
    const searchProd = searchVal ? appsData.filter(j => j.title.toLocaleLowerCase().includes(searchVal)) : appsData ;
    console.log(searchProd) ;

    return (
        <div>
            {/* APPS FOUND */}
            <div className='flex gap-x-20 md:gap-x-75 lg:gap-x-128 xl:gap-x-180 2xl:gap-x-200 mb-4'>
                {/* <p className='text-[#001931] font-semibold text-2xl ml-10 mb-5'>({appsData.length}) Apps Found </p> */}
                <p className='text-[#001931] font-semibold text-2xl ml-10 mb-5'>({searchProd.length}) Apps Found </p>

            {/* SEARCH BOX */}
                <label className='input bg-transparent border-gray-400 text-[#627382]  w-[180px] md:w-[330px] lg:w-70 xl:w-[340px] 2xl:w-90'  onChange={handleSearch} value={search} >
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    <input type="search" name='S_Apps' placeholder='Search Apps' />
                </label>
            </div>

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ml-10 mr-15'>
                {
                    // appsData.map(i => <SingleAllApps key={i.id} i = {i} ></SingleAllApps>)

                    searchProd.map(i => <SingleAllApps key={i.id} i = {i} ></SingleAllApps>)
                }
            </div> */}
            <div>
                {
                    searchProd.length !== 0 ? 
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ml-10 mr-15'>
                        {
                            // appsData.map(i => <SingleAllApps key={i.id} i = {i} ></SingleAllApps>)

                            searchProd.map(i => <SingleAllApps key={i.id} i = {i} ></SingleAllApps>)
                        }
                    </div> :
                    <p className='text-[#001931] text-2xl font-bold text-center'>No App Found</p>
                }
            </div>
            
        </div>
    );
};

export default AllApps;