import React from 'react';
import "./Featured.css"
import featured from "../../../../../assets/featured (2).jpg"
import { Container } from 'react-bootstrap';
const Featured = () => {
    return (
        <section className=' featured-item '>
        <div className='bg-black bg-opacity-50'>
              <Container className='py-5 text-center'>
                  <div>
                      <img src={featured} alt="" />
                  </div>
                  <div className='text-white'>
                      <p>January 11, 2023</p>
                      <h3>Exquisite Flavors Await: Unleash Your Inner Chef with Mr. Chef</h3>
                      <p>Mr. Chef, your go-to recipe website for culinary inspiration and gastronomic delights. Discover a world of mouthwatering recipes, expert tips, and kitchen adventures that will elevate your cooking skills to new heights. From sizzling mains to delectable desserts, our featured collection of recipes promises to tantalize your taste buds and leave you craving for more. Get ready to unleash your inner chef and create extraordinary dishes that will impress and delight everyone at your table.</p>
                      <button className="btn bg-transparent border-white text-white border-b-4 border-t-0 border-x-0  ">Read more</button>
                  </div>
              </Container>
        </div>
          </section>
    );
};

export default Featured;