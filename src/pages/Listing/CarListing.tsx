
import Container from "../../components/ui/Container";
import Filter from "../../components/ui/Filter/Filter";
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
        <div className="flex justify-between items-center gap-5">
          {/* filter div  */}
          <div>
            <Filter />
          </div>
          {/* car show div  */}
          <div className="text-white text-lg">car show</div>
        </div>
      </Container>
    </div>
  );
};

export default CarListing;
