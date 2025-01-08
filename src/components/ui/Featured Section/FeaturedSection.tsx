/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserFriends, FaCar, FaCogs, FaSuitcase } from "react-icons/fa";
import { useGetAllCarsByUserQuery } from "../../../Redux/Feature/Public User/user";
import { TCar } from "../../../Types/car.types";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../../../pages/Loading/LoadingPage";
import CustomTitle from "../Custom Title/CustomTitle";

// Sample car data (Replace with dynamic data)

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
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllCarsByUserQuery([
    { name: "limit", value: 5 },
    { name: "sort", value: "-createdAt" },

    { name: "searchTerm", value: "Featured" },
    {
      name: "fields",
      value:
        "_id name images seatingCapacity numberOfDoors rentalPricePerDay mileage type category",
    },
  ]);

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
    <div className="mt-16">
      <div className="">
        <CustomTitle
          mainTitle="Featured Cars"
          subTitle="Showcasing My Latest car"
        />
      </div>
      <div className="slider-container">
        {!isLoading ? (
          <Slider {...settings}>
            {data?.data?.result?.map((car: Partial<TCar>) => (
              <div key={car?._id} className="px-4">
                <div className="bg-secondary hover:bg-white cursor-pointer rounded-xl shadow-lg text-start  lg:h-[70vh] mb-24 md:mb-16">
                  <div className="relative">
                    <img
                      src={
                        car.images?.[0]
                          ? car.images?.[0]
                          : "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/7.jpg"
                      }
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
                                  <FaUserFriends className="mr-1" />{" "}
                                  {car?.seatingCapacity}
                                </span>
                                {/* Door Icon */}
                                <span className="flex items-center">
                                  <FaCar className="mr-1" />{" "}
                                  {car?.numberOfDoors}
                                </span>
                                {/* Transmission Icon */}
                                <span className="flex items-center">
                                  <FaCogs className="mr-1" /> {car?.mileage}
                                </span>
                                {/* Bags Icon */}
                                <span className="flex items-center">
                                  <FaSuitcase className="mr-1" />{" "}
                                  {car?.category}{" "}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Right Section - Price and Details */}
                          <div className="flex items-center space-x-2 md:space-x-4">
                            <button
                              onClick={() =>
                                navigate(`/car-details/${car?._id}`)
                              }
                              className="bg-secondary text-black font-bold px-2 my-2 md:px-4 md:py-2 rounded-full hover:bg-yellow-400 transition duration-200"
                            >
                              Details
                            </button>
                            <div className="text-secondary ">
                              <span className="font-semibold md:font-bold text-sm md:text-lg">
                                {car?.rentalPricePerDay}
                                <span className="tex-lg">৳</span>
                              </span>{" "}
                              <br />
                              <span className="text-sm text-gray-400">
                                /day
                              </span>
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
        ) : (
          <LoadingPage />
        )}
      </div>
    </div>
  );
};

export default FeaturedSection;
