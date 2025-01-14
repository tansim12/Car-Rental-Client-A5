/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import CustomTitle from "../Custom Title/CustomTitle";
import { useGetMostBookingCarsQuery } from "../../../Redux/Feature/Public User/user";
import { Skeleton } from "antd";

const MostBookingCar = () => {
  const { data, isLoading } = useGetMostBookingCarsQuery({});

  return (
    <>
      <div>
        <CustomTitle
          mainTitle="Top Booking Cars"
          subTitle="Showcasing My top booking car"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 container mx-auto px-3">
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="bg-slate-900 rounded-lg shadow-lg overflow-hidden">
                  <Skeleton.Image className="w-full h-48" />
                  <div className="p-4">
                    <Skeleton.Input className="w-full h-6 mb-2" />
                    <Skeleton.Input className="w-3/4 h-4 mb-2" />
                    <Skeleton.Input className="w-1/2 h-4 mb-2" />
                    <Skeleton.Button className="w-full mt-4" />
                  </div>
                </div>
              ))
          : data?.map((car: any) => (
              <CarCard key={car._id} car={car} />
            ))}
      </div>
    </>
  );
};

export default MostBookingCar;

const CarCard = ({ car }: { car: any }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-900 rounded-lg shadow-lg overflow-hidden">
      {car.images[0] ? (
        <img
          className="w-full h-48 object-cover"
          src={car.images[0]}
          alt={car.name}
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center">
          <span>No Image</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{car.name}</h3>
        <p className="text-white">{car.category}</p>
        <div
          className="text-white mt-2"
          dangerouslySetInnerHTML={{ __html: car.description }}
        />
        <p className="text-white font-bold mt-2">
          Price per day: ৳ {car.rentalPricePerDay}
        </p>
        <button
          onClick={() => navigate(`/car-details/${car?._id}`)}
          className="w-full my-5 bg-secondary text-black font-bold mt-5 md:px-4 md:py-2 rounded-full hover:bg-yellow-400 transition duration-200"
        >
          Details
        </button>
      </div>
    </div>
  );
};
