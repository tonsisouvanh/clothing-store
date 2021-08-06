import React, { useState } from "react";
import "./Banner.css";
function Banner({ key, slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <>
      {/* <div className="container">
        {slides.map((item) => {
          return (
            <div className="hero-container">
              <img src={item.img} alt="" />
              <div className="text-wrapper">
                <p>Reveling the Shimmer</p>
                <h1>Elegant Design to bloom your Elegance</h1>
                <button>Shop Now</button>
                <button>Read More</button>
              </div>
            </div>
          );
        })}
      </div> */}

      <section className="slider">
        <i
          id="left-arrow"
          class="fas fa-chevron-circle-left"
          onClick={prevSlide}
        ></i>
        <i
          id="right-arrow"
          class="fas fa-chevron-circle-right"
          onClick={nextSlide}
        ></i>
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              <div id={index === current?"text":""} className="text text-active">
                    <p>Reveling the Shimmer</p>
                    <h1>Elegant Design to bloom your Elegance</h1>
                    <button>Shop Now</button>
                    <button>Read More</button>
                  </div>
              {index === current && (
                  <img src={slide.img} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Banner;
