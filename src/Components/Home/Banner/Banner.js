import React from "react";
import banner from "../../../Resources/Images/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      {/* <img src={banner} className="img-fluid" /> */}
      <h1>Cox Show Bazaar</h1>
      <h2>
        Visit Cox's Bazaar,
        <br /> with Cox Show Bazaar
      </h2>
    </div>
  );
};

export default Banner;
