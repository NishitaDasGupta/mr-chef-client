import React from 'react';
import "./JoinEmail.css"
import join from "../../../../../assets/Add files.gif"
import { Link } from 'react-router-dom';
const JoinEmail = () => {
    return (
        <div>
                <div className="mx-auto my-40">
            <div className="join-section">
                <img src={join} alt="" />
                <div className="text-center">
    <h1 className="text-5xl font-bold">Join Us: Contribute to Mr Chef</h1>
    <p className="py-6 text-warning fw-bold">Let's start sharing your awesome recipes</p>
  
    <div className="input-container">
      <input
        type="email"
        className="input-field"
        placeholder="Type your email..."
      />
      <Link to="/register"> <button className="send-button">Join US</button></Link>
    </div>
    
   
        </div>
            </div>
        </div>
        </div>
    );
};

export default JoinEmail;