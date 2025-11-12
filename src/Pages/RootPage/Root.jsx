import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';


const Root = () => {

// Lodaing in each page navigation
const navigation = useNavigation() ;
const loadingtrue = navigation.state === 'loading' ;


    return (
        <div>
            <Navbar></Navbar>

            {/* // Lodaing in each page navigation */}
            {
                loadingtrue && (<span className="loading loading-spinner loading-xl ml-[650px]"></span>)
            }
            <Outlet></Outlet>  {/*this is where child routes render like home , apps etc */}

            <Footer></Footer>
        </div>
    );
};

export default Root;