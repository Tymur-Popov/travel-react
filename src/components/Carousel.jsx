import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1532408840957-031d8034aeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1580725869538-9b164c27c44f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1595256875238-9c2111c52554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1589806036187-fcbc6a7a23b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1565012869983-a73783bdf6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1601604416791-312e61493baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div  data-aos="flip-left" className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsFillArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-gray-600 hover:text-gray-300 cursor-pointer left-8"
      />
      <BsFillArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-gray-600 hover:text-gray-300 cursor-pointer right-8"
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100 transition duration-700 ease-in-out" : "opacity-0 transition duration-700 ease-in-out"}>
          {index === slide && (
            <img className="w-full rounded-md sm:max-h-[450px]  lg:max-h-[600px]" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
