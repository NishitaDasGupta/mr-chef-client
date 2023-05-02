import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../../../assets/spatula-crossed-with-chef-hat-on-top-free-vector.png'
const Header = () => {
    return (
        <div className='header'
        >
            <Navbar className='background_color' expand="lg">
                <Container>
                    <Navbar.Brand ><img style={{ height: '40px' }} src={logo} />  Mr Chef</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='link_style' to="/">Home</Link>
                            <Link className='link_style' to="/blog">Blog</Link>
                            <small>User Profile pic</small>
                            <Link className='link_style' to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;