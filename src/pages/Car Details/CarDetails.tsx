import BookingForm from "../../components/ui/Booking/BookingForm";
import Container from "../../components/ui/Container";
import ReUseableBanner from "../../components/ui/Reuseable Banner/ReUseableBanner";
import { FaCheck } from "react-icons/fa6";
const CarDetails = () => {
  return (
    <div>
      {/* banner div  */}
      <div>
        <div className="">
          <ReUseableBanner
            title="Rental Car"
            subTitle="* Premium"
            image="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2.jpg"
          />
        </div>
      </div>
      {/* details div  */}
      <div>
        <Container>
          <div className="grid grid-cols-12 gap-5">
            {/* General Information */}
            <div className="pr-3 text-white col-span-12 md:col-span-7">
              <p className="font-bold text-lg sm:text-2xl my-3">
                General Information
              </p>
              <p className="text-sm">
                Lorem pretium fermentum quam, sit amet cursus ante sollicitudin
                velen morbi consesua the miss sustion consation porttitor orci
                sit amet iaculis nisan. Lorem pretium fermentum quam sit amet
                cursus ante sollicitudin velen fermen morbinetion consesua the
                risus consequation the porttiton.
              </p>
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
            </div>

            {/* Booking Info */}
            <div className="col-span-12 md:col-span-5 p-4  md:-mt-28 opacity-90">
              <BookingForm />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CarDetails;

const dummyData = {
  _id: "66d4aefec8e2acb52b10846d",
  name: "Toyota Camry 23",
  category: "Luxury",
  brand: "Toyota",
  description: "A comfortable and reliable sedan with great fuel efficiency.",
  type: "New Arrival",
  model: "Camry XSE",
  VIN: "4T1BF1FK6HU123456",
  licensePlate: "ABC1234",
  color: "Silver",
  mileage: 25000,
  rentalPricePerDay: 500,
  advance: 100,
  availability: "available",
  availableAreas: ["Dhaka", "Chittagong", "Sylhet", "Pabna"],
  numberOfDoors: 4,
  seatingCapacity: 5,
  features: ["Leather seats", "Sunroof", "Bluetooth connectivity"],
  safetyFeatures: ["Anti-lock braking system", "Airbags", "Rearview camera"],
  images: [
    "https://res.cloudinary.com/dgm9w4vwh/image/upload/v1725214459/image_1725214457904.jpg",
  ],
  faqs: [
    {
      question: "What is the fuel efficiency of the car?",
      answer: "The car has a fuel efficiency of 28 miles per gallon.",
      id: "66d4aefec8e2acb52b10846e",
    },
    {
      question: "Is the car available for long-term rentals?",
      answer:
        "Yes, the car is available for both short-term and long-term rentals.",
      id: "66d4aefec8e2acb52b10846f",
    },
  ],
  isDeleted: false,
  createdAt: "2024-09-01T18:14:22.564Z",
  updatedAt: "2024-09-03T14:33:33.919Z",
  version: 0,
};
