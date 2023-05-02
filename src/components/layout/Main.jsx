import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import "./Main.css"
const Main = () => {
    return (
        <div className='content-container'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;