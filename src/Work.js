import React from "react";
import PickMeals from '../src/images/pexels-elli-1854664.jpg'
import ChooseMeals from '../src/images/pexels-robin-stickel-70497.jpg'
import DeliveryMeals from '../src/images/pexels-nati-17216084.jpg'

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Fav Recipes",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Good Food Qualiy",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Swiggie has some pretty cool and different recipes, that look delicious! Aside from that, you can purchase their products like cookware, bake ware and utensils in vibrant color choices.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;