
import React, { useState } from 'react';
import './Sliders.css';

export const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/home-slide-1.jpeg",
      title: "Queima de estoque Nike 🔥",
      subtitle: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      buttonText: "Ver Ofertas"
    },
    {
      id: 2,
      image: "/home-slide-2.jpeg",
      title: "Coleção Adidas",
      subtitle: "Morbi quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia.",
      buttonText: "Ver Ofertas"
    },
    {
      id: 3,
      image: "/home-slide-3.jpeg",
      title: "Novo Drop Supreme 🔥",
      subtitle: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      buttonText: "Ver Ofertas"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div 
          className="slides" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="slide">
              <div className="slide-content">
                <div className="slide-text">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <button className="slide-button">{slide.buttonText}</button>
                </div>
                <div className="slide-image">
                  <img src={slide.image} alt={`Slide ${slide.id}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="nav-button prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="nav-button next" onClick={nextSlide}>
          ❯
        </button>
      </div>
      
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
