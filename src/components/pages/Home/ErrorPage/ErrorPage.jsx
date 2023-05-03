import React from 'react';
import { useRouteError ,Link} from "react-router-dom";
import Banner1 from "../../../../assets/ERROR PICTURE.jpg"
import { Button, Container } from 'react-bootstrap';
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <Container className='text-center' >
            <img style={{ width: "100%" }} src={Banner1} alt="" />
            <h1 ><strong>OOPS! PAGE NOT FOUND</strong></h1>
            <p className='text-danger'>Sorry, an unexpected error has occurred. The Page you are looking for is <span >{error.statusText || error.message}</span></p>
            <Link to='/'><Button variant="outline-warning">Return Home</Button></Link>
        </Container>
    );
};

export default ErrorPage;