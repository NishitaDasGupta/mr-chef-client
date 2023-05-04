import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import "./ChefSection.css"
import { AiFillLike } from 'react-icons/ai';
const ChefSection = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails);
    const { Chef_Picture, Chef_Name, Chef_Description, Chef_ID, Years_of_Experience, Number_of_Recipes, Likes
    } = chefDetails;
    return (
        <div className='chef_banner'>
        <Container>
            <div className='d-lg-flex justify-content-between align-items-center '>
               <div className="me-sm-auto">
               <img className='chef_img' src={Chef_Picture} alt="" />
               </div>
                <div className='p-4'
                >
                    <h2>{Chef_Name}</h2>
                    <div className='d-flex align-items-center'>
                        <div><AiFillLike style={{ fontSize: '1em' }} /></div>
                        <div><small> {Likes} Likes</small></div>
                    </div>
                    <div className='d-flex align-items-center mt-3'>
                        <p className='border border-2 rounded p-1 me-2'><strong>Experience:</strong> {Years_of_Experience} years</p>
                        <p className='border border-2 rounded p-1'><strong>Total Recipes:</strong>  {Number_of_Recipes}</p></div>
                    <p className='text-muted chef-description'>{Chef_Description}</p>
                </div>
            </div>
        </Container>
        </div>
    );
};

export default ChefSection;