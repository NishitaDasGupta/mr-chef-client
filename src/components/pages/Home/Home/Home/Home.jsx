import React, { useEffect, useState } from 'react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import ChefCard from "../ChefCard/ChefCard";
import { Button, Container } from 'react-bootstrap';
import "./Home.css"
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import Loader from '../../../../Shared/Loader/Loader';
import Sponsers from '../Sponsers/Sponsers';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import Join from '../Join/Join';
import JoinEmail from '../JoinEmail/JoinEmail';
import Featured from '../Featured/Featured';
const Home = () => {

    const [chefsDetails, setChefsDetails] = useState([]);

    const [showAll, setShowAll] = useState(false);
    const recipes = useLoaderData();
    // console.log(recipes);
    useEffect(() => {
        fetch('https://mr-chef-server-nishitadasgupta.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefsDetails(data);
            })
    }, [])
    const handleSeeMore = () => {
        setShowAll(true);
    }

    return (
        <div>

            {/* banner  */}
            <div className='banner '>
                <div className='banner-title hello'>A RECIPE IS A STORY <br /> THAT ENDS WITH <br /> A GOOD MEAL

                    <br />
                    <Link to="/login"> <Button className='mt-5 text-white' variant="outline-warning">Wanna Know more?</Button></Link>
                </div>
            </div>

            {/* WhoWeAre */}

            <WhoWeAre></WhoWeAre>

            {/* Top Recipes */}
            <Container className='sec'>

                <h1 className='mt-5 text-lg-center'><span className='text-warning'>Top Recipes</span> of the day... </h1>
                <p className='text-lg-center'>Sliding recipes are much more tasty as food than sliding images!!</p>
                <CarouselBanner></CarouselBanner>


                {/* All Recipes */}
                <div className='sec'>
                    <div >
                        <h1 className='mt-5 text-lg-center'>All <span className='text-warning'>Recipes</span></h1>
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
                </div>

                {/* Chef Details */}
                <div className='sec'>
                    <h1 className='mt-5 text-lg-center'><span className='text-warning'>CHEF </span>Details</h1>
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
            {/* Featured */}
            <Featured></Featured>
            {/* JOIN  */}
            <Join></Join>
            {/* JoinEmail */}
            <JoinEmail></JoinEmail>
            {/* Sponsers  */}
            <div>
                <h1 className='mt-5 text-lg-center sponserSpace'>Sponsored By</h1>
                <Sponsers></Sponsers>
            </div>

        </div>
    );
};

export default Home;