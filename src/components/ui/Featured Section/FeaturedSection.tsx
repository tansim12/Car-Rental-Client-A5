/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserFriends, FaCar, FaCogs, FaSuitcase } from "react-icons/fa";
// Sample car data (Replace with dynamic data)
const cars = [
  {
    name: "Rolls Royce Cullinan",
    image:
      "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/7.jpg",
    price: 900,
    seats: 4,
    doors: 5,
    transmission: "Auto",
    bags: 2,
  },
  {
    name: "Ferrari 488",
    image:
      "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2.jpg",
    price: 1500,
    seats: 2,
    doors: 2,
    transmission: "Manual",
    bags: 1,
  },
  {
    name: "Rolls Royce Cullinan",
    image:
      "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/7.jpg",
    price: 900,
    seats: 4,
    doors: 5,
    transmission: "Auto",
    bags: 2,
  },
  {
    name: "Ferrari 488",
    image:
      "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2.jpg",
    price: 1500,
    seats: 2,
    doors: 2,
    transmission: "Manual",
    bags: 1,
  },
  {
    name: "Rolls Royce Cullinan",
    image:
      "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/7.jpg",
    price: 900,
    seats: 4,
    doors: 5,
    transmission: "Auto",
    bags: 2,
  },
  {
    name: "Ferrari 488",
    image:
      "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2.jpg",
    price: 1500,
    seats: 2,
    doors: 2,
    transmission: "Manual",
    bags: 1,
  },
  // Add more cars here
];

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="absolute right-16 md:right-56 top-1/2 transform -translate-y-1/2 bg-secondary text-black p-3 md:p-5 rounded-full z-10"
      onClick={onClick}
    >
      <FaArrowRight />
    </button>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="absolute left-16 md:left-56 top-1/2 transform -translate-y-1/2 bg-secondary text-black p-3 md:p-5  rounded-full z-10"
      onClick={onClick}
    >
      <FaArrowLeft />
    </button>
  );
}

const FeaturedSection: React.FC = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cars.map((car, index) => (
          <div key={index} className="px-4">
            <div className="bg-secondary hover:bg-white cursor-pointer rounded-xl shadow-lg text-start  lg:h-[70vh] my-32">
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="object-cover w-full h-[70vh] rounded-t-xl"
                />

                <div className=" md:-mt-12  absolute w-full">
                  <div className="  md:w-[70%] mx-auto   h-24 rounded-b-3xl md:rounded-3xl border-gray-700 border-2 bg-pageBg shadow-2xl">
                    <div className="flex justify-evenly items-center  text-white rounded-lg p-4 shadow-lg">
                      {/* Left Section - Car Info */}
                      <div className="flex items-center w-full">
                        <div className="space-y-2">
                          <h3 className="text-base md:text-xl font-bold">
                            {car?.name}
                          </h3>
                          <div className="flex space-x-2 text-secondary text-[12px] md:text-sm">
                            {/* Seat Icon */}
                            <span className="flex items-center">
                              <FaUserFriends className="mr-1" /> {car?.seats}
                            </span>
                            {/* Door Icon */}
                            <span className="flex items-center">
                              <FaCar className="mr-1" /> {car?.doors}
                            </span>
                            {/* Transmission Icon */}
                            <span className="flex items-center">
                              <FaCogs className="mr-1" /> {car?.transmission}
                            </span>
                            {/* Bags Icon */}
                            <span className="flex items-center">
                              <FaSuitcase className="mr-1" /> {car?.bags} Bags
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Section - Price and Details */}
                      <div className="flex items-center space-x-2 md:space-x-4">
                        <button className="bg-secondary text-black font-bold px-2 my-2 md:px-4 md:py-2 rounded-full hover:bg-yellow-400 transition duration-200">
                          Details
                        </button>
                        <div className="text-secondary ">
                          <span className="font-semibold md:font-bold text-sm md:text-lg">
                            ${car?.price}
                          </span>{" "}
                          <br />
                          <span className="text-sm text-gray-400">/day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedSection;
