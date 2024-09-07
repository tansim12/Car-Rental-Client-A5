import BannerCard from "../../components/ui/BannerCard/BannerCard";
import Container from "../../components/ui/Container";
import CustomerReview from "../../components/ui/Customer Review/CustomerReview";
import FeaturedSection from "../../components/ui/Featured Section/FeaturedSection";
import HomePageSlider from "../../components/ui/Slider/HomePageSlider";
import WhyChooseUs from "../../components/ui/Why Choose Us/WhyChooseUs";

const HomePage = () => {
  return (
    <div className=" ">
      {/* slider  */}
      <div className="">
        <HomePageSlider />
      </div>
      <div className="">
        <BannerCard />
      </div>
      {/* feature section  */}
      <div className=" ">
        <FeaturedSection />
      </div>
      <div className="">
        <WhyChooseUs />
        </div>
      {/* customer reviews  */}
      <div className="">
        <Container>
          <CustomerReview />
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
