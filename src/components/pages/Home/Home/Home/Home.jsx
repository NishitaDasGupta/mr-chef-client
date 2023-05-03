import React, { useEffect, useState } from 'react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import ChefCard from "../ChefCard/ChefCard";
import { Button, Container } from 'react-bootstrap';
import "./Home.css"
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
const Home = () => {
    const [chefsDetails, setChefsDetails] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const recipes = useLoaderData();
    console.log(recipes);
    useEffect(() => {
        fetch('https://mr-chef-server-nishitadasgupta.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefsDetails(data))
    }, [])
    const handleSeeMore = () => {
        setShowAll(true);
    }
    return (
   <div>
      {/* banner  */}
      <div className='banner '>
                <div className='banner-title'><span className='hello'>Hello there!!!</span>
                     <br /><span className='mrChef'>Mr Chef </span> <span className='hello'
                     > is here ... </span>

                     <br/>
                     <Button className='mt-5 text-white' variant="outline-warning">Wanna Know more?</Button>
                     </div>
            </div>
         <Container >
          
            {/* Top Recipes */}
            <h1 className='mt-5 text-lg-center'><span className='text-warning'>Top Recipes</span> of the day... </h1>
            <p className='text-lg-center'>Sliding recipes are much more tasty as food than sliding images!!</p>
            <CarouselBanner></CarouselBanner>
            {/* All Recipes */}
            <div>
                <h1 className='mt-5 text-lg-center'>All Recipes</h1>
                < p className='text-lg-center'>We tinkered. We tested. We tested again. We tweaked these recipes until they were absolutely perfect — tried-and-true dishes that are sure to stand the test of time. We feel 100% confident in calling them our Bests. Try them, and we bet you will agree. </p>
                <div >
                    {
                        showAll ?
                            <div className='chefsdetails'> {
                                recipes.map(recipe => <Recipes
                                    key={recipe.Recipe_ID}
                                    recipe={recipe}
                                ></Recipes>)
                            }</div>
                            :
                            <div className='chefsdetails'> {
                                recipes.slice(0, 6).map(recipe => <Recipes
                                    key={recipe.Recipe_ID}
                                    recipe={recipe}
                                ></Recipes>)
                            }</div>
                    }
                </div>
            </div>
            <div className='text-center my-3'>
                {
                    showAll ?
                        "" :
                        <Button onClick={handleSeeMore}
                            variant="warning">See More</Button>
                }
            </div>
            {/* Chef Details */}
            <div>
                <h1 className='mt-5 text-lg-center'>Chef Details</h1>
                <p className='text-lg-center'>Knowing our chefs is an important step. They provides us best recipes and hlep us to figure out how can a food recipe delicious.</p>
                <div className='chefsdetails'>
                    {
                        chefsDetails.map(
                            (chef) => <ChefCard
                                key={chef.Chef_ID}
                                chef={chef}
                            ></ChefCard>
                        )
                    }
                </div>
            </div>
        </Container >

   </div>
    );
};

export default Home;