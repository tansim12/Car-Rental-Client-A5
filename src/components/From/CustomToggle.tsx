/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from "react-hook-form";
import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

type TCustomToggleProps = {
  name: string;
  label: string;
  defaultValue?: boolean;
};

const CustomToggle = ({
  name,
  label,
  defaultValue = false,
}: TCustomToggleProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">
        {label}
      </label>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Switch
            className="w-16"
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={field.value}
            onChange={(checked) => field.onChange(checked)}
          />
        )}
      />
    </div>
  );
};

export default CustomToggle;
