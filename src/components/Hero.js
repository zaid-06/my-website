// src/components/Hero.js
import React from 'react';
import {Carousel , Container, Image} from 'react-bootstrap';



function Hero() {
  const jumbotronStyle = {
    backgroundColor: '#e9ecef',
    padding: '3rem 1rem',
    borderRadius: '0.3rem',
    margin: '1rem 0',
  };
  const CarouselStyle = {
    // width: "600px", /* Set your desired width */
    // height: "300px", /* Set your desired height */
    // objectFit: "cover", /* This ensures the image covers the dimensions without distortion */
    // margin: "0 auto",  
    // backgroundColor: '#e9ecef',
    padding: '0rem 0rem',
    borderRadius: '0.3rem',
    margin: '1rem 0',
  }

  return (
    <>
   
    <div style={jumbotronStyle}>
      <Container>
        <h1>Welcome to My Portfolio</h1>
        {/* <p>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p> */}
      </Container>
    </div>
  
<div style={CarouselStyle}>
  <Carousel controls={true} indicators={true} interval={3000} wrap={true} pause={false}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="/images/first.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/second.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/third.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
</div>


    </>
  );
}

export default Hero;
