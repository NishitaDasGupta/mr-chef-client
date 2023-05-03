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
            <br /><br /><br /><br /><b><br /><br /></b>
            <Footer></Footer>
        </div>
    );
};

export default Main;