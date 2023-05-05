import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ChefCard.css"
import { BiLike } from 'react-icons/bi';
const ChefCard = ({ chef }) => {
  // console.log(chef);
  const { Chef_Picture, Chef_Name, Chef_ID, Years_of_Experience, Number_of_Recipes, Likes
  } = chef;
  return (

    <Card className='p-3 mt-3'>
      
      <Card.Img className="chef_picture" variant="top" src={Chef_Picture} />
      <Card.Body>
        <Card.Title className='d-flex  justify-content-between align-items-center'>
          <div style={{ fontSize: '1.5em' }} >
            <strong>{Chef_Name}</strong>
          </div>
       <small>   <div className='d-flex align-items-center'>
            <div><BiLike style={{ fontSize: '0.8em' }} /></div>
            <div><small> {Likes} Likes</small></div>
          </div></small>
        </Card.Title>
        <Card.Text> <strong>Experience</strong> : {Years_of_Experience} years
        </Card.Text>
        <Card.Text> <strong>Number of Recipes</strong> : {Number_of_Recipes}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={`/chefs/${Chef_ID}`}><Button className='w-100'
          variant="warning">View Recipes</Button></Link>
      </Card.Footer>
    </Card>

  );
};

export default ChefCard;