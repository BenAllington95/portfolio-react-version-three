import React, { useState } from 'react';


const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = items.length - 1;  // Loop back to the last item
      }
      return index;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((oldIndex) => (oldIndex + 1) % items.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-left-btn" onClick={prevSlide}>Prev</button>
      {/* <button className="carousel-right-btn" onClick={nextSlide}>Next</button> */}
      <div className='carousel-slides' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
          >
            {item}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Carousel;

