import { FaDoorOpen } from "react-icons/fa";
import { Button } from "antd";

const CarCard = () => {
  return (
    <div className="shadow-2xl bg-filterColor rounded-2xl">
      {/* img div  */}
      <div>
        <img
          src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/7.jpg"
          alt="car"
          className="rounded-t-2xl"
        />
      </div>
      {/* info div  */}
      <div className="m-6 md:m-3 lg:m-10">
        <p className="font-bold text-white my-5">Lamborghini Urus</p>

        <div className="flex flex-col gap-5 text-sm">
          <div className="flex justify-between items-center ">
            <p className="flex justify-center items-center gap-2">
              <FaDoorOpen className="text-secondary" size={20} /> Category
            </p>
            <p>Sedan</p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="flex justify-center items-center gap-2">
              <FaDoorOpen className="text-secondary" size={20} /> Category
            </p>
            <p>Sedan</p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="flex justify-center items-center gap-2">
              <FaDoorOpen className="text-secondary" size={20} /> Category
            </p>
            <p>Sedan</p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="flex justify-center items-center gap-2">
              <FaDoorOpen className="text-secondary" size={20} /> Category
            </p>
            <p>Sedan</p>
          </div>
        </div>

        {/* price and details  */}
        <div className="flex justify-between items-center gap-4 mt-10">
          <p>
            <span className="font-bold text-2xl  text-secondary">$750</span>{" "}
            <span className="text-gray-500"> /day</span>
          </p>

          <div >
          <Button htmlType="submit"  className={` cursor-pointer z-20 bg-secondary border-none px-5 py-5 lg:px-10 lg:py-7 text-black hover:bg-white hover:text-black text-lg`}>
           <FaDoorOpen size={20} /> Book 
        </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
