import React from 'react';
import { Spinner } from 'react-bootstrap';
import "./Loader.css"
const Loader = () => {
    return (
       <div className='spinnerMiddle'>
         <Spinner  animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
       </div>
    );
};

export default Loader;