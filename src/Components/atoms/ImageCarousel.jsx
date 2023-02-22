import React, { useState, useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.scss';
const images = [
    { src: 'https://picsum.photos/id/237/800/400', alt: 'Car 1' },
    { src: 'https://picsum.photos/id/238/800/400', alt: 'Car 2' },
    { src: 'https://picsum.photos/id/239/800/400', alt: 'Car 3' },
    { src: 'https://picsum.photos/id/240/800/400', alt: 'Car 4' },
    { src: 'https://picsum.photos/id/241/800/400', alt: 'Car 5' },
  ];
  const ImageCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
      setCurrentSlide(index);
    };
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % images.length);
      }, 5000);
  
      return () => {
        clearInterval(timer);
      };
    }, [currentSlide]);
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        interval={5000}
        selectedItem={currentSlide}
        onChange={handleSlideChange}
      >
        {images.map((image) => (
          <div key={image.src}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
    );  
    
  };
  export default ImageCarousel