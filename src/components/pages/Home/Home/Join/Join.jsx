import React from 'react';
import "./Join.css"
// import { IoArrowUndoSharp,IoArrowRedoSharp } from 'react-icons/io5';
import a1 from "../../../../../assets/a1.jpg"
import a2 from "../../../../../assets/a11.jpg"
import { Container } from 'react-bootstrap';
const Join = () => {
    return (
     <Container  className='sec'>
         
            <h1 className='mt-5 text-lg-center'>Want to Join as <span className='text-warning'>Mr. Chef</span></h1>
            <p className="text-warning fw-bold text-center">You must have</p>

            <div className='join-section'>
                <img className='join-image' src="https://img.freepik.com/free-photo/stylish-father-son-looking-phone_23-2148351764.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.1.1614607020.1683036746&semt=ais" alt="" />

                <div>
                    <div className='join-arrow '>
                        <div className='join-box'>
                            <h4>Culinary passion</h4>
                            <p>Unwavering devotion and love for the artistry and flavors of the culinary world.</p>
                        </div>
                        <img  src={a2} alt="" />
                    </div>

                   <div className='join-arrow'>
                   <img  src={a1} alt="" />
                   <div className='join-box'>
                        <h4>
                            Skillful cooking
                        </h4>
                        <p>
                            Mastery in culinary craft, creating delectable dishes with precision.
                        </p>
                    </div>
                   </div>
                    <div className='join-box'>
                        <h4>
                            Food enthusiasts
                        </h4>
                        <p>
                            Eager connoisseurs, embracing flavors and exploring curiosity, excitement.
                        </p>
                    </div>
                </div>
            </div>
      
     </Container>
    );
};

export default Join;