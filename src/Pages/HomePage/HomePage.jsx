import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TrandingApps from '../../Components/TrandingApps/TrandingApps';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const TrandingData = useLoaderData() ;
    return (
        <div>
            <Banner></Banner>
            
            <TrandingApps TrandingData = {TrandingData}></TrandingApps>
        </div>
    );
};

export default HomePage;