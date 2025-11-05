import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>  {/*this is where child routes render like home , apps etc */}

            <Footer></Footer>
        </div>
    );
};

export default Root;