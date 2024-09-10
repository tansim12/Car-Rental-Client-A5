/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useFieldArray, Controller } from "react-hook-form";
import "./labelColor.css";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  isLabelColor?: boolean;
  placeholder?: string;
};

const CustomDynamicInput = ({
  type,
  name,
  label,
  isLabelColor,
}: TInputProps) => {
  const { fields, append, remove } = useFieldArray({
    name, // Dynamic field name passed from parent
  });

  // Ensure at least one field is rendered initially
  useEffect(() => {
    if (fields.length === 0) {
      append(""); // Append an initial empty field
    }
  }, [fields, append]);

  return (
    <div className={`${isLabelColor ? "custom-label" : ""}`}>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center -mb-3">
          <Controller
            name={`${name}.${index}`} // Dynamic name for each color input
            rules={{ required: `${name} is required` }}
            render={({ field, fieldState: { error } }) => (
              <Form.Item
                label={`${label} ${index + 1}`}
                validateStatus={error ? "error" : ""}
                help={error?.message}
                className="w-full"
              >
                <Input
                  {...field}
                  placeholder={`${name} ${index + 1}`}
                  className="w-full"
                  type={type}
                  size="large"
                />
              </Form.Item>
            )}
          />
          <Button
            type="link"
            onClick={() => remove(index)}
            danger
            style={{ marginLeft: "10px" }}
          >
            ✖
          </Button>
        </div>
      ))}

      <Button type="link" onClick={() => append("")}>
        + Add
      </Button>
    </div>
  );
};

export default CustomDynamicInput;
