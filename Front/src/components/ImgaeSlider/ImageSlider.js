import React, { useState } from 'react';
import img1 from 'assets/images/github.png';
import img2 from 'assets/images/newStudent.png';
import img3 from 'assets/images/6.png';
import img4 from 'assets/images/7.png';

import './ImageSlider.scss';
import { Carousel } from 'react-bootstrap';
import FadeIn from 'react-fade-in';

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <FadeIn delay={400}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ width: '720px' }}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt=" slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt=" slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt=" slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt=" slide" />
        </Carousel.Item>
      </Carousel>
    </FadeIn>
  );
};

export default ImageSlider;
