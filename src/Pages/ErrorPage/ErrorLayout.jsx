import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import PageError from './PageError';
import Footer from '../../Components/Footer/Footer';

const ErrorLayout = () => {
    return (
        <div>
            <Navbar></Navbar> 

            <PageError></PageError> 

            <Footer></Footer>
        </div>
    );
};

export default ErrorLayout;