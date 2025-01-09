import { FaDoorOpen } from "react-icons/fa";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { TCar } from "../../../Types/car.types";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

const CarCard = ({ item }: { item: Partial<TCar> }) => {
  const navigate = useNavigate();
  return (
    <div className="shadow-lg bg-filterColor rounded-xl w-full">
      {/* Image Section */}
      <div>
        <img
          src={
            item?.images?.[0]
              ? item?.images?.[0]
              : "https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/7.jpg"
          }
          alt="car"
          className="rounded-t-xl w-full h-56 object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="p-5">
        <p className="font-bold text-white text-lg mb-3">{item?.name}</p>
        <p className="text-sm text-gray-400 mb-4">
          <span className="text-secondary">Available Area:</span>{" "}
          {item?.availableAreas?.join(", ")}
        </p>

        {/* Feature List */}
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2">
              <BiSolidCategoryAlt className="text-secondary" size={20} /> Category
            </p>
            <p>{item?.category || "N/A"}</p>
          </div>
          
      
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2">
              <MdAirlineSeatReclineNormal
                className="text-secondary"
                size={20}
              />{" "}
              Seats
            </p>
            <p>{item?.seatingCapacity || "N/A"}</p>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center mt-5">
          <p className="text-lg font-bold text-secondary">
            {item?.rentalPricePerDay || "N/A"} ৳<span className="text-gray-500"> /day</span>
          </p>
          <Button
            onClick={() => navigate(`/car-details/${item?._id}`)}
            className="flex items-center bg-secondary border-none px-5 py-2 text-black hover:bg-white hover:text-black"
          >
            <FaDoorOpen size={20} className="mr-2" /> Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
