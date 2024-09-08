import CarCard from "../../components/ui/Car Card/CarCard";
import Container from "../../components/ui/Container";
import Filter from "../../components/ui/Filter/Filter";
import FilterDrawer from "../../components/ui/Filter/FilterDrawer";
import ReUseableBanner from "../../components/ui/Reuseable Banner/ReUseableBanner";

const CarListing = () => {
  return (
    <div>
      <div className="">
        <ReUseableBanner
          title="Rental Car"
          subTitle="* Premium"
          image="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2.jpg"
        />
      </div>

      <Container>
        <div className="flex justify-between  gap-5">
          {/* filter div  */}
          <div className="hidden md:block -mt-[113px] opacity-90">
            <Filter />
          </div>
          <div className="visible md:hidden mt-4 absolute">
            <FilterDrawer />
          </div>
          {/* car show div  */}
          <div className="text-white text-lg mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              <CarCard />
              <CarCard />
              <CarCard />
              <CarCard />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CarListing;
