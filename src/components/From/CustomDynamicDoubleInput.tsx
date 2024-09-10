
import { Form, Input, Button } from "antd";
import { useFieldArray, Controller, useFormContext } from "react-hook-form";
import "./labelColor.css";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  isLabelColor?: boolean;
  placeholder?: string;
  option: string[];
};

const CustomDynamicDoubleInput = ({
  type,
  name,
  label,
  isLabelColor,
  option,
}: TInputProps) => {
  const { control } = useFormContext(); // Use useFormContext to access the form context

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });


    if (fields.length === 0) {
      const appendOptions = option.reduce((acc, item) => {
        acc[item] = ""; // Initialize each key with an empty string
        return acc;
      }, {} as { [key: string]: string }); // Define the accumulator type
      append(appendOptions); // Append an initial empty field
    }
 
  return (
    <div className={`${isLabelColor ? "custom-label" : ""}`}>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center mb-3">
          <div className="w-full">
            {option?.map((item,i) => (
              <Controller
              key={i}
                name={`${name}.${index}.${item}`}
                control={control}
                rules={{ required: `${item} is required` }}
                render={({ field, fieldState: { error } }) => (
                  <Form.Item
                    label={`${label} ${item} ${index + 1}`}
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                    className="w-full"
                  >
                    <Input
                      {...field}
                      placeholder={`Enter ${item} ${index + 1}`}
                      type={type}
                      size="large"
                    />
                  </Form.Item>
                )}
              />
            ))}

          
          </div>
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

      <Button type="link" onClick={() => append({ question: "", answer: "" })}>
        + Add FAQ
      </Button>
    </div>
  );
};

export default CustomDynamicDoubleInput;
