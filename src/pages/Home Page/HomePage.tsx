import BannerCard from "../../components/ui/BannerCard/BannerCard";
import Container from "../../components/ui/Container";
import CustomerReview from "../../components/ui/Customer Review/CustomerReview";
import FeaturedSection from "../../components/ui/Featured Section/FeaturedSection";
import MostBookingCar from "../../components/ui/Most Booking Car/MostBookingCar";
import HomePageSlider from "../../components/ui/Slider/HomePageSlider";
import WhyChooseUs from "../../components/ui/Why Choose Us/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      {/* slider  */}
      <div>
        <HomePageSlider />
      </div>
      <div>
        <BannerCard />
      </div>
      {/* feature section  */}
      <div className="dark:bg-pageBg bg-pageBg-light  ">
        <FeaturedSection />
      </div>

      <div className="my-10">
        <MostBookingCar />
      </div>
      <div className="">
        <WhyChooseUs />
      </div>
      {/* customer reviews  */}
      <div className="dark:bg-pageBg bg-pageBg-light">
        <Container>
          <CustomerReview />
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
