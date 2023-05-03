import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ChefCard.css"
const ChefCard = ({ chef }) => {
    // console.log(chef);
    const { Chef_Picture, Chef_Name, Chef_ID, Years_of_Experience, Number_of_Recipes, Likes
    } = chef;
    return (
       
  <Card className='p-3 mt-3'>
        <Card.Img className="chef_img" variant="top" src={Chef_Picture} />
        <Card.Body>
          <Card.Title><strong>{Chef_Name}</strong></Card.Title>
          <Card.Text> <strong>Years of Experience</strong> : {Years_of_Experience}
          </Card.Text>
          <Card.Text> <strong>Number of Recipes</strong> : {Number_of_Recipes}
          </Card.Text>
          <Card.Text> <strong>Likes</strong> : {Likes}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link><Button className='w-100' 
         variant="primary">View Recipes</Button></Link>
        </Card.Footer>
      </Card>
       
    );
};

export default ChefCard;