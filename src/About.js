import React from "react";
// import AboutBackground from '../src/images/pexels-jan-n-g-u-y-e-n-🍁-2664216.jpg'
import AboutBackgroundImage  from '../src/images/pexels-karthik-reddy-397913.jpg'

const About = () => {
  return (
    <div className="about-section-container">
      {/* <div className="about-background-image-container">
      <img src={AboutBackground} alt="" />
      </div> */}
      <div className="about-section-image-container">
      <img src={AboutBackgroundImage} alt="" />
        
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <p className="ttext">
        Swiggy is an Indian online food ordering and delivery platform. Founded in 2014, Swiggy is headquartered in Bangalore and operates in more than 500 Indian cities as of September 2021.[5][6] Besides food delivery, the platform also provides on-demand grocery deliveries under the name Instamart, and same-day package delivery service called Swiggy Genie.
        </p>
        <p className="ttext">
        Choose your favourite meal from our broad selecion of available meals and enjoy a delicious lunch or dinnerat home. All our meals are cooked with  high-quality ingredients,just-in-time and of course by experienced chefs!

        </p>
        <div className="about-buttons-container">
          <button className="HH">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
