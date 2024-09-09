import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";
import "./rangePicker.css"; // Import your CSS

const { RangePicker } = DatePicker;

type TDatePickerProps = {
  name: string;
  label?: string;
  placeholder?: string;
  isLabelColor?: boolean; // Add the prop for conditional styling
};

const CustomRangePicker = ({
  name,
  label,
  isLabelColor = false, // Default value as false
}: TDatePickerProps) => {
  return (
    <div
      className={`custom-date-picker ${isLabelColor ? "custom-label" : ""}`}
      style={{ marginBottom: "20px" }}
    >
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <RangePicker
              {...field}
              size="large"
              style={{ width: "100%" }}
             // Use the placeholder for both start and end
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomRangePicker;
