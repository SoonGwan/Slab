import React, { useState } from 'react';
import img1 from 'assets/images/github.png';
import './ImageSlider.scss';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ width: '720px' }}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ImageSlider;
