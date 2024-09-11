import BookingForm from "../../components/ui/Booking/BookingForm";
import Container from "../../components/ui/Container";
import ReUseableBanner from "../../components/ui/Reuseable Banner/ReUseableBanner";
import { FaCheck } from "react-icons/fa6";
import { TCar } from "../../Types/car.types";
import Faqs from "../../components/ui/Car Details Faqs/Faqs";
import { useGetSingleCarQuery } from "../../Redux/Feature/Admin/carManagement.api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPage from "../Loading/LoadingPage";
const CarDetails = () => {
  const [carData, setCarData] = useState<Partial<TCar>>({});
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCarQuery(id);

  useEffect(() => {
    if (data?.data) {
      setCarData(data?.data);
    }
  }, [data?.data]);

  return (
    <div>
      {/* banner div  */}
      <div>
        <div className="">
          <ReUseableBanner
            title={carData?.category ? carData?.category : "Rental Car"}
            subTitle="* Premium"
            image={
              carData?.images?.[0]
                ? carData?.images?.[0]
                : "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2.jpg"
            }
          />
        </div>
      </div>
      {/* details div  */}
      {!isLoading ? (
        <div className="px-2">
          <Container>
            <div className="grid grid-cols-12 gap-5">
              {/* General Information */}
              <div className="pr-3 text-white col-span-12 md:col-span-7">
                <p className="font-bold text-lg sm:text-2xl my-3">
                  General Information
                </p>
                <p className="text-sm">{carData?.description}</p>
                <div className="my-10 flex flex-col gap-3">
                  <p className="flex justify-start items-center gap-3">
                    <FaCheck className="bg-filterColor rounded-full size-8 p-2 text-secondary shadow-2xl" />
                    24/7 Roadside Assistance
                  </p>
                  <p className="flex justify-start items-center gap-3">
                    <FaCheck className="bg-filterColor rounded-full size-8 p-2 text-secondary shadow-2xl" />
                    Free Cancellation & Return
                  </p>
                  <p className="flex justify-start items-center gap-3">
                    <FaCheck className="bg-filterColor rounded-full size-8 p-2 text-secondary shadow-2xl" />
                    Rent Now Pay When You Arrive
                  </p>
                </div>

                <div className="text-lg my-4">
                  <span className="text-secondary">Features :</span>{" "}
                  <span>
                    {carData?.features?.map((i) => (
                      <span key={i}>{i}, </span>
                    ))}
                  </span>
                </div>
                <div className="text-lg my-4">
                  <span className="text-secondary">Safety Features :</span>{" "}
                  <span>
                    {carData?.safetyFeatures?.map((i) => (
                      <span key={i}>{i}, </span>
                    ))}
                  </span>
                </div>
                <div className="text-lg my-4">
                  <span className="text-secondary">Available Area :</span>{" "}
                  <span>
                    {carData?.availableAreas?.map((i) => (
                      <span key={i}>{i}, </span>
                    ))}
                  </span>
                </div>

                <div className="my-10">
                  <ul className="list-disc pl-5 grid grid-cols-3">
                    <li className="custom-bullet">
                      Category: {carData?.category}
                    </li>
                    <li className="custom-bullet">Type: {carData?.type}</li>
                    <li className="custom-bullet">Model: {carData?.model}</li>
                    <li className="custom-bullet">
                      Mileage: {carData?.mileage} M
                    </li>
                    <li className="custom-bullet">Color: {carData?.color}</li>
                    <li className="custom-bullet">
                      Seat: {carData?.seatingCapacity}
                    </li>
                    <li className="custom-bullet">
                      Door: {carData?.numberOfDoors}
                    </li>
                  </ul>
                </div>

                {/* gallery section  */}
                <div>
                  <p className="font-bold text-lg sm:text-2xl my-3">
                    Image Gallery
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-2 my-7">
                    {carData?.images?.map((item) => (
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={item}
                          alt="car image"
                          className="object-cover rounded-2xl transition-transform duration-700 ease-in-out transform hover:scale-110 cursor-pointer block"
                        />
                      </div>
                    ))}

                    {!carData?.images?.length && (
                      <img
                        src={
                          "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2.jpg"
                        }
                        alt="car image"
                        className="object-cover rounded-2xl transition-transform duration-700 ease-in-out transform hover:scale-110 cursor-pointer block"
                      />
                    )}
                  </div>
                </div>

                {/* car faqs   */}
                <div className="my-16">
                  <p className="font-bold text-lg sm:text-2xl mb-10">
                    Rental Conditions
                  </p>
                  <div>
                    <Faqs faqData={carData?.faqs as unknown as never} />
                  </div>
                </div>
              </div>

              {/* Booking Info */}
              <div className="col-span-12 md:col-span-5 p-4  md:-mt-28 opacity-90">
                <BookingForm carData={carData as Partial<TCar>} />
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};

export default CarDetails;
