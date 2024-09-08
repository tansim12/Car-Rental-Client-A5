/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "antd";

type TCustomButtonProps = {
  name: string;
  isTransParent: boolean;
  icon?: any ; // Correct typing for icon
  size?: number;
  textColor?:string
};

const CustomButton: React.FC<TCustomButtonProps> = ({
  name,
  isTransParent,
  icon: Icon,
  size,textColor
}) => {
  return (
    <div>
      {isTransParent ? (
        <Button htmlType="submit" className={` cursor-pointer z-20 bg-transparent border-secondary px-5 py-5 md:px-10 md:py-7 text-${textColor ? textColor : "white"} hover:bg-white hover:text-black text-lg`}>
         {Icon && <Icon size={size} />} {name}
        </Button>
      ) : (
        <Button htmlType="submit"  className={` cursor-pointer z-20 bg-secondary border-none px-5 py-5 md:px-10 md:py-7 text-${textColor ? textColor : "white"} hover:bg-white hover:text-black text-lg`}>
          {Icon && <Icon size={size} />} {name} 
        </Button>
      )}
    </div>
  );
};

export default CustomButton;
