import React from "react";
import { Carousel } from "react-bootstrap";

const Landing = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "80vh" }}>
        <img
          className="carousel-image"
          src="./images/image-1.jpg"
          alt="First slide"
          style={{ width: "100vw", height: "100vh" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "80vh" }}>
        <img src="./images/image-2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item style={{ height: "80vh" }}>
        <img src="./images/image-5.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Landing;
