import React, { useState } from "react";
import car from "../../../assets/Videos/car.mp4";

const HomePageSlider: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true); // Show video when it's loaded
  };

  return (
    <div className="">
      {/* Conditionally display image until the video is ready */}
      {!videoLoaded && (
        <img
          src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/14.jpg"
          alt="Background"
          className="h-[100vh] w-screen object-cover absolute top-0 left-0"
        />
      )}

      <video
        src={car}
        className={`h-[100vh] w-screen object-cover  top-0 left-0 transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted={true}
        loop
        preload="auto"
        onCanPlayThrough={handleVideoLoaded} // Trigger when video is ready to play
      />
    </div>
  );
};

export default HomePageSlider;
