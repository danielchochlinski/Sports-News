import React from "react";
import { Carousel } from "react-bootstrap";

const HeroSlider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 "
          src="https://www.sodapdf.com/blog/wp-content/uploads/2017/10/blog_teambuilding-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.sodapdf.com/blog/wp-content/uploads/2017/10/blog_teambuilding-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-80"
          src="https://www.sodapdf.com/blog/wp-content/uploads/2017/10/blog_teambuilding-1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSlider;
