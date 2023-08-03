"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const sliderRef = useRef<Slider | null>(null); // Set initial type of null for sliderRef

  const startAutoScroll = () => {
    sliderRef.current?.slickPlay(); // Use optional chaining to safely access slickPlay()
  };

  const stopAutoScroll = () => {
    sliderRef.current?.slickPause(); // Use optional chaining to safely access slickPause()
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: stopAutoScroll,
    afterChange: startAutoScroll,
  };

  return (
    <div onMouseEnter={startAutoScroll} onMouseLeave={stopAutoScroll}>
      <Slider ref={sliderRef} {...settings}>
        <div className="company-img" style={{ marginTop: "150px" }}>
          <img src="/About/Foto About.png" alt="About" />
        </div>
        <div className="company-img" style={{ marginTop: "150px" }}>
          <img src="/About/Foto About.png" alt="About" />
        </div>
      </Slider>
    </div>
  );
}
