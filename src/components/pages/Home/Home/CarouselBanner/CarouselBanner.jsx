import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
const CarouselBanner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto"
                        style={{height:"400px"}}
                        src="https://img.freepik.com/free-photo/high-angle-tasty-pakistani-dish_23-2148825123.jpg?w=900&t=st=1683104227~exp=1683104827~hmac=bdf675be05fc4e1d8298761069a2a5a7b2bc18b27c662d729722e4c1988e9ce6"
                        alt="First slide"
                    />
                    <Carousel.Caption 
                    >
                        <h3 >Mutton Curry served with naan</h3>
                        <p >Mutton marinated and cooked with plenty of spices, herbs, onions, tomatos and yogurt.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto"
                        style={{height:"400px"}}
                        src="https://img.freepik.com/free-photo/front-view-meat-sauce-soup-with-greens-potatoes-dark-desk-soup-meal-sauce-meat_140725-79069.jpg?size=626&ext=jpg&ga=GA1.2.1614607020.1683036746&semt=ais"

                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Fish Curry</h3>
                        <p>Onions, tomatoes, spices & herbs enrich the taste & aroma of this delicious Fish curry .</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto"
                        style={{height:"400px"}}
                        src="https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?w=900&t=st=1683103227~exp=1683103827~hmac=d3b544b2b93c429e22d36a026b805ab31f68cd3e98ce692686763fd04190996b"
                    
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Chicken Dum Biriyani</h3>
                        <p>Chicken marinated and cooked along with short grain and fine rice on a slow fire.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselBanner;