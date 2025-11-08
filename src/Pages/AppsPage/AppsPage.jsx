import React from 'react';
import { useLoaderData } from 'react-router';
import AppsPageBanner from '../../Components/AppsPageBanner/AppsPageBanner';
import AllApps from '../../Components/AllApps';

const Apps = () => {
    const Apps_Data = useLoaderData() ;
    return (
        <div className='bg-[#f1f6fa] pb-20'>
            <AppsPageBanner></AppsPageBanner>
            <AllApps Apps_Data = {Apps_Data} ></AllApps>
        </div>
    );
};

export default Apps;