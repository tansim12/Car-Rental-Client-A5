import HomePageSlider from "../../components/ui/Slider/HomePageSlider";


const HomePage = () => {
  return (
    <div className='h-[150vh] bg-red-400 '>
       {/* slider  */}
       <div className="">
        <HomePageSlider />
      </div>
      <div className=''>
        Extra
      </div>
    </div>
  );
};

export default HomePage;