import React from "react";
import { Carousel } from "react-bootstrap";

const Slides = () => {
  const divStyle = {
    backgroundColor: "#F7F7F7",
  };

  return (
    <div style={divStyle} className="p-5">
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/woman-bikini-relaxing-swing-ko-lao-lading-island-krabi-thailand_335224-1290.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Enjoy the Serenity</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/closeup-shot-male-walking-beach-sunny-day_181624-45076.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Embrace Freedom</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-with-chair-blue-sky_74190-7488.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Cross new Boundaries of Imagination</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>{" "}
    </div>
  );
};

export default Slides;
