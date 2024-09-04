import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
import "./labelColor.css"; // Ensure this CSS file is imported

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  isLabelColor?: boolean;
  placeholder?: string;
};

const CustomInput = ({
  type,
  name,
  label,
  isLabelColor,
  placeholder,
}: TInputProps) => {
  return (
    <div
      style={{ marginBottom: "20px" }}
      className={`${isLabelColor && "custom-label"}`}
    >
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label={label}
            labelAlign="left" // Align label to ensure style applies correctly
          >
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              placeholder={placeholder}
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomInput;
