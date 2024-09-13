/* eslint-disable @typescript-eslint/no-explicit-any */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./clipPath.css"

type TReviewProps ={
    name:string,
    text:string,
    role:string,
    avatar:string,
}

// Slick settings with responsive breakpoints
const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: "linear",

  // centerPadding: "60px",  // Padding around the center slide
  responsive: [
    {
      breakpoint: 1024, // Tablets and smaller
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768, // Mobile devices
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600, // Mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

// ReviewCard Component
const ReviewCard = ({ review }:any) => (
  <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm lg:max-w-md clip-path-custom">
    <div className="absolute top-4 left-4 text-yellow-400 text-4xl">“</div>
    <p className="mt-8 text-gray-300 text-sm leading-relaxed">{review.text}</p>
    <div className="mt-4 flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.971c.1.308.402.527.731.527h4.196c.959 0 1.358 1.231.655 1.856l-3.397 3.023c-.256.228-.37.587-.284.926l1.267 3.903c.296.912-.755 1.669-1.576 1.161L10 14.348l-3.432 2.021c-.821.508-1.872-.249-1.576-1.161l1.267-3.903c.086-.339-.028-.698-.284-.926L2.578 8.954c-.703-.625-.304-1.856.655-1.856h4.196c.329 0 .631-.219.731-.527l1.286-3.971z" />
        </svg>
      ))}
    </div>
    <div className="mt-6 flex items-center space-x-4">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="text-lg font-semibold">{review.name}</h4>
        <p className="text-sm text-gray-400">{review.role}</p>
      </div>
    </div>
  </div>
);

// Testimonials Section Component
const CustomerReview = () => {
  const testimonials:TReviewProps[] = [
    {
      name: "Olivia Brown",
      role: "Customer",
      avatar: "https://i.ibb.co/gD7JM9P/Tansim-Ahmed-Tashdid.jpg",
      text: "Came in for walk-in inspection and oil change. Brown is a delight to deal with. Highly recommend the shop.Came in for walk-in inspection and oil change. Brown is a delight to deal with. Highly recommend the shop.",
    },
    {
      name: "Dan Martin",
      role: "Customer",
      avatar: "https://i.ibb.co/gD7JM9P/Tansim-Ahmed-Tashdid.jpg",
      text: "Came in for walk-in inspection and oil change. Brown is a delight to deal with. Highly recommend the shop.Came in for walk-in inspection and oil change. Brown is a delight to deal with. Highly recommend the shop.",
    },
    {
      name: "Emily Martin",
      role: "Customer",
      avatar: "https://i.ibb.co/gD7JM9P/Tansim-Ahmed-Tashdid.jpg",
      text: "Came in for walk-in inspection and oil change. Brown is a delight to deal with. Highly recommend the shop.Came in for walk-in inspection and oil change. Brown is a delight to deal with. Highly recommend the shop.",
    },
  ];

  return (
    <section className=" py-10 px-3">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-black dark:text-white mb-12">What Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((review, index) => (
            <div key={index}>
              <div className="mx-3 flex justify-center items-center">
              <ReviewCard review={review} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReview;
