import React, { useState } from 'react';
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { BiLike } from 'react-icons/bi';
import "./RecipesChef.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipesChef = ({ recipe }) => {
    // console.log(recipe);
    const [toastCheck, setToastCheck] = useState(false);
    const { Cooking_Time, Ingredients, Likes, Preparation_Time, Ratings, Recipe_Details, Recipe_Name, Recipe_Pic } = recipe;
    const handleFavourite = (name) => {
        setToastCheck(true);
        toast(`${name} is my favourite.`);
    }
    return (
        <Container>
            <Card style={{ height: "130vh" }}
            >
                <Card.Img variant="top" className="
                recipe_img" src={Recipe_Pic} />
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
                <Card.Footer>
                    <Button className='w-100' onClick={() => { handleFavourite(`${Recipe_Name}`) }} disabled={toastCheck}
                        variant="warning">Favorite</Button>
                </Card.Footer>
            </Card>
            <ToastContainer />
        </Container>
    );
};

export default RecipesChef;