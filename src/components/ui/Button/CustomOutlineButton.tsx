/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";

type TCustomButtonProps = {
  name: string;
  isTransParent: boolean;
  icon?: any; // Corrected typing for icon
  size?: number;
  textColor?: string;
  customCss?: string;
  disabled?: boolean;
};

const CustomOutlineButton = ({
  textColor,
  icon: Icon,
  size,
  name,
  customCss,
  disabled,
  isTransParent,
}: TCustomButtonProps) => {
  return (
    <div>
      <Button
      style={{color:textColor ? textColor: "white"}}
        disabled={disabled}
        htmlType="submit"
        className={`cursor-pointer z-20 ${
          isTransParent
            ? `bg-transparent border-secondary`
            : `bg-secondary border-none`
        } ${
          disabled
            ? "bg-neutral-500 text-gray-200 cursor-not-allowed"
            : "bg-secondary text-white"
        } ${customCss ? customCss : "px-5 py-5 md:px-10 md:py-7"}  hover:bg-white hover:text-black text-lg`}
      >
        {Icon && <Icon size={size} />} {name}
      </Button>
    </div>
  );
};

export default CustomOutlineButton;
