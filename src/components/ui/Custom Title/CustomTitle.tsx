

const CustomTitle = ({
    mainTitle,
    subTitle,
  }: {
    mainTitle: string;
    subTitle: string;
  }) => {
    return (
      <div className="w-full text-center   text-black dark:text-white">
        {/* Main Title */}
        <h1 className="text-2xl  md:text-4xl font-bold text-designColor mb-1">{mainTitle}</h1>
  
        {/* Subtitle */}
        <p className="text-sm md:text-lg text-lightText font-light  ">{subTitle}</p>
  
        {/* Decorative Line */}
        <div className="flex justify-center my-4">
          <div className="w-16 h-1 bg-designColor rounded"></div>
        </div>
      </div>
    );
  };
  
  export default CustomTitle;