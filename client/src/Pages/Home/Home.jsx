import React from "react";
import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Slider from "../../Components/Slider/Slider";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
