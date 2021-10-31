import React from "react";
import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";
import Sites from "../Sites/Sites";
import Slides from "../Slides/Slides";

const Home = () => {
  return (
    <div>
      <Banner />
      <Packages />
      <Sites />
      <Slides />
    </div>
  );
};

export default Home;
