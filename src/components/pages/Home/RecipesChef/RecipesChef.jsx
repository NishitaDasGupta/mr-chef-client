import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { BiLike } from 'react-icons/bi';

const RecipesChef = ({ recipe }) => {
    console.log(recipe);
    const { Cooking_Time, Ingredients, Likes, Preparation_Time, Ratings, Recipe_Details, Recipe_Name, Recipe_Pic } = recipe;
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Recipe_Pic} />
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <div className='d-flex  justify-content-between align-items-center'>

                            <div className='d-flex align-items-center'>
                                <div><BiLike style={{ fontSize: '1.5em' }} /></div>
                                <div> {Likes} Likes</div>
                            </div>
                            <div className='d-inline-flex align-items-center'>
                                <Rating style={{ maxWidth: 90 }} value={Math.round(Ratings)} readOnly />
                                <small> {Ratings}</small></div>
                        </div></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Title><h3>{Recipe_Name}</h3>
                    </Card.Title>
                    <Card.Text>
                        <h5>Ingredients:</h5>
                    {
                            Ingredients.map(ingredient => <li key={ingredient}
                            >{ingredient}</li>)
                        }
                    </Card.Text>
                    <Card.Text>
                        <h5>Cooking Method:</h5>
                        {Recipe_Details}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Preparation Time:  {Preparation_Time}</ListGroup.Item>
                    <ListGroup.Item>Cooking Time: {Cooking_Time}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RecipesChef;