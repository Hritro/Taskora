import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import HomePage from '../Components/HomePage';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HomePage></HomePage>
            <div className='mt-5 flex justify-center items-center'>
                <Outlet></Outlet>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Layout;