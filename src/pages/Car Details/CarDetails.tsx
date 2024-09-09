import BookingInfo from "../../components/ui/Booking Info/BookingInfo";
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
              <BookingInfo />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CarDetails;
