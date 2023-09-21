import React from "react";

import BannerImage from '../src/images/pexels-ana-madeleine-uribe-2762942.jpg'

import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">

        <div className="home-bannerImage-container">
          
        </div>
        <div className="home-text-section">
          <h2 className="primary-heading">
        Food Delivery Mobile App

          </h2>
          {/* <p className="primary-text">
          Choose your favourite meal from our broad selecion of available meals and enjoy a delicious lunch or dinnerat home. All our meals are cooked with  high-quality ingredients,just-in-time and of course by experienced chefs!
          </p> */}
          <button className="secondary-button">
            Order Now 
          </button>
        </div>
        <div className="home-image-section">
        <img src={BannerImage} alt=""/>
         
        </div>
      </div>
    </div>
  );
};

export default Home;