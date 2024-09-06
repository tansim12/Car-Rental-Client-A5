import BannerCard from "../../components/ui/BannerCard/BannerCard";
import HomePageSlider from "../../components/ui/Slider/HomePageSlider";


const HomePage = () => {
  return (
    <div className='h-[150vh] bg-pageBg'>
       {/* slider  */}
       <div className="">
        <HomePageSlider />
      </div>
      <div className=''>
       <BannerCard />
      </div>
    </div>
  );
};

export default HomePage;