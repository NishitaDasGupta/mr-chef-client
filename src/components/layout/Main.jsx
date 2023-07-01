import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import "./Main.css"
import Loader from '../Shared/Loader/Loader';
import { ScrollRestoration } from "react-router-dom";
const Main = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    if (navigation.state === `loading`) {
        return <Loader></Loader>
    }
    return (
        <div className='content-container'>
            
            <Header></Header>
            <Outlet></Outlet>
            <br /><br /><br /><br /><br /><br />
            <Footer></Footer>
            <ScrollRestoration />
        </div>
    );
};

export default Main;