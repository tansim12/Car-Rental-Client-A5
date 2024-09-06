import React from "react";

// Define the type for card props
type CardProps = {
  title: string;
  description: string;
  stepNumber: number;
};

// Card component
const InfoCard: React.FC<CardProps> = ({ title, description, stepNumber }) => {
  return (
    
      <div className="relative bg-secondary hover:bg-white cursor-pointer rounded-xl shadow-lg p-5 text-start h-[250px]  lg:w-[300px] mx-2 transition-all duration-300 transform hover:-translate-y-6">
        {/* Step number background */}
        <div className="absolute right-[-15px] bottom-[-60px] z-[999px] text-pageBg opacity-90 text-[150px] sm:text-[180px] font-extrabold">
          {stepNumber}
        </div>
        {/* Card content */}
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
   
  );
};

// Card container
const BannerCard: React.FC = () => {
  // Card data array (dynamic content)
  const cardData = [
    {
      title: "Choose A Car",
      description:
        "View our range of cars, find your perfect car for the coming days.",
      stepNumber: 1,
    },
    {
      title: "Come In Contact",
      description:
        "Our advisor team is ready to help you with the booking process.",
      stepNumber: 2,
    },
    {
      title: "Enjoy Driving",
      description:
        "Receive the key and enjoy your car. We treat all our cars with respect.",
      stepNumber: 3,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center mt-[-50px] h-[120vh] lg:h-max bg-pageBg ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        {/* Map over card data to render cards dynamically */}
        {cardData.map((card) => (
          <InfoCard
            key={card.stepNumber}
            title={card.title}
            description={card.description}
            stepNumber={card.stepNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCard;
