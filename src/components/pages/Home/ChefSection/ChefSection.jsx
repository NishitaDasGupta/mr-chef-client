import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import "./ChefSection.css"
import { AiFillLike } from 'react-icons/ai';
import RecipesChef from '../RecipesChef/RecipesChef';
const ChefSection = () => {
    const chefDetails = useLoaderData();
    const { Chef_Picture, Chef_Name, Chef_Description, Chef_ID, Years_of_Experience, Number_of_Recipes, Likes, Recipes
    } = chefDetails;
    return (
        <div>
            {/* chef banner  */}
            <div className='chef_banner'>
                <Container>
                    <div className='d-lg-flex justify-content-between align-items-center '>
                        <div className="me-sm-auto">
                            <img className='chef_img rounded' src={Chef_Picture} alt="" />
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
            {/* recipes of chef  */}

            <Container>
                <h2 className='mt-3'
                >Recipes of mine : </h2>
                <hr />
                <div className='chefsdetails'>
                    {
                        Recipes.map(recipe => <RecipesChef key={recipe.Recipe_ID}
                            recipe={recipe}
                        ></RecipesChef>)
                    }
                </div>

                <Link to='/'> <Button className='w-100 mt-3'
                    variant="secondary">Go Back</Button></Link>

            </Container>
        </div>
    );
};

export default ChefSection;