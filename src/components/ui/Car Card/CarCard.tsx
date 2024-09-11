import { FaDoorOpen } from "react-icons/fa";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { TCar } from "../../../Types/car.types";
import { VscTypeHierarchy } from "react-icons/vsc";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

const CarCard = ({ item }: { item: Partial<TCar> }) => {
  const navigate = useNavigate();
  return (
    <div className="shadow-2xl bg-filterColor rounded-2x w-full">
      {/* img div  */}
      <div>
        <img
          src={
            item?.images?.[0]
              ? item?.images?.[0]
              : "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/7.jpg"
          }
          alt="car"
          className="rounded-t-2xl w-full h-56 object-cover"
        />
      </div>
      {/* info div  */}
      <div className="m-6 md:m-3 lg:m-10">
        <p className="font-bold text-white my-5">{item?.name}</p>
        <div className="text-base my-4">
                  <span className="text-secondary">Available Area :</span>{" "}
                  <span>
                    {item?.availableAreas?.map((i) => (
                      <span key={i}>{i}, </span>
                    ))}
                  </span>
                </div>

        <div className="flex flex-col gap-5 text-sm">
          <div className="flex justify-between items-center ">
            <p className="flex justify-center items-center gap-2">
              <BiSolidCategoryAlt className="text-secondary" size={20} />{" "}
              Category
            </p>
            <p>{item?.category}</p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="flex justify-center items-center gap-2">
              <VscTypeHierarchy className="text-secondary" size={20} /> Type
            </p>
            <p>{item?.type}</p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="flex justify-center items-center gap-2">
              <FaDoorOpen className="text-secondary" size={20} /> Doors
            </p>
            <p>{item?.numberOfDoors}</p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="flex justify-center items-center gap-2">
              <MdAirlineSeatReclineNormal
                className="text-secondary"
                size={20}
              />{" "}
              Seats
            </p>
            <p>{item?.seatingCapacity}</p>
          </div>
        </div>

        {/* price and details  */}
        <div className="flex justify-between items-center gap-4 mt-10">
          <p>
            <span className="font-bold text-2xl  text-secondary">
              {item?.rentalPricePerDay} ৳
            </span>{" "}
            <span className="text-gray-500"> /day</span>
          </p>

          <div>
            <Button
              onClick={() => navigate(`/car-details/${item?._id}`)}
              htmlType="submit"
              className={` cursor-pointer z-20 bg-secondary border-none px-5 py-5 lg:px-10 lg:py-7 text-black hover:bg-white hover:text-black text-lg`}
            >
              <FaDoorOpen size={20} /> Book
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
