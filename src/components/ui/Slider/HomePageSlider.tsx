import React, { useState } from "react";
import car from "../../../assets/Videos/car.mp4";
import { FaArrowTrendUp } from "react-icons/fa6";
import CustomButton from "../Button/CustomButton";
import { useNavigate } from "react-router-dom";
import LocationSearch from "./LocationSearch";
import homeBanner from "../../../assets/Image/home banner.jpg";
const HomePageSlider: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const navigate = useNavigate();
  const handleVideoLoaded = () => {
    setVideoLoaded(true); // Show video when it's loaded
  };

  return (
    <div className="relative h-[70vh]">
      {/* Background Image */}
      {!videoLoaded && (
        <img
          src={
            homeBanner
              ? homeBanner
              : "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/7.jpg"
          }
          alt="Background"
          className="h-full w-full object-cover absolute top-0 left-0"
        />
      )}

      {/* Video */}
      <video
        src={car}
        className={`h-full w-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        preload="auto"
        onCanPlayThrough={handleVideoLoaded}
      />

      {/* Text and Button */}
      <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center text-center">
        <p className="text-secondary text-lg italic">* Premium</p>
        <p className="text-3xl md:text-5xl text-white font-serif font-extrabold my-3">
          Rental Car
        </p>
        <p className="text-sm md:text-lg">
          <span className="text-white">Bugatti Mistral W16</span>{" "}
          <span className="text-secondary font-bold">$800</span>
          <span className="text-white">/ day</span>
        </p>
        {/* Button */}
        <div className="flex justify-center items-center gap-3 mt-5">
          <div onClick={() => navigate("/listing")}>
            <CustomButton
              name="Book Now"
              isTransParent={false}
              icon={FaArrowTrendUp}
              size={20}
            />
          </div>
          <div>
            <LocationSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSlider;
