import React from 'react';
import "./Footer.css"
import logo from '../../../assets/spatula-crossed-with-chef-hat-on-top-free-vector.png'
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
    return (
        <div className='bg-dark text-white footer'>

            <Container className='mt-2'>
                <Row >
                    <Col sm={3}>
                        <div >
                            <h5 className='text-warning'>
                                <img style={{ height: '40px' }} src={logo} />  Mr Chef</h5>
                            < p className='mr-chef-description'><strong >Mr Chef</strong> is a recipes cook book contains couple of recipe information. It has ingredients, preparation time, cooking time and some other information as well.</p>
                        </div>
                    </Col>
                    <Col sm={3}>
                     <div>   <h5>About<span></span></h5>
                        <ul>
                            <li> <a className='link_style mb-0' href="#terms">Terms</a></li>
                            <li> <a className='link_style' href="#licenses">Licenses</a></li>
                            <li> <a className='link_style' href="#becomeAnAffiliate">Become an affiliate</a></li>
                            <li><a className='link_style' href="#chefAPI">Chef API</a></li>
                        </ul></div>
                    </Col>
                    <Col sm={3}>
                  <div>
                  <h5>Help Center<span></span></h5>
                        <ul>
                            <li> <a className='link_style mb-0' href="#helpCenters">Help Centers</a></li>
                            <li> <a className='link_style' href="#authors">Authors</a></li>
                        </ul>
                  </div>
                    </Col>
                    <Col sm={3}>
                     <div>   <h5>Our Community<span></span></h5>
                        <ul>
                            <li> <a className='link_style mb-0' href="#community">Community</a></li>
                            <li> <a className='link_style' href="#blog">Blog</a></li>
                            <li> <a className='link_style' href="#forums">Forums</a></li>
                            <li><a className='link_style' href="#meetUp">Meet Up</a></li>
                        </ul></div>
                    </Col>

                </Row>
                <hr />
                <p className='text-center p-2 text-secondary'
                ><small>© 2023 <small className='text-white'
                >Mr Chef</small> ,Llc. All Rights Reserved.</small></p>
            </Container>
        </div>
    );
};

export default Footer;