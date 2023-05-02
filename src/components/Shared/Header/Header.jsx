import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../../../assets/spatula-crossed-with-chef-hat-on-top-free-vector.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Button } from 'react-bootstrap';
const Header = () => {
    const { user,signOutUser } = useContext(AuthContext);
    const handleLogOut = () => {
        signOutUser().then(() => {
           console.log("Sign Out");
          }).catch((error) => {
           console.error(error.message);
          });
    }
    return (
        <div className='header'
        >
            <Navbar className='background_color' expand="lg">
                <Container>
                    <Navbar.Brand ><img style={{ height: '40px' }} src={logo} />  <span className='text-white'>Mr Chef</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='link_style' to="/">Home</Link>
                            <Link className='link_style' to="/blog">Blog</Link>
                            {
                                user ?
                                    <div>
                                        {user && <img className='profilePicture rounded-circle' src={user.photoURL} alt="" /> }
                                        <Link  
                                        onClick={handleLogOut}
                                        className='link_style' >LogOut</Link>
                                    </div>
                                    :
                                    <Link className='link_style' to="/login">Login</Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;