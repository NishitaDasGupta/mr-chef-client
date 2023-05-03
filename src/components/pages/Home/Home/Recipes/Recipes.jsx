import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react';
import { Card } from 'react-bootstrap';
import { BiLike } from 'react-icons/bi';
const Recipes = ({ recipe }) => {
    const { Recipe_Name, Recipe_Pic, Recipe_ID, Ratings, Likes } = recipe;
    return (
        <Card className='p-3 mt-3'>
            <Card.Img className="chef_img" variant="top" src={Recipe_Pic} />
            <Card.Body>
                <Card.Title><strong>{Recipe_Name}</strong></Card.Title>
            </Card.Body>
            <Card.Footer className='d-flex  justify-content-between align-items-center'>
               <div className='d-inline-flex align-items-center'>
               <Rating style={{ maxWidth: 90 }}  value={Math.round(Ratings)} readOnly  />
               <small> {Ratings}</small></div>
               <p className='align-items-center'><small><BiLike style={{fontSize:'1.5em'}} /> {Likes} Likes</small></p>
            </Card.Footer>
        </Card>
    );
};

export default Recipes;